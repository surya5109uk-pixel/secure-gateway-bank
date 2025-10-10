import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const FAQ = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  const faqs = [
    {
      question: "How do I open an account?",
      answer: "Opening an account is simple! Click the 'Sign Up' button on our homepage, fill in your personal details, and follow the verification process. Your account will be ready in minutes."
    },
    {
      question: "What are the interest rates on savings accounts?",
      answer: "Our savings accounts offer competitive interest rates up to 4.5% per annum. The exact rate depends on your account balance and tenure. Check our Services page for detailed information."
    },
    {
      question: "Is online banking secure?",
      answer: "Yes, absolutely! We use bank-grade encryption, multi-factor authentication, and continuous monitoring to ensure your data and transactions are secure. We're also compliant with international security standards."
    },
    {
      question: "What types of loans do you offer?",
      answer: "We offer various loan products including Personal Loans, Home Loans, Car Loans, and Education Loans. Each comes with competitive interest rates and flexible repayment options."
    },
    {
      question: "How can I transfer money?",
      answer: "You can transfer money through our online banking platform or mobile app. Simply log in, go to 'Transfer Funds', enter the recipient's details and amount, and confirm the transaction."
    },
    {
      question: "What are the fees for international transfers?",
      answer: "International transfer fees vary based on the destination country and transfer amount. Typically, fees range from $15 to $50 per transaction. Check our fee schedule for detailed information."
    },
    {
      question: "How do I report a lost or stolen card?",
      answer: "Call our 24/7 customer service hotline immediately at +1 (555) 000-0000 to block your card. You can also report it through our mobile app's security section."
    },
    {
      question: "Can I have multiple accounts?",
      answer: "Yes! You can open multiple accounts including savings, current, and fixed deposit accounts. Each account can be managed through a single dashboard."
    },
    {
      question: "What documents do I need to apply for a loan?",
      answer: "Required documents typically include: valid ID proof, address proof, income statements for the last 6 months, and tax returns. Specific requirements may vary by loan type."
    },
    {
      question: "How long does loan approval take?",
      answer: "Loan applications are typically processed within 2-5 business days. For pre-approved customers, approval can be instant. You'll be notified via email and SMS about your application status."
    },
    {
      question: "What is the minimum balance requirement?",
      answer: "For savings accounts, there's no minimum balance requirement. Current accounts may have a minimum balance of $500. Fixed deposits have varying minimum amounts based on the tenure chosen."
    },
    {
      question: "How can I update my contact information?",
      answer: "Log in to your account, go to 'Profile Settings', and update your contact information. Alternatively, visit any of our branches with your ID proof to update your details."
    },
    {
      question: "Do you offer business banking services?",
      answer: "Yes! We offer comprehensive business banking solutions including business accounts, merchant services, business loans, and cash management services. Contact us for more details."
    },
    {
      question: "What are your customer service hours?",
      answer: "Our customer service is available 24/7 through phone and chat. Branch hours are Monday-Friday 9 AM to 5 PM, Saturday 9 AM to 1 PM."
    },
    {
      question: "Can I close my account online?",
      answer: "While you can request account closure online, final processing requires identity verification. Contact our customer service or visit a branch to complete the closure process."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} />
      
      <main className="flex-1">
        <section className="py-16" style={{ background: 'var(--gradient-primary)' }}>
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Find answers to common questions about our banking services
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>

              <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our support team is here to help.
                </p>
                <a href="/contact" className="text-primary hover:underline font-semibold">
                  Contact Support →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;