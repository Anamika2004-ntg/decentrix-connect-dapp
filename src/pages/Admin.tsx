import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Activity, Shield, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Admin = () => {
  const handleSystemAction = (action: string) => {
    toast.success(`${action} smart contract executed!`);
  };

  const networkStats = [
    { label: "Total Users", value: "342", icon: Users },
    { label: "Active Nodes", value: "24", icon: Activity },
    { label: "Security Level", value: "High", icon: Shield },
  ];

  const recentActivity = [
    { user: "Supplier-Alpha", action: "New shipment created", time: "5 min ago" },
    { user: "Mfg-Beta", action: "Production batch completed", time: "15 min ago" },
    { user: "Dist-Gamma", action: "Route updated", time: "32 min ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">System management and blockchain network control</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {networkStats.map((stat, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Network Activity</CardTitle>
              <CardDescription>Latest actions across the blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start justify-between p-3 rounded-lg border border-border">
                    <div className="space-y-1">
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Controls</CardTitle>
              <CardDescription>Blockchain management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleSystemAction("User verification")}
              >
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleSystemAction("Network monitor")}
              >
                <Activity className="mr-2 h-4 w-4" />
                Network Monitor
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleSystemAction("Security audit")}
              >
                <Shield className="mr-2 h-4 w-4" />
                Security Audit
              </Button>
              <Button 
                className="w-full justify-start bg-gradient-primary hover:opacity-90"
                onClick={() => handleSystemAction("System settings")}
              >
                <Settings className="mr-2 h-4 w-4" />
                System Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
