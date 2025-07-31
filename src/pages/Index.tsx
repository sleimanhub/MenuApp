import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Clock, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Dabous W Jeneh?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the authentic taste of Lebanon with our traditional cooking methods and fresh ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-primary rounded-xl shadow-[var(--shadow-elegant)]">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl text-white font-semibold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground/100">
                We use only the finest ingredients and traditional Lebanese spices to create authentic flavors.
              </p>
            </div>
            
            <div className="text-center p-8 bg-primary rounded-xl shadow-[var(--shadow-elegant)]">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl text-white font-semibold mb-4">Fast Service</h3>
              <p className="text-muted-foreground">
                Quick preparation without compromising on quality. Fresh food served hot and ready.
              </p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-xl shadow-[var(--shadow-elegant)]">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Ordering</h3>
              <p className="text-muted-foreground">
                Call us for quick orders or visit our restaurant for a memorable dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Dishes</h2>
            <p className="text-xl text-muted-foreground">
              Taste our most loved dishes that keep customers coming back for more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="group">
              <div className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] transition-transform hover:scale-105 duration-300">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">🔥</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Charcoal-Grilled Chicken</h3>
                  <p className="text-muted-foreground mb-4">
                    Our signature dish grilled to perfection over charcoal flames.
                  </p>
                  <span className="text-2xl font-bold text-accent">$15</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] transition-transform hover:scale-105 duration-300">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">🍗</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Broasted Chicken</h3>
                  <p className="text-muted-foreground mb-4">
                    Crispy, tender broasted chicken with our special seasoning.
                  </p>
                  <span className="text-2xl font-bold text-accent">$19</span>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-elegant)] transition-transform hover:scale-105 duration-300">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">🥙</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dabbous w Jeneh Special</h3>
                  <p className="text-muted-foreground mb-4">
                    Our exclusive meal combining the best of our kitchen.
                  </p>
                  <span className="text-2xl font-bold text-accent">$15</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/menu">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
              >
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[var(--gradient-dark)] text-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl text-accent/90 mb-8 max-w-2xl mx-auto">
            Call us now or visit our restaurant in the heart of Beirut for an unforgettable dining experience.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">+961 123 456 789</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold">123 Main Street, Beirut</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
              >
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
