import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Database, Shield, Cpu, Radio, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Architecture = () => {
  const layers = [
    {
      icon: Shield,
      title: "Blockchain Layer",
      items: [
        "Hyperledger Fabric (Permissioned)",
        "Quorum for specific use cases",
        "Optional Polygon L2 anchoring",
        "Solidity & Fabric chaincode (Go/Node)"
      ]
    },
    {
      icon: Server,
      title: "Backend & APIs",
      items: [
        "Node.js / Go microservices",
        "GraphQL & REST endpoints",
        "Kafka event streaming",
        "Real-time WebSocket support"
      ]
    },
    {
      icon: Cpu,
      title: "AI & Analytics",
      items: [
        "Kafka → Spark/Databricks pipeline",
        "XGBoost/LightGBM for fraud detection",
        "Neo4j graph analytics",
        "Feast feature store"
      ]
    },
    {
      icon: Database,
      title: "Storage & Security",
      items: [
        "S3-compatible object storage",
        "Encrypted PostgreSQL metadata",
        "KMS/HSM key management",
        "OWASP security standards"
      ]
    },
    {
      icon: Radio,
      title: "IoT Integration",
      items: [
        "EMQX/MQTT gateway",
        "GPS tracking devices",
        "Weight sensors & bridges",
        "E-seal tamper detection"
      ]
    },
    {
      icon: Lock,
      title: "Identity & Access",
      items: [
        "Keycloak / OpenID Connect",
        "HSM for cryptographic keys",
        "Role-based access control",
        "Multi-factor authentication"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Technical Architecture</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade blockchain infrastructure with IoT, AI, and advanced security
            </p>
          </div>

          {/* Architecture Layers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {layers.map((layer, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <layer.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{layer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {layer.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Flow */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle>Data Flow Architecture</CardTitle>
              <CardDescription>End-to-end data pipeline from IoT to blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div className="flex-1">
                    <p className="font-medium">IoT Device Collection</p>
                    <p className="text-sm text-muted-foreground">GPS, weight sensors, e-seals transmit via MQTT to EMQX gateway</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">2</div>
                  <div className="flex-1">
                    <p className="font-medium">Event Stream Processing</p>
                    <p className="text-sm text-muted-foreground">Kafka ingests events, routes to Spark/Databricks for real-time analytics</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">3</div>
                  <div className="flex-1">
                    <p className="font-medium">AI Processing</p>
                    <p className="text-sm text-muted-foreground">XGBoost/LightGBM models detect anomalies, Neo4j analyzes supply chain graphs</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <div className="flex-1">
                    <p className="font-medium">Blockchain Recording</p>
                    <p className="text-sm text-muted-foreground">Fabric chaincode validates & records on Hyperledger, optional Polygon L2 anchor</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">5</div>
                  <div className="flex-1">
                    <p className="font-medium">Secure Storage</p>
                    <p className="text-sm text-muted-foreground">Encrypted PostgreSQL for metadata, S3 for documents, HSM for cryptographic keys</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile & Client Apps */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Client Applications</CardTitle>
              <CardDescription>Multi-platform access to the blockchain network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg border border-border">
                  <h3 className="font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-sm text-muted-foreground mb-3">React Native apps for field personnel and beneficiaries</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Offline-first architecture</li>
                    <li>• QR code scanning</li>
                    <li>• Real-time notifications</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg border border-border">
                  <h3 className="font-semibold mb-2">Admin Portal</h3>
                  <p className="text-sm text-muted-foreground mb-3">Next.js dashboard for network administrators</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Blockchain monitoring</li>
                    <li>• User management</li>
                    <li>• Analytics dashboards</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg border border-border">
                  <h3 className="font-semibold mb-2">API Gateway</h3>
                  <p className="text-sm text-muted-foreground mb-3">GraphQL & REST APIs for integration</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• OAuth 2.0 authentication</li>
                    <li>• Rate limiting</li>
                    <li>• WebSocket support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Architecture;
