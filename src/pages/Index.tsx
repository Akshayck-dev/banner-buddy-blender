import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import logo from "@/assets/snack-kit-logo.png";
import bannerBg from "@/assets/banner-background.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Truck, Shield, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Banner */}
        <section
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background/90" />
        
        <div className="relative z-10 text-center px-4">
          <img 
            src={logo} 
            alt="Snack Kit Logo" 
            className="w-64 md:w-80 lg:w-96 mx-auto mb-8 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Healthy Snacking Made Simple
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            Discover our premium selection of natural, delicious snacks that fuel your day
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
              Why Choose Snack Kit?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "100% Natural",
                  description: "Only the finest natural ingredients, nothing artificial",
                },
                {
                  title: "Nutritious",
                  description: "Packed with vitamins and energy for your active lifestyle",
                },
                {
                  title: "Delicious",
                  description: "Amazing taste that makes healthy snacking a pleasure",
                },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1 duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Star, title: "Premium Quality", desc: "Hand-picked ingredients" },
                { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
                { icon: Shield, title: "100% Safe", desc: "Secure payments" },
                { icon: Heart, title: "Made with Love", desc: "By our dedicated team" },
              ].map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Start Your Healthy Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of satisfied customers who have made the switch to healthy snacking
            </p>
            <Button size="lg" className="text-lg px-12" asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
