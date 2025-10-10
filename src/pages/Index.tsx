import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Shield, CreditCard, TrendingUp, Users, Building2, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-banking.jpg";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} />

      <main className="flex-1">
        <section 
          className="relative py-20 md:py-32 overflow-hidden"
          style={{
            background: 'var(--gradient-hero)',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Banking Made Simple & Secure
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Experience the future of banking with our innovative digital solutions. Manage your finances with confidence and ease.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link to="/signup">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={heroImage} alt="Banking Services" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10M+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Bank Branches</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$5B+</div>
                <div className="text-sm text-muted-foreground">Total Deposits</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Accounts</CardTitle>
                  <CardDescription>
                    Choose from savings, current, or fixed deposit accounts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0">
                    <Link to="/accounts">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Loans</CardTitle>
                  <CardDescription>
                    Personal, home, car, and education loans at competitive rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0">
                    <Link to="/loans">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Investments</CardTitle>
                  <CardDescription>
                    Grow your wealth with our investment and insurance services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0">
                    <Link to="/investments">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose SecureBank?
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Bank-Grade Security</h3>
                      <p className="text-muted-foreground">Your data is protected with enterprise-level encryption</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">24/7 Support</h3>
                      <p className="text-muted-foreground">Our team is always ready to assist you</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Competitive Rates</h3>
                      <p className="text-muted-foreground">Best interest rates on deposits and loans</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Easy Digital Banking</h3>
                      <p className="text-muted-foreground">Manage everything from your phone or computer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-muted-foreground mb-6">
                  Open your account in minutes and start enjoying our premium banking services.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link to="/signup">Create Account <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;