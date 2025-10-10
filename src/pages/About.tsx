import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const About = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} />
      
      <main className="flex-1">
        <section className="py-16" style={{ background: 'var(--gradient-primary)' }}>
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SecureBank</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Leading the future of digital banking with innovation and trust
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2024, SecureBank has been at the forefront of digital banking innovation. 
                We started with a simple mission: to make banking accessible, secure, and convenient for everyone.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, we serve over 10 million customers worldwide, offering a comprehensive range of 
                financial services from savings accounts to investment solutions.
              </p>
              <p className="text-muted-foreground">
                Our commitment to excellence and customer satisfaction has made us one of the most 
                trusted names in digital banking.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                  <div className="text-sm text-muted-foreground">Active Customers</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <div className="text-3xl font-bold text-secondary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Global Branches</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <div className="text-3xl font-bold text-accent mb-2">$5B+</div>
                  <div className="text-sm text-muted-foreground">Assets Under Management</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Industry Awards</div>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Trust & Security</h3>
                    <p className="text-muted-foreground">
                      We prioritize the security of your financial data with bank-grade encryption 
                      and advanced security measures.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                    <p className="text-muted-foreground">
                      Your satisfaction is our priority. We're committed to providing excellent 
                      service and support 24/7.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      We continuously evolve our services to meet the changing needs of modern banking, 
                      leveraging the latest technology.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                    <p className="text-muted-foreground">
                      We believe in clear communication with no hidden fees or surprises. 
                      Everything is straightforward and easy to understand.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To empower individuals and businesses with innovative financial solutions that are 
              accessible, secure, and tailored to their unique needs. We strive to make banking 
              simple, transparent, and customer-centric.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;