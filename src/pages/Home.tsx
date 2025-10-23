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
      title: "Blockchain Security",
      description: "Immutable records ensure data integrity and transparency across the entire supply chain."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Tracking",
      description: "Monitor products at every stage with instant updates and complete visibility."
    },
    {
      icon: Users,
      title: "Multi-Stakeholder",
      description: "Connect suppliers, manufacturers, distributors, retailers, and customers seamlessly."
    },
    {
      icon: LinkIcon,
      title: "Smart Contracts",
      description: "Automate workflows and transactions with programmable blockchain logic."
    },
    {
      icon: CheckCircle,
      title: "Verified Authenticity",
      description: "Prevent counterfeits with cryptographic verification at each touchpoint."
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Granular access controls protect sensitive business information."
    }
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
              Transform Your Supply Chain with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Blockchain
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Decentrix delivers end-to-end transparency and trust through decentralized technology
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
            <h2 className="text-3xl md:text-5xl font-bold">Why Choose Decentrix</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for the modern supply chain, powered by blockchain technology
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
