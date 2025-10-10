import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, CreditCard, TrendingUp, Shield, Globe, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const Services = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive financial solutions designed for your success
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Savings Account</CardTitle>
                  <CardDescription>
                    Earn competitive interest rates on your savings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <li>• Up to 4.5% annual interest</li>
                    <li>• No minimum balance</li>
                    <li>• Free debit card</li>
                    <li>• Online banking access</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/accounts/savings">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Current Account</CardTitle>
                  <CardDescription>
                    Perfect for daily transactions and business needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <li>• Unlimited transactions</li>
                    <li>• Overdraft facility</li>
                    <li>• Checkbook facility</li>
                    <li>• Business-friendly features</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/accounts/current">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Fixed Deposit</CardTitle>
                  <CardDescription>
                    Secure your future with guaranteed returns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <li>• Up to 7% annual returns</li>
                    <li>• Flexible tenure options</li>
                    <li>• Loan against FD</li>
                    <li>• Auto-renewal option</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/accounts/fixed-deposit">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Credit Cards</CardTitle>
                  <CardDescription>
                    Enjoy rewards and cashback on every purchase
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <li>• Up to 5% cashback</li>
                    <li>• Reward points program</li>
                    <li>• Travel insurance</li>
                    <li>• Airport lounge access</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/cards/credit">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Debit Cards</CardTitle>
                  <CardDescription>
                    Safe and convenient way to access your funds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <li>• Free issuance</li>
                    <li>• Global acceptance</li>
                    <li>• Contactless payments</li>
                    <li>• 24/7 ATM access</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/cards/debit">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Mobile Banking</CardTitle>
                  <CardDescription>
                    Bank anytime, anywhere with our mobile app
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <li>• Instant fund transfers</li>
                    <li>• Bill payments</li>
                    <li>• Account statements</li>
                    <li>• Biometric security</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience banking excellence with our comprehensive range of services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Safe</h3>
                <p className="text-sm text-muted-foreground">
                  Bank-grade encryption and multi-factor authentication
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Global Access</h3>
                <p className="text-sm text-muted-foreground">
                  Access your accounts from anywhere in the world
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock customer service for your convenience
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;