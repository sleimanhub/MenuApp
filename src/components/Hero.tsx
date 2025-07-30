import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious Middle Eastern cuisine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Dabous W Jeneh
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-delay">
          Authentic Middle Eastern Flavors in the Heart of Beirut
        </p>
        <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto animate-fade-in-delay-2">
          Experience the finest grilled chicken, traditional appetizers, and 
          carefully crafted dishes that celebrate the rich culinary heritage of Lebanon.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <Link to="/menu">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-white/90 hover:text-accent text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all hover:shadow-[var(--shadow-warm)] hover:scale-105"
            >
              View Our Menu
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
            >
              Order Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;