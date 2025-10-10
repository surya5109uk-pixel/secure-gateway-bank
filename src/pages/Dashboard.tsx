import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CreditCard, TrendingUp, Send, Receipt, Wallet, Plus } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [accounts, setAccounts] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/login");
      return;
    }

    setUser(session.user);
    await fetchProfile(session.user.id);
    await fetchAccounts(session.user.id);
    await fetchTransactions(session.user.id);
    setLoading(false);
  };

  const fetchProfile = async (userId: string) => {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    setProfile(data);
  };

  const fetchAccounts = async (userId: string) => {
    const { data } = await supabase
      .from("accounts")
      .select("*")
      .eq("user_id", userId);
    setAccounts(data || []);
  };

  const fetchTransactions = async (userId: string) => {
    const { data: userAccounts } = await supabase
      .from("accounts")
      .select("id")
      .eq("user_id", userId);

    if (userAccounts && userAccounts.length > 0) {
      const accountIds = userAccounts.map(acc => acc.id);
      const { data } = await supabase
        .from("transactions")
        .select("*")
        .in("from_account", accountIds)
        .order("created_at", { ascending: false })
        .limit(5);
      setTransactions(data || []);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const totalBalance = accounts.reduce((sum, acc) => sum + parseFloat(acc.balance || 0), 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={true} />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome, {profile?.first_name}!</h1>
            <p className="text-muted-foreground">Manage your accounts and transactions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalBalance.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">Across all accounts</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{accounts.length}</div>
                <p className="text-xs text-muted-foreground">Banking accounts</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent Transactions</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{transactions.length}</div>
                <p className="text-xs text-muted-foreground">Last 5 transactions</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your banking activities</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Button asChild className="h-24 flex flex-col gap-2">
                  <Link to="/transfer">
                    <Send className="h-6 w-6" />
                    <span>Transfer</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 flex flex-col gap-2">
                  <Link to="/bill-payment">
                    <Receipt className="h-6 w-6" />
                    <span>Pay Bills</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 flex flex-col gap-2">
                  <Link to="/accounts">
                    <CreditCard className="h-6 w-6" />
                    <span>Accounts</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 flex flex-col gap-2">
                  <Link to="/loans">
                    <Plus className="h-6 w-6" />
                    <span>Apply Loan</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>My Accounts</CardTitle>
                <CardDescription>Your banking accounts</CardDescription>
              </CardHeader>
              <CardContent>
                {accounts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">No accounts yet</p>
                    <Button asChild>
                      <Link to="/accounts">Open Account</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {accounts.map((account) => (
                      <div key={account.id} className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <p className="font-medium capitalize">{account.account_type.replace('_', ' ')}</p>
                          <p className="text-sm text-muted-foreground">{account.account_number}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${parseFloat(account.balance).toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground capitalize">{account.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest banking activities</CardDescription>
            </CardHeader>
            <CardContent>
              {transactions.length === 0 ? (
                <p className="text-center py-8 text-muted-foreground">No transactions yet</p>
              ) : (
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium capitalize">{transaction.transaction_type.replace('_', ' ')}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(transaction.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${parseFloat(transaction.amount).toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground capitalize">{transaction.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;