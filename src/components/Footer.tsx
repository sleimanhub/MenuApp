import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Dabous W Jeneh</h3>
            <p className="text-primary-foreground/80">
              Serving authentic Middle Eastern cuisine with passion and tradition since our establishment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/Dabbous-W-Jeneh/61576134406635/" 
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/dabouswjeneh/" 
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">
                  طريق عام دير قانون رأس العين صور
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">
                  +961 76 334 479
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">
                  Daily: 11:00 AM - 11:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-primary-foreground/80">
              Subscribe to get updates on new dishes and special offers.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Dabous W Jeneh Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;