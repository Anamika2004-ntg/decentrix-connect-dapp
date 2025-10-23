import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">D</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Decentrix
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Blockchain-powered supply chain management for transparent, efficient tracking.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/track" className="hover:text-primary transition-colors">Track Product</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/profile" className="hover:text-primary transition-colors">Profile</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stakeholders</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/supplier" className="hover:text-primary transition-colors">Supplier</Link></li>
              <li><Link to="/manufacturer" className="hover:text-primary transition-colors">Manufacturer</Link></li>
              <li><Link to="/distributor" className="hover:text-primary transition-colors">Distributor</Link></li>
              <li><Link to="/retailer" className="hover:text-primary transition-colors">Retailer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Decentrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
