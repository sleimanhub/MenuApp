import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Award, Heart, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-accent/90 max-w-2xl mx-auto">
            A story of passion, tradition, and authentic Middle Eastern flavors 
            passed down through generations.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto text-white">
              <p className="mb-6">
                Dabous W Jeneh has been serving the authentic flavors of Lebanon since our humble beginnings. 
                Our name, which translates to "Chicken with Wings," reflects our specialization in perfectly 
                grilled and seasoned chicken dishes that have become legendary in Beirut.
              </p>
              <p className="mb-6">
                Founded with a passion for preserving traditional Lebanese cooking methods, we use only the 
                finest locally-sourced ingredients and time-honored recipes passed down through generations. 
                Our charcoal grills and traditional spices create the distinctive flavors that keep our 
                customers coming back.
              </p>
              <p>
                From our signature charcoal-grilled chicken to our carefully crafted appetizers, every dish 
                tells a story of Lebanese culinary heritage. We believe food is more than sustenance—it's 
                a way to bring people together and celebrate our rich cultural traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-accent font-bold text-center mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">Passion</h3>
              <p className="text-white/80">
                Every dish is prepared with love and dedication to authentic Lebanese flavors.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">Quality</h3>
              <p className="text-white/80">
                We use only the finest ingredients and traditional cooking methods.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">Community</h3>
              <p className="text-white/80">
                Bringing people together through the joy of sharing authentic Lebanese cuisine.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">Tradition</h3>
              <p className="text-white/80">
                Preserving time-honored recipes and cooking techniques for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-white/80 mb-8">
              Our experienced chefs and dedicated staff work together to ensure every meal is a 
              memorable experience. From our master grill chef who has perfected the art of 
              charcoal cooking to our friendly service team, everyone at Dabous W Jeneh is 
              committed to excellence.
            </p>
            <div className="bg-accent/5 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Join Our Family</h3>
              <p className="text-white/80">
                We're always looking for passionate individuals who share our love for authentic 
                Lebanese cuisine and exceptional hospitality. If you're interested in becoming 
                part of the Dabous W Jeneh family, we'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;