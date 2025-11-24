import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-coffee.jpg";
import espressoImage from "@/assets/espresso.jpg";
import cappuccinoImage from "@/assets/cappuccino.jpg";
import latteImage from "@/assets/latte.jpg";
import mochaImage from "@/assets/mocha.jpg";
import flatwhiteImage from "@/assets/flatwhite.jpg";
import coldbrewImage from "@/assets/coldbrew.jpg";

const Index = () => {
  const menuItems = [
    {
      name: "Espresso",
      description: "Rich, bold shot of perfectly extracted coffee. The foundation of all great coffee drinks.",
      price: "$3.50",
      image: espressoImage,
    },
    {
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and velvety foam. A classic Italian favorite.",
      price: "$4.50",
      image: cappuccinoImage,
    },
    {
      name: "Iced Latte",
      description: "Smooth espresso mixed with cold milk over ice. Refreshing and energizing.",
      price: "$5.00",
      image: latteImage,
    },
    {
      name: "Mocha",
      description: "Espresso with steamed milk, rich chocolate, and whipped cream. Pure indulgence.",
      price: "$5.50",
      image: mochaImage,
    },
    {
      name: "Flat White",
      description: "Double shot of espresso with velvety microfoam. Strong yet smooth.",
      price: "$4.75",
      image: flatwhiteImage,
    },
    {
      name: "Cold Brew",
      description: "Smooth, naturally sweet coffee steeped for 16 hours. Less acidic, more flavor.",
      price: "$4.50",
      image: coldbrewImage,
    },
  ];

  return (
    <main className="font-inter">
      <Navbar />
      <Hero heroImage={heroImage} />
      <About />
      <Menu menuItems={menuItems} />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;