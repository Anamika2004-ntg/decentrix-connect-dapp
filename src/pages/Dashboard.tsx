import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, TrendingUp, Users, Activity, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { title: "Total Products", value: "1,234", change: "+12%", icon: Package, color: "text-primary" },
    { title: "Active Transactions", value: "89", change: "+5%", icon: Activity, color: "text-accent" },
    { title: "Network Partners", value: "42", change: "+3", icon: Users, color: "text-secondary" },
    { title: "Success Rate", value: "98.5%", change: "+2%", icon: TrendingUp, color: "text-primary-glow" },
  ];

  const recentTransactions = [
    { id: "TX001", product: "Premium Coffee Beans", status: "Delivered", timestamp: "2 hours ago" },
    { id: "TX002", product: "Organic Tea Leaves", status: "In Transit", timestamp: "5 hours ago" },
    { id: "TX003", product: "Roasted Almonds", status: "Processing", timestamp: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your supply chain operations in real-time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-primary font-medium">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-primary/10 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest blockchain transactions on your network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="space-y-1">
                      <p className="font-medium">{tx.product}</p>
                      <p className="text-sm text-muted-foreground">{tx.id} • {tx.timestamp}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tx.status === "Delivered" ? "bg-primary/10 text-primary" :
                        tx.status === "In Transit" ? "bg-accent/10 text-accent" :
                        "bg-secondary/10 text-secondary"
                      }`}>
                        {tx.status}
                      </span>
                      <Button size="sm" variant="ghost">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and navigation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/track">
                <Button className="w-full justify-start" variant="outline">
                  <Package className="mr-2 h-4 w-4" />
                  Track Product
                </Button>
              </Link>
              <Link to="/transaction-history">
                <Button className="w-full justify-start" variant="outline">
                  <Activity className="mr-2 h-4 w-4" />
                  View History
                </Button>
              </Link>
              <Button className="w-full justify-start bg-gradient-primary hover:opacity-90">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                New Transaction
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
