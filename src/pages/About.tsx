import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Leaf, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground">
              Bringing healthy, delicious snacks to families everywhere
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Snack Kit, we believe that healthy snacking shouldn't mean compromising on taste. 
                Our journey began with a simple mission: to create nutritious snacks that everyone 
                loves, using only the finest natural ingredients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every product we create is crafted with care, ensuring that you get the perfect 
                balance of nutrition and flavor. From our classic banana chips to our innovative 
                tropical blends, each snack is made to fuel your day naturally.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Natural</h3>
                <p className="text-muted-foreground">
                  We use only natural ingredients with no artificial additives or preservatives.
                </p>
              </div>
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every batch is crafted with care and attention to detail by our dedicated team.
                </p>
              </div>
              <div className="text-center p-8 bg-card rounded-2xl border border-border">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality, ensuring every snack meets our high standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
