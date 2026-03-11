import { Layout } from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import factoryImage from "@/assets/factory-floor.jpg";
import craftsmanImage from "@/assets/craftsman.jpg";

const milestones = [
  { year: "1985", event: "Founded as a small tool shop" },
  { year: "1995", event: "Expanded to 50,000 sq ft facility" },
  { year: "2005", event: "Achieved ISO 9001 certification" },
  { year: "2015", event: "Invested in advanced CNC technology" },
  { year: "2024", event: "Serving 200+ clients worldwide" },
];

const values = [
  "Uncompromising precision in every project",
  "Customer-focused engineering solutions",
  "Continuous investment in technology",
  "Sustainable manufacturing practices",
  "Long-term partnership approach",
  "Rapid response to client needs",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal variant="fade-up">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                About Us
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150}>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Crafting Precision Since 1985
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Booma Manufacturing is an integrated engineering and manufacturing company 
                specializing in precision components and assemblies, combining traditional 
                craftsmanship with cutting-edge technology to deliver exceptional results.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fade-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1985, Booma Manufacturing began 
                    as a small shop with a big vision: to deliver precision tooling solutions 
                    that exceed expectations.
                  </p>
                  <p>
                    What started as a three-person operation has grown into a state-of-the-art 
                    manufacturing facility spanning over 50,000 square feet, equipped with the 
                    latest CNC machining centers, wire EDM, and grinding equipment.
                  </p>
                  <p>
                    Today, we serve clients across automotive, aerospace, medical, and consumer 
                    electronics industries, maintaining the same commitment to quality and 
                    precision that defined our humble beginnings.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-right">
              <div className="relative">
                <img
                  src={factoryImage}
                  alt="Our factory floor"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                  <span className="text-4xl font-bold">40+</span>
                  <span className="block text-sm">Years of Excellence</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Key milestones that shaped our growth and success.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index} variant={index % 2 === 0 ? "fade-left" : "fade-right"} delay={index * 100}>
                  <div
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div className="bg-card p-6 rounded-xl inline-block">
                        <span className="text-primary font-bold text-xl">{milestone.year}</span>
                        <p className="text-card-foreground mt-1">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="fade-right" className="order-2 lg:order-1">
              <img
                src={craftsmanImage}
                alt="Craftsman at work"
                className="rounded-xl shadow-2xl"
              />
            </ScrollReveal>
            <ScrollReveal variant="fade-left" className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Values
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our core values guide everything we do, from the way we approach 
                  engineering challenges to how we build relationships with our clients.
                </p>
                <ul className="space-y-4">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
