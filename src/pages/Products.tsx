import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Classic Banana Chips",
      price: "$4.99",
      description: "Crispy, naturally sweet banana chips",
      category: "Best Seller",
    },
    {
      name: "Tropical Mix",
      price: "$6.99",
      description: "A blend of banana, mango, and pineapple",
      category: "New",
    },
    {
      name: "Cinnamon Delight",
      price: "$5.49",
      description: "Banana chips with a hint of cinnamon",
      category: "Popular",
    },
    {
      name: "Chocolate Banana",
      price: "$7.99",
      description: "Dark chocolate covered banana slices",
      category: "Premium",
    },
    {
      name: "Energy Mix",
      price: "$8.99",
      description: "Banana chips with nuts and seeds",
      category: "Premium",
    },
    {
      name: "Kids Pack",
      price: "$5.99",
      description: "Small portions perfect for lunch boxes",
      category: "Family",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our range of delicious, healthy snacks made with 100% natural ingredients
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-6xl">🍌</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {product.category}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {product.description}
                    </p>
                    <Button className="w-full group-hover:bg-primary/90">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
