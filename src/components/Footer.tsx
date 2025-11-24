import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6" />
              <span className="font-playfair text-xl font-bold">Aroma</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Crafting exceptional coffee experiences since 2010
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Aroma Coffee House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;