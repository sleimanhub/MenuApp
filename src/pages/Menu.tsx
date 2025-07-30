import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import { menuData } from "@/data/menuData";

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[var(--gradient-warm)] text-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-accent/90 max-w-2xl mx-auto">
            Discover our delicious selection of authentic Middle Eastern dishes, 
            prepared with the finest ingredients and traditional cooking methods.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData.map((category, index) => (
              <MenuCard
                key={index}
                title={category.title}
                items={category.items}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground  mb-8 max-w-2xl mx-auto">
            Contact us now to place your order or visit our restaurant for a memorable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+961123456" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 inline-block"
            >
              Call to Order
            </a>
            <a 
              href="#" 
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 inline-block"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;