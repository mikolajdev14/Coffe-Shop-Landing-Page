import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container relative z-10 px-6 text-center animate-fade-in-up">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6">
          Aroma Coffee House
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
          Where every cup tells a story. Experience the perfect blend of tradition and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToMenu}
            className="group"
          >
            Explore Our Menu
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="hero-outline">
            Visit Us Today
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;