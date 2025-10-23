import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Link as LinkIcon, CheckCircle, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Hyperledger Fabric",
      description: "Permissioned blockchain with optional Polygon L2 anchoring for enterprise-grade security and public verifiability."
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Analytics",
      description: "Real-time fraud detection using XGBoost/LightGBM with Kafka streaming and Neo4j graph analytics."
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Network",
      description: "Keycloak-based identity management connecting suppliers, manufacturers, distributors, and retailers."
    },
    {
      icon: LinkIcon,
      title: "Smart Contracts",
      description: "Solidity and Fabric chaincode for automated workflows with HSM-secured cryptographic keys."
    },
    {
      icon: CheckCircle,
      title: "IoT Integration",
      description: "MQTT-based real-time tracking with GPS, weight sensors, and e-seals for tamper-proof monitoring."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "KMS/HSM key management, encrypted PostgreSQL, and OWASP-compliant security architecture."
    }
  ];

  const techStack = [
    { category: "Blockchain", tech: "Hyperledger Fabric / Quorum" },
    { category: "Smart Contracts", tech: "Solidity / Fabric Chaincode" },
    { category: "Backend", tech: "Node.js / Go + GraphQL" },
    { category: "AI & Analytics", tech: "Kafka + Spark + Neo4j" },
    { category: "IoT Gateway", tech: "EMQX / MQTT" },
    { category: "Security", tech: "Keycloak + HSM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Enterprise Blockchain for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Supply Chain
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Hyperledger Fabric-powered platform with IoT integration, AI analytics, and enterprise-grade security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 shadow-glow">
                  Start Tracking
                </Button>
              </Link>
              <Link to="/track">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Enterprise-Grade Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on Hyperledger Fabric with cutting-edge IoT, AI, and security technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Production-ready infrastructure for enterprise blockchain networks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border shadow-card">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {techStack.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gradient-primary/5 border border-border/50">
                      <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                      <p className="font-semibold text-lg">{item.tech}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 rounded-lg bg-gradient-hero/10 border border-primary/20">
                  <h3 className="font-semibold text-lg mb-3">Additional Technologies</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <div>• React Native Mobile Apps</div>
                    <div>• S3-Compatible Storage + KMS</div>
                    <div>• Kafka Event Streaming</div>
                    <div>• Encrypted PostgreSQL</div>
                    <div>• XGBoost/LightGBM ML Models</div>
                    <div>• OWASP Security Standards</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stakeholder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Complete Supply Chain Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect every participant in your supply chain ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Supplier", path: "/supplier", desc: "Raw materials & components" },
              { title: "Manufacturer", path: "/manufacturer", desc: "Production & assembly" },
              { title: "Distributor", path: "/distributor", desc: "Logistics & warehousing" },
              { title: "Retailer", path: "/retailer", desc: "Sales & delivery" }
            ].map((stakeholder, index) => (
              <Link key={index} to={stakeholder.path}>
                <Card className="h-full border-border hover:border-primary transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur group cursor-pointer">
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {stakeholder.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{stakeholder.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 text-primary-foreground">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Revolutionize Your Supply Chain?
            </h2>
            <p className="text-xl opacity-90">
              Join the future of transparent, efficient, and secure supply chain management
            </p>
            <Link to="/login">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 bg-background text-foreground hover:bg-background/90"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
