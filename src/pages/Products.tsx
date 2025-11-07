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
      description: "പഴുത്ത കായവറുത്തത് എന്നത് വാഴപ്പഴം എണ്ണയിൽ വറുത്ത് തയ്യാറാക്കുന്ന ഒരു ക്രിസ്പിയും രുചികരവുമായ സ്നാക്കാണ്‌.(Varuthakaayi is a crispy and tasty snack made by deep-frying slices of banana in oil.)",
      category: "Best Seller",
      image: img1,
    },
    {
      name: "റിബൺ പക്കവട(Ribbon Pakoda)",
      price: "$6.99",
      description: "അരിമാവും കടലമാവും ചേർത്ത് പൊരിച്ചെടുത്ത കിടിലൻ ക്രിസ്പി റിബൺ പക്കവട.(A crispy and ribbon-shaped South Indian snack made from rice and gram flour.)",
      category: "New",
      image: img2,
    },
    {
      name: "തക്കാളിമുറുക്ക്(Cheeru Murukku)",
      price: "$5.49",
      description: "തക്കാളിയുടെ സ്വാദും കുരുമുളകിന്റെ മസാലയും ചേർന്ന ക്രിസ്‌പി നാസ്തയാണ് തക്കാളിമുറുക്ക്..(A crunchy and mildly spiced fried snack made from rice and gram flour.)",
      category: "Popular",
      image: img3,
    },
    {
      name: "മുറുക്ക്(Murukku)",
      price: "$7.99",
      description: "ക്രിസ്പിയും രുചികരവുമായ അരിമാവിൽ തയ്യാറാക്കുന്ന ദക്ഷിണേന്ത്യൻ നാടൻ സ്നാക്ക്.(A crispy and tasty South Indian snack made from rice flour and spices.)",
      category: "Premium",
      image: img4,
    },
    {
      name: "Mixture",
      price: "$8.99",
      description: "കുരുമുളകും കരിവേപ്പിലയും ചേർന്ന കറുപ്പിച്ച കിടിലൻ ക്രഞ്ചി മിശ്രിയാണ് ഇത്.(A crispy and spicy South Indian snack mix made with peanuts, sev, and curry leaves.)",
      category: "Premium",
      image: img5,
    },
    {
      name: "ചക്ക വറുത്തത് (Chakka chips)",
      price: "$5.99",
      description: "പച്ച ചക്ക നേർത്ത് അരിഞ്ഞ് വറുത്ത കേരളത്തിന്റെ പരമ്പരാഗത ചിപ്സ്.(Crispy chips made from thinly sliced raw jackfruit—a traditional Kerala snack.)",
    
      image: img6,
    },
    {
      name: "കപ്പ സ്റ്റിക്സ് (Kappa Sticks)",
      price: "$5.99",
      description: "ചെറുതായി മുറിച്ച കപ്പ കഷണങ്ങൾ എണ്ണയിൽ വറുത്ത് ഉപ്പും മസാലയും ചേർത്തുണ്ടാക്കുന്ന കുരുമുളകുള്ള ക്രിസ്‌പി നാസ്ത..(thinly sliced tapioca pieces deep-fried and mixed with salt and mild spices, a crispy and tasty snack.)",
    
      image: img7,
    },

    {
      name: "കപ്പ ചിപ്സ് (Chakka chips)",
      price: "$5.99",
      description: "നേർത്തതായി മുറിച്ച കപ്പ കഷണങ്ങൾ എണ്ണയിൽ വറുത്ത് ഉപ്പു ചേർത്തുണ്ടാക്കുന്ന കുരുമുളകുള്ള രുചിയുള്ള നാസ്ത.(thinly sliced tapioca pieces deep-fried until crisp and lightly salted, a crunchy and delicious traditional snack.)",
    
      image: img8,
    },

     {
      name: "കായവറുത്തത് (Chakka chips)",
      price: "$5.99",
      description: "നേർത്തയായി മുറിച്ച വാഴക്ക കഷണങ്ങൾ തേങ്ങാവെള്ളയിൽ വറുത്ത് ഉപ്പു ചേർത്തുണ്ടാക്കുന്ന പരമ്പരാഗത കുരുമുളകുള്ള നാസ്ത.(thinly sliced raw banana pieces fried in coconut oil and salted, a traditional crispy South Indian snack.)",
    
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
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {product.description}
                    </p>
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
