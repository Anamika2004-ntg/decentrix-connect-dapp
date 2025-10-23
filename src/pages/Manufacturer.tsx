import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Play, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Manufacturer = () => {
  const handleStartProduction = () => {
    toast.success("Production smart contract executed! Blockchain updated");
  };

  const batches = [
    { id: "MFG-001", product: "Roasted Coffee", stage: "Roasting", progress: 75 },
    { id: "MFG-002", product: "Tea Packaging", stage: "Quality Check", progress: 90 },
    { id: "MFG-003", product: "Chocolate Bars", stage: "Cooling", progress: 45 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Manufacturer Portal</h1>
          <p className="text-muted-foreground">Production tracking and smart contract execution</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Lines</p>
                  <p className="text-3xl font-bold mt-2">8</p>
                </div>
                <Factory className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground">Production Rate</p>
                <p className="text-3xl font-bold mt-2">94%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div>
                <p className="text-sm text-muted-foreground">Quality Score</p>
                <p className="text-3xl font-bold mt-2">98.5</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary/5">
            <CardContent className="pt-6">
              <Button 
                onClick={handleStartProduction}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                <Play className="mr-2 h-4 w-4" />
                Start New Batch
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Production Batches</CardTitle>
            <CardDescription>Monitor active manufacturing processes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {batches.map((batch) => (
                <div key={batch.id} className="space-y-3 p-4 rounded-lg border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{batch.product}</p>
                      <p className="text-sm text-muted-foreground">Batch: {batch.id} • Stage: {batch.stage}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{batch.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all"
                        style={{ width: `${batch.progress}%` }}
                      />
                    </div>
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

export default Manufacturer;
