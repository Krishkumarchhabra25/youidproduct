import {
  Shield, CheckCircle, Clock, Lock, Eye,
  Upload, Bell, ThumbsUp,  PlugZap
} from "lucide-react";
import Navigation from "../Components/Navigation";
import { Badge } from "../Components/ui/badge";
import { Card, CardContent } from "../Components/ui/card";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/button";

const BusinessLanding = () => {
  const stats = [
    { value: "50%", label: "Reduced KYC Cost" },
    { value: "<1 hr", label: "Integration Time" },
    { value: "99.9%", label: "Uptime & Reliability" },
  ];

  const problems = [
    {
      icon: Lock,
      title: "Manual KYC is Expensive",
      description:
        "Traditional verification costs time and money. youID automates verification, cutting cost per user by up to 50%.",
    },
    {
      icon: Upload,
      title: "Document Storage Risks",
      description:
        "Storing sensitive customer documents increases compliance risk and liability. youID verifies without storing data.",
    },
    {
      icon: Clock,
      title: "Slow Onboarding Experience",
      description:
        "Customer drop-off happens when verification takes hours. youID reduces onboarding to seconds — boosting conversions.",
    },
  ];

  const features = [
    {
      icon: PlugZap,
      title: "Plug & Play Integration",
      points: [
        "REST APIs and SDKs for instant setup",
        "Works with your existing onboarding flow",
        "No major infrastructure changes",
      ],
    },
    {
      icon: Shield,
      title: "Privacy-First by Design",
      points: [
        "Zero document storage",
        "User data never leaves their device",
        "GDPR and ISO 27001 compliant",
      ],
    },
    {
      icon: Bell,
      title: "Instant Approvals",
      points: [
        "Real-time push notifications",
        "Biometric approval from the user’s phone",
        "Verified within 10 seconds",
      ],
    },
    {
      icon: Eye,
      title: "Full Transparency",
      points: [
        "Audit trails for every request",
        "Dashboard for tracking verifications",
        "Role-based access controls",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "Integrating youID took less than an hour — now our users verify in seconds, and we don’t store a single document.",
      author: "Raj K.",
      role: "Fintech CEO",
    },
    {
      quote:
        "youID helped us eliminate compliance stress. No more data storage audits or manual verification queues.",
      author: "Lisa P.",
      role: "Operations Head, Digital Bank",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-4">
                Built for Modern Businesses
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-black">
                Verify Customers Instantly. <br /> Stay Compliant Effortlessly.
              </h1>
              <p className="text-xl text-black/90 max-w-2xl mx-auto">
                youID helps organizations onboard verified users in seconds —
                without collecting or storing personal documents. Reduce costs,
                remove liability, and build trust with every verification.
              </p>
              <div className="flex justify-center">
                <Button size="lg" variant="secondary">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Challenges Businesses Face
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((p, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <p.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Businesses Choose youID
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {f.title}
                    </h3>
                    <ul className="space-y-2">
                      {f.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted by Growing Businesses
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <ThumbsUp className="h-8 w-8 text-success" />
                    <p className="text-muted-foreground italic">"{t.quote}"</p>
                    <div>
                      <div className="font-semibold text-foreground">
                        {t.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Start Verifying Smarter
            </h2>
            <p className="text-lg text-black/80 max-w-xl mx-auto mb-8">
              Join forward-thinking organizations who trust youID to deliver
              seamless, secure, and compliant identity verification.
            </p>
            <Button size="lg" variant="secondary">
              Request Demo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessLanding;
