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
    { label: "Fabric Nodes", value: "24", icon: Users },
    { label: "Smart Contracts", value: "8", icon: Activity },
    { label: "HSM Keys Active", value: "156", icon: Shield },
  ];

  const recentActivity = [
    { user: "Supplier-Alpha", action: "New chaincode invoked", time: "5 min ago" },
    { user: "IoT-Gateway", action: "GPS data anchored to Polygon", time: "15 min ago" },
    { user: "AI-Engine", action: "Fraud detection alert triggered", time: "32 min ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Network Administration</h1>
          <p className="text-muted-foreground">Hyperledger Fabric network control with HSM key management</p>
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
              <CardTitle>Network Activity</CardTitle>
              <CardDescription>Real-time events from Kafka event stream</CardDescription>
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
              <CardTitle>Blockchain Controls</CardTitle>
              <CardDescription>Network and security management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleSystemAction("Keycloak user sync")}
              >
                <Users className="mr-2 h-4 w-4" />
                Manage Users (Keycloak)
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleSystemAction("Fabric channel monitor")}
              >
                <Activity className="mr-2 h-4 w-4" />
                Fabric Channels
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => handleSystemAction("HSM key rotation")}
              >
                <Shield className="mr-2 h-4 w-4" />
                HSM Key Management
              </Button>
              <Button 
                className="w-full justify-start bg-gradient-primary hover:opacity-90"
                onClick={() => handleSystemAction("Deploy chaincode")}
              >
                <Settings className="mr-2 h-4 w-4" />
                Deploy Chaincode
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
