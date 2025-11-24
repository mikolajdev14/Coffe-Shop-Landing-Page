import { useState, useEffect } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Menu", id: "menu" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-medium"
            : "bg-transparent"
        }`}
      >
        <div className="container px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-6 h-6 text-accent-foreground" />
              </div>
              <span
                className={`font-playfair text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                Aroma
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-all duration-300 relative group ${
                    isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <Button
                variant={isScrolled ? "default" : "hero"}
                size="sm"
                onClick={() => scrollToSection("contact")}
              >
                Visit Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 bg-card mx-4 rounded-lg shadow-hover p-6 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left py-3 px-4 text-lg font-medium text-foreground hover:bg-accent/10 rounded-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-2 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Visit Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;