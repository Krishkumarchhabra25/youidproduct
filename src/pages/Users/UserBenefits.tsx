import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Badge } from "@/Components/ui/badge";
import { Card, CardContent } from "@/Components/ui/card";
import { Lock, Smile, Zap, CheckCircle, Eye, Shield } from "lucide-react";

const UserBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Your Privacy, Always Protected",
      description:
        "youID never uploads or stores your documents. Your data stays encrypted on your device — under your control.",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Verification",
      description:
        "Verify your identity anywhere in just seconds. No waiting for manual checks or re-uploads.",
    },
    {
      icon: Eye,
      title: "Transparent Access Control",
      description:
        "Track every verification request, know who accessed your data, and revoke access anytime.",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description:
        "Every interaction between your device and a verifier is protected by industry-leading encryption standards.",
    },
    {
      icon: Smile,
      title: "Frictionless Experience",
      description:
        "A single tap to verify — no forms, no scans, no repetition. Identity made truly effortless.",
    },
    {
      icon: CheckCircle,
      title: "Total Ownership",
      description:
        "youID redefines identity — giving control back to you, not centralized servers or third parties.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Your Advantages</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            The Benefits of Using youID
          </h1>
          <p className="text-lg text-black/80 max-w-3xl mx-auto mb-16">
            youID isn’t just about faster verification — it’s about empowering you with ownership,
            safety, and simplicity in every digital interaction.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-black/10 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-8 text-left space-y-4">
                  <benefit.icon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserBenefits;
