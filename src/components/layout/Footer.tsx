import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import boomaLogo from "@/assets/booma-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={boomaLogo} alt="Booma Manufacturing" className="h-10 w-auto" />
              <span className="text-lg font-bold text-primary-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>BOOMA</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Integrated engineering and manufacturing company specializing in 
              precision components and assemblies. Engineering Strength. Manufacturing Excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Tool & Die Design</li>
              <li>Precision Stamping Dies</li>
              <li>Custom Tooling</li>
              <li>Die Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>123 Industrial Blvd, Manufacturing City, MC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>info@booma.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Booma Manufacturing Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}