import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ruler, Cog, Hammer, Wrench, RefreshCw, FileSearch } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import cncImage from "@/assets/cnc-machine.jpg";

const services = [
  {
    icon: Ruler,
    title: "Tool & Die Design",
    description:
      "Expert engineering team using the latest CAD/CAM software to design precision tooling solutions. From concept sketches to detailed manufacturing drawings, we ensure every design meets your exact specifications.",
    features: ["3D CAD modeling and simulation", "Design for manufacturability analysis", "Tolerance stack-up analysis", "Material selection consultation"],
  },
  {
    icon: Cog,
    title: "Progressive Die Manufacturing",
    description:
      "High-precision progressive dies for high-volume production. Our progressive dies are engineered for longevity, accuracy, and optimal production speeds.",
    features: ["Multi-station die design", "High-speed stamping capability", "Automated feeding systems", "In-die sensing options"],
  },
  {
    icon: Hammer,
    title: "Transfer Die Systems",
    description:
      "Complex transfer die systems for multi-station forming operations. Ideal for parts requiring multiple operations that cannot be achieved in a progressive die.",
    features: ["Custom transfer mechanisms", "Large part capability", "Complex forming operations", "Precision indexing"],
  },
  {
    icon: Wrench,
    title: "Custom Tooling Solutions",
    description:
      "Specialized tooling for unique manufacturing challenges. We design and build custom fixtures, jigs, and specialized equipment tailored to your specific needs.",
    features: ["Assembly fixtures", "Inspection gauges", "Welding fixtures", "Automation tooling"],
  },
  {
    icon: RefreshCw,
    title: "Die Maintenance & Repair",
    description:
      "Comprehensive die maintenance programs to maximize tool life and minimize downtime. Our skilled technicians can repair and refurbish existing tooling.",
    features: ["Preventive maintenance programs", "Emergency repair services", "Die refurbishment", "Performance optimization"],
  },
  {
    icon: FileSearch,
    title: "Engineering Consulting",
    description:
      "Expert consulting services to help optimize your manufacturing processes. Our engineers work with you to identify opportunities for improvement and cost reduction.",
    features: ["Process optimization", "Cost reduction analysis", "Production troubleshooting", "Technology recommendations"],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${cncImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal variant="fade-up">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Our Services
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150}>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Comprehensive Tooling Solutions
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From initial design to final delivery, we offer a complete range of tool and die 
                manufacturing services to meet your production requirements.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} variant="fade-up" delay={index * 100}>
                <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Process</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A proven methodology that ensures quality and efficiency at every step.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements" },
              { step: "02", title: "Design", desc: "Engineering the optimal solution" },
              { step: "03", title: "Manufacturing", desc: "Precision fabrication" },
              { step: "04", title: "Delivery", desc: "Testing and installation support" },
            ].map((phase, index) => (
              <ScrollReveal key={index} variant="scale" delay={index * 150}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.desc}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help bring your manufacturing vision to life.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg">
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
