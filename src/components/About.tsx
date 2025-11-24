const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2010, Aroma Coffee House has been a cornerstone of our community, 
                serving exceptional coffee with warmth and dedication.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We source our beans from sustainable farms around the world, roasted 
                in-house to perfection. Every cup is crafted with precision and passion 
                by our expert baristas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                More than just coffee, we create moments of connection, conversation, 
                and comfort in a welcoming atmosphere.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              <div className="bg-card p-6 rounded-lg shadow-soft text-center hover:shadow-medium transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Cups Served Daily</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft text-center hover:shadow-medium transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Coffee Origins</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft text-center hover:shadow-medium transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">13</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft text-center hover:shadow-medium transition-all duration-300">
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