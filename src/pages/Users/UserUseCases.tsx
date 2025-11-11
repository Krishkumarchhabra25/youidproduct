import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Badge } from "@/Components/ui/badge";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Smartphone,
  Car,
  Hotel,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
} from "lucide-react";

const UserUseCases = () => {
  const useCases = [
    {
      icon: CreditCard,
      title: "Open a Bank Account — Instantly",
      description:
        "No more paperwork or in-person verification. youID allows banks to instantly confirm your identity while keeping your personal data fully private.",
    },
    {
      icon: ShoppingBag,
      title: "Shop Smartly and Safely",
      description:
        "When purchasing age-restricted or high-value items, verify your age or identity in seconds — without uploading or exposing your full ID.",
    },
    {
      icon: Hotel,
      title: "Skip Hotel Front-Desk Queues",
      description:
        "Check-in happens before you arrive. With youID, hotels can pre-verify your identity securely — giving you a faster and contactless check-in experience.",
    },
    {
      icon: Car,
      title: "Instant Car & Vehicle Rentals",
      description:
        "Use your verified driver’s license digitally. youID enables instant verification for rentals — saving time and removing the need for manual reviews.",
    },
    {
      icon: Smartphone,
      title: "Effortless App Sign-ups",
      description:
        "Whether joining a new fintech, gaming, or health app, sign in with your youID instantly — no forms, no ID scans, no waiting.",
    },
    {
      icon: ShieldCheck,
      title: "Fast, Secure Loan Applications",
      description:
        "youID lets financial institutions verify your KYC instantly, ensuring faster approvals and zero risk of data duplication or misuse.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            Real-World Use Cases
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            How You Use youID Every Day
          </h1>
          <p className="text-lg text-black/80 max-w-3xl mx-auto mb-16">
            youID powers real-world identity verification across industries —
            making every interaction faster, safer, and entirely in your
            control. No uploads. No waiting. No compromise.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="border border-black/10 shadow-sm hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 bg-white/70 backdrop-blur"
              >
                <CardContent className="p-8 text-left space-y-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10">
                    <useCase.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
              One Identity, Endless Possibilities
            </h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              youID doesn’t just simplify verification — it transforms the way
              trust is built online. From opening bank accounts to checking into
              hotels, your digital identity moves as fast as you do.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserUseCases;
