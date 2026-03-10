import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ZoomIn, X } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-sparks.jpg";
import factoryImage from "@/assets/factory-floor.jpg";
import precisionImage from "@/assets/precision-work.png";
import cncImage from "@/assets/cnc-machine.jpg";
import craftsmanImage from "@/assets/craftsman.jpg";

const categories = ["All", "Progressive Dies", "Transfer Dies", "Stamping Tools", "Custom Tooling"];

const products = [
  { id: 1, title: "Automotive Progressive Die", category: "Progressive Dies", image: precisionImage, description: "High-speed progressive die for automotive bracket production. 24-station design with automated feeding system." },
  { id: 2, title: "Multi-Station Transfer Die", category: "Transfer Dies", image: cncImage, description: "Complex transfer die system for large automotive structural components with integrated welding stations." },
  { id: 3, title: "Precision Stamping Tool", category: "Stamping Tools", image: heroImage, description: "High-precision stamping tool for electronic connector housings with micro-tolerances." },
  { id: 4, title: "Custom Assembly Fixture", category: "Custom Tooling", image: factoryImage, description: "Custom-designed assembly fixture for automated production line integration." },
  { id: 5, title: "Medical Device Die", category: "Progressive Dies", image: craftsmanImage, description: "Precision progressive die for medical device components with cleanroom compatibility." },
  { id: 6, title: "Aerospace Forming Tool", category: "Stamping Tools", image: precisionImage, description: "Specialized forming tool for aerospace-grade aluminum components with strict tolerance requirements." },
  { id: 7, title: "Consumer Electronics Die", category: "Transfer Dies", image: cncImage, description: "High-volume transfer die for smartphone housing components with premium surface finish." },
  { id: 8, title: "Inspection Gauge Set", category: "Custom Tooling", image: heroImage, description: "Complete inspection gauge set for quality control of stamped automotive parts." },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal variant="fade-up">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Our Products
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150}>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Portfolio of Excellence
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our gallery of precision-crafted tooling solutions. Each project 
                represents our commitment to quality and engineering excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:border-primary hover:text-primary"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ScrollReveal key={product.id} variant="fade-up" delay={index * 80}>
                <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl h-full">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => setLightboxImage(product.image)}
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center"
                    >
                      <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-semibold text-card-foreground mt-1 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a Similar Solution?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our engineering team is ready to develop custom tooling solutions for your 
              specific manufacturing requirements.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg">
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 text-white hover:text-primary transition-colors">
            <X className="w-8 h-8" />
          </button>
          <img src={lightboxImage} alt="Product detail" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </Layout>
  );
}
