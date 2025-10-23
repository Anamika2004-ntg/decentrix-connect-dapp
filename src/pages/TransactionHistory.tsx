import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Hash } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TransactionHistory = () => {
  const transactions = [
    { 
      id: "TX-001", 
      hash: "0x7a8f...3d2e", 
      type: "Product Transfer", 
      from: "Manufacturer", 
      to: "Distributor",
      timestamp: "2024-01-20 14:30",
      status: "Confirmed"
    },
    { 
      id: "TX-002", 
      hash: "0x9b2c...5f4a", 
      type: "Quality Check", 
      from: "Distributor", 
      to: "Retailer",
      timestamp: "2024-01-20 12:15",
      status: "Confirmed"
    },
    { 
      id: "TX-003", 
      hash: "0x4d1e...8c7b", 
      type: "Sale Record", 
      from: "Retailer", 
      to: "Customer",
      timestamp: "2024-01-20 10:45",
      status: "Pending"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Transaction History</h1>
          <p className="text-muted-foreground">Complete blockchain transaction ledger</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blockchain Transactions</CardTitle>
            <CardDescription>All verified transactions on the network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((tx) => (
                <div key={tx.id} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{tx.type}</p>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          tx.status === "Confirmed" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-secondary/10 text-secondary"
                        }`}>
                          {tx.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{tx.timestamp}</p>
                    </div>
                    {tx.status === "Confirmed" ? (
                      <CheckCircle className="h-5 w-5 text-primary" />
                    ) : (
                      <Clock className="h-5 w-5 text-secondary animate-glow" />
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Transaction ID</p>
                      <p className="font-medium">{tx.id}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">From</p>
                      <p className="font-medium">{tx.from}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">To</p>
                      <p className="font-medium">{tx.to}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Hash className="h-4 w-4" />
                      <span className="font-mono">{tx.hash}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View on Explorer
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

export default TransactionHistory;
