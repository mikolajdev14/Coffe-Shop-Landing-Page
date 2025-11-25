import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { elementRef: gridRef, isVisible: gridVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to serve you a perfect cup
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div
            className={`text-center p-8 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 ${
              gridVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: gridVisible ? "0s" : "0s",
            }}
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
              Location
            </h3>
            <p className="text-muted-foreground">
              123 Coffee Street
              <br />
              Downtown, City 12345
            </p>
          </div>

          <div
            className={`text-center p-8 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 ${
              gridVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: gridVisible ? "0.1s" : "0s",
            }}
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
              Contact
            </h3>
            <p className="text-muted-foreground">
              +1 (555) 123-4567
              <br />
              hello@aromacoffee.com
            </p>
          </div>

          <div
            className={`text-center p-8 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 ${
              gridVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: gridVisible ? "0.2s" : "0s",
            }}
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
              Hours
            </h3>
            <p className="text-muted-foreground">
              Mon - Fri: 7am - 8pm
              <br />
              Sat - Sun: 8am - 9pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
