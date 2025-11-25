import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { elementRef: textRef, isVisible: textVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { elementRef: statsRef, isVisible: statsVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={textRef}
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                textVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2010, Aroma Coffee House has been a cornerstone of our
                community, serving exceptional coffee with warmth and
                dedication.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We source our beans from sustainable farms around the world,
                roasted in-house to perfection. Every cup is crafted with
                precision and passion by our expert baristas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                More than just coffee, we create moments of connection,
                conversation, and comfort in a welcoming atmosphere.
              </p>
            </div>

            <div
              ref={statsRef}
              className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
                statsVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="bg-card p-6 rounded-lg shadow-soft text-center hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Cups Served Daily</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft text-center hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Coffee Origins</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft text-center hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-primary mb-2">13</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft text-center hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
