import {
  Shield, CheckCircle, Clock, Lock, Eye,
  Upload, Bell, ThumbsUp
} from "lucide-react";
import Navigation from "../Components/Navigation";
import { Badge } from "../Components/ui/badge";
import { Card, CardContent } from "../Components/ui/card";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/button";

const UserLanding = () => {
  const stats = [
    { value: "100,000+", label: "Users" },
    { value: "10 sec", label: "Average Verification" },
    { value: "99.9%", label: "Uptime" },
  ];

  const problems = [
    {
      icon: Upload,
      title: "Upload Documents Everywhere",
      description:
        "You’ve uploaded your passport to 10+ websites. Each time increases your risk of data breach and identity theft.",
    },
    {
      icon: Lock,
      title: "Zero Control Over Your Data",
      description:
        "Once uploaded, you have no idea where your documents are stored, who can access them, or how they’re being used.",
    },
    {
      icon: Clock,
      title: "Time Wasting",
      description:
        "Each verification takes 5–15 minutes. Blurry photos get rejected. Manual reviews take 24–48 hours.",
    },
  ];

  const features = [
    {
      icon: Upload,
      title: "Upload Once",
      points: [
        "Store documents securely on YOUR phone",
        "Military-grade encryption",
        "Never leaves your device",
        "Takes 10 seconds",
      ],
    },
    {
      icon: Bell,
      title: "Approve Instantly",
      points: [
        "Get push notification",
        "Review request details",
        "Approve with fingerprint/face",
      ],
    },
    {
      icon: Eye,
      title: "Stay in Control",
      points: [
        "See who accessed your data",
        "Revoke access anytime",
        "Full transparency",
      ],
    },
    {
      icon: Shield,
      title: "Privacy Guaranteed",
      points: [
        "Companies verify WITHOUT seeing documents",
        "Zero-knowledge architecture",
        "GDPR compliant",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "With youID, verifying my identity takes seconds — no more uploading IDs everywhere. Love the control it gives me.",
      author: "Sarah M.",
      role: "Software Engineer",
    },
    {
      quote:
        "Finally, someone who understands privacy. I love that my documents stay on MY phone.",
      author: "Mike L.",
      role: "Privacy Advocate",
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
                Privacy-First Verification
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-black">
                Verify Your Identity Once. Use It Everywhere.
              </h1>
              <p className="text-xl text-black/90 max-w-2xl mx-auto">
                youID puts you in control of your identity. Store your
                documents securely on your phone, approve verification
                requests with a tap — no more uploads.
              </p>
              <div className="flex justify-center">
                <Button size="lg" variant="secondary">
                  Download youID App
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

        {/* Problem Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Problem With Identity Verification Today
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <problem.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How youID Protects You
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.points.map((point, i) => (
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

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Users Say
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
      </main>

      <Footer />
    </div>
  );
};

export default UserLanding;
