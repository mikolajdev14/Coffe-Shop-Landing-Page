import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuProps {
  menuItems: MenuItem[];
}

const Menu = ({ menuItems }: MenuProps) => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { elementRef: gridRef, isVisible: gridVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="menu" className="py-24 bg-secondary">
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
            Featured Drinks
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted beverages made with premium ingredients and lots of love
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:shadow-hover transition-all duration-500 border-0 bg-card hover:scale-105 ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 0.1}s` : "0s",
                transform: gridVisible ? "translateY(0)" : "translateY(2rem)",
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-xl font-semibold text-accent">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
