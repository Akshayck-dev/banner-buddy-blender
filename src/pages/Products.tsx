import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";

const Products = () => {
  const products = [
    {
      name: "പഴുത്ത കായവറുത്തത് (Ripe bananachips)",
      price: "$4.99",
      category: "Best Seller",
      image: img1,
    },
    {
      name: "ഓലവട (olavada)",
      price: "$6.99",
      category: "New",
      image: img2,
    },
    {
      name: "തക്കാളി മുറുക്ക് (tomato murukku)",
      price: "$5.49",
      category: "Popular",
      image: img3,
    },
    {
      name: "മുറുക്ക്(Murukku)",
      price: "$7.99",
      category: "Premium",
      image: img4,
    },
    {
      name: "Mixture",
      price: "$8.99",
      category: "Premium",
      image: img5,
    },
    {
      name: "ചക്ക വറുത്തത് (jackfruit chips)",
      price: "$5.99",
    
      image: img6,
    },
    {
      name: "കപ്പ വറുത്തത് (tapioca stick)",
      price: "$5.99",
    
      image: img7,
    },

    {
      name: "കപ്പ വറുത്തത് (tapioca chips)",
      price: "$5.99",
    
      image: img8,
    },

     {
      name: "കായ വറുത്തത് (banana chips)",
      price: "$5.99",
    
      image: img9,
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
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-start mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                    <Button className="w-full group-hover:bg-primary/90" asChild>
                      <Link to="/contact">Contact to Order</Link>
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
