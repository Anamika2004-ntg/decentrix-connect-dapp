import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MapPin, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Distributor = () => {
  const handleDispatch = () => {
    toast.success("Dispatch smart contract triggered! Blockchain updated");
  };

  const shipments = [
    { id: "SHP-101", destination: "Singapore", status: "In Transit", eta: "2 hours" },
    { id: "SHP-102", destination: "Kuala Lumpur", status: "Loading", eta: "6 hours" },
    { id: "SHP-103", destination: "Bangkok", status: "Ready", eta: "1 day" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Distributor Portal</h1>
          <p className="text-muted-foreground">Logistics management and blockchain verification</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Routes</p>
                  <p className="text-3xl font-bold mt-2">12</p>
                </div>
                <Truck className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground">Warehouses</p>
                <p className="text-3xl font-bold mt-2">5</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground">On-Time Rate</p>
                <p className="text-3xl font-bold mt-2">96%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary/5">
            <CardContent className="pt-6">
              <Button 
                onClick={handleDispatch}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                <Truck className="mr-2 h-4 w-4" />
                Dispatch Order
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Shipments</CardTitle>
            <CardDescription>Real-time tracking of distribution network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {shipments.map((shipment) => (
                <div key={shipment.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{shipment.id}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {shipment.destination} • ETA: {shipment.eta}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      shipment.status === "In Transit" ? "bg-primary/10 text-primary" :
                      shipment.status === "Loading" ? "bg-accent/10 text-accent" :
                      "bg-secondary/10 text-secondary"
                    }`}>
                      {shipment.status}
                    </span>
                    <Button size="sm" variant="outline">
                      Track
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Distributor;
