import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapLocation {
  stage: string;
  location: string;
  coordinates: [number, number];
  status: 'completed' | 'active' | 'pending';
}

const SupplyChainMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Supply chain locations with coordinates
  const locations: MapLocation[] = [
    { stage: 'Supplier', location: 'Jakarta, Indonesia', coordinates: [106.8456, -6.2088], status: 'completed' },
    { stage: 'Manufacturer', location: 'Bangkok, Thailand', coordinates: [100.5018, 13.7563], status: 'completed' },
    { stage: 'Distributor', location: 'Singapore', coordinates: [103.8198, 1.3521], status: 'completed' },
    { stage: 'Retailer', location: 'Kuala Lumpur, Malaysia', coordinates: [101.6869, 3.1390], status: 'active' },
    { stage: 'Customer', location: 'Pending Delivery', coordinates: [101.7000, 3.2000], status: 'pending' },
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [103.8198, 3.5], // Centered on Southeast Asia
      zoom: 4.5,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      if (!map.current) return;

      // Add markers for each location
      locations.forEach((loc) => {
        const el = document.createElement('div');
        el.className = 'supply-chain-marker';
        el.style.width = '24px';
        el.style.height = '24px';
        el.style.borderRadius = '50%';
        el.style.border = '3px solid white';
        el.style.cursor = 'pointer';
        
        if (loc.status === 'completed') {
          el.style.backgroundColor = '#10b981'; // green
        } else if (loc.status === 'active') {
          el.style.backgroundColor = '#8b5cf6'; // purple
          el.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.8)';
        } else {
          el.style.backgroundColor = '#6b7280'; // gray
        }

        new mapboxgl.Marker(el)
          .setLngLat(loc.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div style="padding: 8px;">
                  <h3 style="font-weight: bold; margin-bottom: 4px;">${loc.stage}</h3>
                  <p style="font-size: 12px; color: #666;">${loc.location}</p>
                </div>
              `)
          )
          .addTo(map.current!);
      });

      // Draw route line between completed stages
      const completedCoordinates = locations
        .filter(loc => loc.status === 'completed' || loc.status === 'active')
        .map(loc => loc.coordinates);

      map.current!.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: completedCoordinates,
          },
        },
      });

      map.current!.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#10b981',
          'line-width': 3,
          'line-opacity': 0.8,
        },
      });

      // Animated dashed line for pending route
      if (locations[3].status === 'active' && locations[4].status === 'pending') {
        map.current!.addSource('pending-route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [locations[3].coordinates, locations[4].coordinates],
            },
          },
        });

        map.current!.addLayer({
          id: 'pending-route',
          type: 'line',
          source: 'pending-route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#8b5cf6',
            'line-width': 3,
            'line-dasharray': [2, 4],
            'line-opacity': 0.6,
          },
        });
      }
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-border">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm p-4 rounded-lg border border-border shadow-lg max-w-xs">
        <h3 className="font-semibold mb-2 text-sm">Supply Chain Route</h3>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" style={{ boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}></div>
            <span>Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted"></div>
            <span>Pending</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm p-3 rounded-lg border border-border shadow-lg text-xs">
        <p className="text-muted-foreground">🔒 Secured by Hyperledger Fabric</p>
      </div>
    </div>
  );
};

export default SupplyChainMap;
