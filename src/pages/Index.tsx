import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cog, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-sparks.jpg";
import factoryImage from "@/assets/factory-floor.jpg";
import precisionImage from "@/assets/precision-work.png";
import cncImage from "@/assets/cnc-machine.jpg";

const features = [
  {
    icon: Shield,
    title: "Precision Engineering",
    description: "Tolerances as tight as ±0.001\" for the most demanding applications.",
  },
  {
    icon: Cog,
    title: "Custom Solutions",
    description: "Tailored tool and die designs to meet your specific production needs.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient production schedules without compromising quality.",
  },
  {
    icon: Award,
    title: "40+ Years Experience",
    description: "Decades of expertise in precision manufacturing excellence.",
  },
];

const featuredProducts = [
  {
    image: precisionImage,
    title: "Progressive Dies",
    description: "High-speed progressive dies for automotive and industrial applications.",
  },
  {
    image: cncImage,
    title: "Transfer Dies",
    description: "Complex transfer die systems for multi-station forming operations.",
  },
  {
    image: factoryImage,
    title: "Stamping Tools",
    description: "Precision stamping tools for sheet metal components.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Precision Tool & Die Manufacturing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Engineering Excellence in{" "}
              <span className="text-gradient">Every Detail</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              From concept to production, we deliver precision tooling solutions that power 
              manufacturing operations worldwide. Over 40 years of expertise in tool and die making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg"
              >
                <Link to="/products">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose PrecisionTool?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver 
              unmatched precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Explore our precision-crafted tooling solutions.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your tooling requirements. Our engineering 
            team is ready to help bring your ideas to life.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg">
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
