import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Plus, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Supplier = () => {
  const handleNewShipment = () => {
    toast.success("Smart contract triggered! New shipment registered on blockchain");
  };

  const products = [
    { name: "Premium Coffee Beans", quantity: "500 kg", status: "Ready to Ship", batch: "BCH-001" },
    { name: "Organic Tea Leaves", quantity: "300 kg", status: "In Stock", batch: "BCH-002" },
    { name: "Raw Cocoa", quantity: "750 kg", status: "Processing", batch: "BCH-003" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Supplier Portal</h1>
          <p className="text-muted-foreground">Manage raw materials and initiate blockchain shipments</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Inventory</p>
                  <p className="text-3xl font-bold mt-2">1,550 kg</p>
                </div>
                <Package className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Shipments This Month</p>
                  <p className="text-3xl font-bold mt-2">24</p>
                </div>
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-primary/5">
            <CardContent className="pt-6">
              <Button 
                onClick={handleNewShipment}
                className="w-full bg-gradient-primary hover:opacity-90"
                size="lg"
              >
                <Plus className="mr-2 h-5 w-5" />
                New Shipment
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Products</CardTitle>
            <CardDescription>Manage your supply chain inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="space-y-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">Batch: {product.batch} • {product.quantity}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === "Ready to Ship" ? "bg-primary/10 text-primary" :
                      product.status === "In Stock" ? "bg-accent/10 text-accent" :
                      "bg-secondary/10 text-secondary"
                    }`}>
                      {product.status}
                    </span>
                    <Button size="sm" variant="outline">
                      Update
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

export default Supplier;
