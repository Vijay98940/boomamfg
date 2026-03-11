import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal variant="fade-up">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Contact Us
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150}>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Let's Discuss Your Project
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a tooling project in mind? We'd love to hear from you. Get in touch 
                and our team will respond within 24 hours.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <ScrollReveal variant="fade-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                  <p className="text-muted-foreground">Reach out to us through any of the following channels.</p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Address", content: <>123 Industrial Boulevard<br />Manufacturing City, MC 12345<br />United States</> },
                    { icon: Phone, title: "Phone", content: <>Main: (555) 123-4567<br />Fax: (555) 123-4568</> },
                    { icon: Mail, title: "Email", content: <>General: info@booma.com<br />Sales: sales@booma.com</> },
                    { icon: Clock, title: "Business Hours", content: <>Monday - Friday: 7:00 AM - 5:00 PM<br />Saturday: 8:00 AM - 12:00 PM<br />Sunday: Closed</> },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal variant="fade-right" className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Your Company Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" name="subject" required placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your project requirements..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ScrollReveal variant="fade-up">
        <section className="h-96 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Interactive Map</p>
            <p className="text-sm">123 Industrial Blvd, Manufacturing City</p>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  );
}
