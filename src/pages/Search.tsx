import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  useEffect(() => {
    const searchQuery = searchParams.get("q");
    if (searchQuery) {
      setQuery(searchQuery);
      performSearch(searchQuery);
    }
  }, [searchParams]);

  const performSearch = (searchQuery: string) => {
    const pages = [
      { title: "Home", description: "Welcome to SecureBank - Your trusted banking partner", url: "/" },
      { title: "Services", description: "Explore our comprehensive banking services", url: "/services" },
      { title: "Savings Account", description: "Earn competitive interest on your savings", url: "/accounts/savings" },
      { title: "Current Account", description: "Perfect for daily transactions", url: "/accounts/current" },
      { title: "Fixed Deposit", description: "Secure your future with guaranteed returns", url: "/accounts/fixed-deposit" },
      { title: "Personal Loan", description: "Get instant personal loans at low interest rates", url: "/loans/personal" },
      { title: "Home Loan", description: "Finance your dream home with attractive rates", url: "/loans/home" },
      { title: "Car Loan", description: "Drive your dream car with easy EMIs", url: "/loans/car" },
      { title: "Education Loan", description: "Invest in your future with our education loans", url: "/loans/education" },
      { title: "Credit Cards", description: "Enjoy rewards and cashback on purchases", url: "/cards/credit" },
      { title: "Debit Cards", description: "Safe and convenient access to your funds", url: "/cards/debit" },
      { title: "Investments", description: "Grow your wealth with smart investments", url: "/investments" },
      { title: "Insurance", description: "Protect what matters most", url: "/insurance" },
      { title: "About Us", description: "Learn about SecureBank's story and values", url: "/about" },
      { title: "Contact", description: "Get in touch with our support team", url: "/contact" },
      { title: "FAQ", description: "Find answers to common questions", url: "/faq" },
      { title: "Dashboard", description: "Manage your accounts and transactions", url: "/dashboard" },
      { title: "Fund Transfer", description: "Transfer money quickly and securely", url: "/transfer" },
      { title: "Bill Payment", description: "Pay your bills with ease", url: "/bill-payment" },
      { title: "Customer Support", description: "24/7 support for all your queries", url: "/support" },
    ];

    const lowerQuery = searchQuery.toLowerCase();
    const filtered = pages.filter(
      page =>
        page.title.toLowerCase().includes(lowerQuery) ||
        page.description.toLowerCase().includes(lowerQuery)
    );

    setResults(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Search Results</h1>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4 max-w-2xl">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <Button type="submit">Search</Button>
            </div>
          </form>

          {query && (
            <div className="mb-6">
              <p className="text-muted-foreground">
                Found {results.length} results for "{query}"
              </p>
            </div>
          )}

          <div className="space-y-4">
            {results.length === 0 && query ? (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    No results found. Try different keywords.
                  </p>
                </CardContent>
              </Card>
            ) : (
              results.map((result, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Link to={result.url} className="hover:text-primary transition-colors">
                      <CardTitle>{result.title}</CardTitle>
                    </Link>
                    <CardDescription>{result.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      to={result.url}
                      className="text-sm text-primary hover:underline"
                    >
                      {window.location.origin}{result.url} →
                    </Link>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;