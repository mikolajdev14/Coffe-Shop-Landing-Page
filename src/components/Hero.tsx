import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({
      threshold: 0.3,
    });
  const { elementRef: subtitleRef, isVisible: subtitleVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.3 });
  const { elementRef: buttonsRef, isVisible: buttonsVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: scrollRef, isVisible: scrollVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 px-6 text-center">
        <h1
          ref={titleRef}
          className={`font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Aroma Coffee House
        </h1>
        <p
          ref={subtitleRef}
          className={`text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light transition-all duration-1000 delay-200 ${
            subtitleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Where every cup tells a story. Experience the perfect blend of
          tradition and innovation.
        </p>
        <div
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
            buttonsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            variant="hero"
            onClick={scrollToMenu}
            className="group hover:scale-105 transition-transform duration-300"
          >
            Explore Our Menu
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="hero-outline"
            className="hover:scale-105 transition-transform duration-300"
          >
            Visit Us Today
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-600 ${
          scrollVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2 hover:border-primary-foreground/80 transition-colors duration-300">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
