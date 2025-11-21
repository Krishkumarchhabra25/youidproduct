import {
  Shield, CheckCircle, Clock, Lock, Eye,
  Upload, Bell, ThumbsUp,  PlugZap
} from "lucide-react";
import Navigation from "../Components/Navigation";
import { Badge } from "../Components/ui/badge";
import { Card, CardContent } from "../Components/ui/card";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/button";
import businessdahsboard from "../assets/images/dahsboardimage.png"
import challeneges from "../assets/images/challenge-1.png"
const BusinessLanding = () => {
const companies = [
  { name: "Company A", logo: "/logos/company1.png" },
  { name: "Company B", logo: "/logos/company2.png" },
  { name: "Company C", logo: "/logos/company3.png" },
  { name: "Company D", logo: "/logos/company4.png" },
  { name: "Company E", logo: "/logos/company5.png" },
  { name: "Company F", logo: "/logos/company6.png" },
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
<section className="relative bg-gradient-to-b from-[#dbeafe] via-white to-white pt-20 pb-20 md:pt-10 md:pb-28 overflow-hidden">

  {/* Decorative dots (optional) */}
  <div className="absolute inset-0 pointer-events-none opacity-40">
    <div className="absolute top-10 left-1/4 w-3 h-3 bg-blue-200 rounded-full" />
    <div className="absolute top-40 right-1/4 w-2 h-2 bg-blue-300 rounded-full" />
    <div className="absolute bottom-32 left-10 w-4 h-4 bg-blue-100 rounded-full" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <Badge variant="secondary" className="mb-4">
        Built for Modern Businesses
      </Badge>

      <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
        Verify Customers Instantly. <br />
        Stay Compliant Effortlessly.
      </h1>

      <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
        youID helps organizations onboard verified users in seconds — 
        without collecting or storing personal documents. Reduce costs,
        remove liability, and build trust with every verification.
      </p>

      <Button size="lg" variant="secondary" className="mt-4">
        Request Demo
      </Button>
    </div>

    {/* Dashboard Image */}
    {/* <div className="relative flex justify-center mt-10 md:mt-12">
      <div className="w-full max-w-5xl">
        <img
          src={businessdahsboard}
          alt="Dashboard Preview"
          className="
            w-full 
            rounded-2xl 
            shadow-2xl 
            border border-gray-200 
            transform 
            md:scale-110 
            hover:scale-105 
            transition-all 
            duration-700 
            ease-out
          "
        />
      </div>
    </div> */}

  </div>
</section>


{/* Trusted Companies Section */}
<section className="py-6 bg-secondary/20 border-y border-border">
  <div className="container mx-auto px-4">

    <h2 className="text-center text-xl md:text-2xl font-semibold text-foreground mb-8">
      Trusted by fast-growing companies
    </h2>

    {/* Horizontal Scroll Wrapper */}
    <div className="relative overflow-hidden">
      <div
        className="
          flex items-center gap-16 animate-scroll
          hover:pause-scroll
        "
      >
        {/* Duplicate logos for seamless infinite scrolling */}
        {[...companies, ...companies].map((c, i) => (
          <div
            key={i}
            className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={c.logo}
              alt={c.name}
              className="
                h-12 w-auto opacity-70
                hover:opacity-100
                transition-all duration-300
              "
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

{/* Problems Section – Updated & Balanced */}
<section className="py-24 px-6 md:px-12 lg:px-20">
  <div className="grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE TEXT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        The Challenges Businesses Face
      </h2>

      <p className="text-muted-foreground mb-10 max-w-md">
        Businesses struggle with manual verification, compliance risks, slow onboarding,
        and rising KYC costs. youID solves these challenges by enabling instant,
        document-free, and secure verification.
      </p>

      <div className="space-y-8">
        {problems.map((p, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <p.icon className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE – Image + Floating Cards */}
    <div className="relative flex justify-center">
      <img
        src={challeneges}
        alt="Challenges Illustration"
        className="w-full max-w-lg rounded-3xl shadow-xl"
      />

      {/* Floating card 1 */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-3 border">
        <Lock className="text-destructive h-5 w-5" />
        <p className="text-sm font-medium">Manual KYC is Expensive</p>
      </div>

      {/* Floating card 2 */}
      <div className="absolute top-32 -right-6 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-3 border">
        <Upload className="text-primary h-5 w-5" />
        <p className="text-sm font-medium">Document Storage Risks</p>
      </div>

      {/* Floating card 3 */}
      <div className="absolute bottom-6 -left-6 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-3 border">
        <Clock className="text-success h-5 w-5" />
        <p className="text-sm font-medium">Slow Onboarding Experience</p>
      </div>
    </div>

  </div>
</section>

    {/* Features Section – EXACT layout like your reference */}
<section className="py-24 bg-secondary/30">
  <div className="container mx-auto px-4">

    {/* Top Title */}
    <div className="text-center mb-16">
      <span className="px-4 py-1 text-xs rounded-full bg-primary/10 text-primary">
        Why youID?
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
        Why Businesses Choose youID
      </h2>
      <p className="text-muted-foreground mt-3">
        Fast, secure, automated identity verification for modern businesses.
      </p>
    </div>

    {/* LEFT IMAGE + RIGHT CARDS */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src={businessdahsboard}   // put your left side image here
          alt="youID Features"
          className="rounded-3xl w-full max-w-lg shadow-lg"
        />
      </div>

      {/* RIGHT SIDE – 2×2 FEATURES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {features.map((f, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-border
                       flex flex-col gap-3"
          >
            {/* Icon */}
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <f.icon className="h-5 w-5 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-foreground">
              {f.title}
            </h3>

            {/* Points */}
            <ul className="space-y-2">
              {f.points.map((point, i) => (
                <li key={i} className="flex items-start text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 mr-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
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
