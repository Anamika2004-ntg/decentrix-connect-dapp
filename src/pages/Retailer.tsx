import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, ShoppingCart, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Retailer = () => {
  const handleSale = () => {
    toast.success("Sale recorded on blockchain! Smart contract executed");
  };

  const inventory = [
    { product: "Premium Coffee", stock: 45, price: "$12.99", trend: "+8%" },
    { product: "Organic Tea", stock: 32, price: "$9.99", trend: "+5%" },
    { product: "Dark Chocolate", stock: 18, price: "$6.99", trend: "-2%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Retailer Portal</h1>
          <p className="text-muted-foreground">Point of sale and inventory blockchain management</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today's Sales</p>
                  <p className="text-3xl font-bold mt-2">$2,847</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground">SKUs in Stock</p>
                <p className="text-3xl font-bold mt-2">156</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground">Customers Today</p>
                <p className="text-3xl font-bold mt-2">89</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary/5">
            <CardContent className="pt-6">
              <Button 
                onClick={handleSale}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Record Sale
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Overview</CardTitle>
            <CardDescription>Current stock levels and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inventory.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center">
                      <Store className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{item.product}</p>
                      <p className="text-sm text-muted-foreground">
                        Stock: {item.stock} units • {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className={`text-sm font-medium ${
                        item.trend.startsWith('+') ? 'text-primary' : 'text-destructive'
                      }`}>
                        {item.trend}
                      </p>
                      <p className="text-xs text-muted-foreground">vs last week</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Restock
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

export default Retailer;
