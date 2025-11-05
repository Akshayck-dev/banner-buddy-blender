import logo from "@/assets/snack-kit-logo.png";
import bannerBg from "@/assets/banner-background.jpg";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
            <Button size="lg" className="text-lg px-8">
              Shop Now
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
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
                className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
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
    </div>
  );
};

export default Index;
