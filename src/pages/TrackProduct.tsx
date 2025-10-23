import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, MapPin, CheckCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const TrackProduct = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const trackingStages = [
    { stage: "Supplier", location: "Jakarta, Indonesia", timestamp: "2024-01-15 08:30", status: "completed" },
    { stage: "Manufacturer", location: "Bangkok, Thailand", timestamp: "2024-01-16 14:20", status: "completed" },
    { stage: "Distributor", location: "Singapore", timestamp: "2024-01-18 09:15", status: "completed" },
    { stage: "Retailer", location: "Kuala Lumpur, Malaysia", timestamp: "2024-01-19 11:00", status: "active" },
    { stage: "Customer", location: "Pending Delivery", timestamp: "Est. 2024-01-20", status: "pending" },
  ];

  const handleTrack = () => {
    if (!trackingId.trim()) {
      toast.error("Please enter a tracking ID");
      return;
    }
    setIsTracking(true);
    toast.success("Product located on blockchain!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Track Your Product</h1>
            <p className="text-xl text-muted-foreground">
              Enter your tracking ID to view real-time blockchain verification
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8 shadow-card">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input
                    placeholder="Enter Tracking ID (e.g., DX-2024-001234)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="h-12 text-lg"
                    onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                  />
                </div>
                <Button 
                  onClick={handleTrack}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Track
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {isTracking && (
            <div className="space-y-6 animate-fade-in">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-6 w-6 text-primary" />
                    Product Information
                  </CardTitle>
                  <CardDescription>Tracking ID: {trackingId || "DX-2024-001234"}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Product Name</p>
                      <p className="font-medium">Premium Coffee Beans</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Batch Number</p>
                      <p className="font-medium">BCH-2024-Q1-089</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Origin</p>
                      <p className="font-medium">Jakarta, Indonesia</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Blockchain Hash</p>
                      <p className="font-medium text-xs">0x7a8f...3d2e</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Supply Chain Journey</CardTitle>
                  <CardDescription>Verified stages on the blockchain</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingStages.map((stage, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            stage.status === "completed" ? "bg-primary text-primary-foreground" :
                            stage.status === "active" ? "bg-accent text-accent-foreground animate-glow" :
                            "bg-muted text-muted-foreground"
                          }`}>
                            {stage.status === "completed" ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : stage.status === "active" ? (
                              <Clock className="h-5 w-5" />
                            ) : (
                              <Package className="h-5 w-5" />
                            )}
                          </div>
                          {index < trackingStages.length - 1 && (
                            <div className={`w-0.5 h-12 ${
                              stage.status === "completed" ? "bg-primary" : "bg-muted"
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-semibold text-lg">{stage.stage}</p>
                              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                <MapPin className="h-3 w-3" />
                                {stage.location}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">{stage.timestamp}</p>
                            </div>
                            {stage.status === "completed" && (
                              <Button size="sm" variant="outline">
                                View Receipt
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackProduct;
