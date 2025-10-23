import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Package, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Customer = () => {
  const orders = [
    { id: "ORD-501", product: "Premium Coffee Beans", status: "Delivered", date: "Jan 18, 2024" },
    { id: "ORD-502", product: "Organic Tea Set", status: "In Transit", date: "Jan 19, 2024" },
    { id: "ORD-503", product: "Dark Chocolate Box", status: "Processing", date: "Jan 20, 2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Customer Portal</h1>
          <p className="text-muted-foreground">Track your orders with blockchain verification</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="text-3xl font-bold mt-2">24</p>
                </div>
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground">Active Orders</p>
                <p className="text-3xl font-bold mt-2">2</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary/5">
            <CardContent className="pt-6">
              <Link to="/track">
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <Package className="mr-2 h-4 w-4" />
                  Track Order
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
            <CardDescription>View and track all your purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center">
                      {order.status === "Delivered" ? (
                        <CheckCircle className="h-6 w-6 text-primary" />
                      ) : (
                        <Package className="h-6 w-6 text-accent" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{order.product}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.id} • {order.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "Delivered" ? "bg-primary/10 text-primary" :
                      order.status === "In Transit" ? "bg-accent/10 text-accent" :
                      "bg-secondary/10 text-secondary"
                    }`}>
                      {order.status}
                    </span>
                    <Link to="/track">
                      <Button size="sm" variant="outline">
                        Track
                      </Button>
                    </Link>
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

export default Customer;
