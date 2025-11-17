  import {
    Shield, CheckCircle, Clock, Lock, Eye,
    Upload, Bell
  } from "lucide-react";
  import Navigation from "../Components/Navigation";
  import { Badge } from "../Components/ui/badge";
  import { Card, CardContent } from "../Components/ui/card";
  import Footer from "../Components/Footer";
  import userMockup from "@/assets/images/usermokup1.png";
  import problemMockup from "@/assets/images/problemidenity.jpg";
  import solutionMockup from "@/assets/images/youidprotects.jpg";
  import { motion } from "framer-motion";

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
        image: "/users/u1.jpg",
        quote: "youID made my verification process instant!",
        author: "Amit Shah",
        role: "Product Designer"
      },
      {
        image: "/users/u2.jpg",
        quote: "Super smooth and highly secure. Love it!",
        author: "Sneha Patil",
        role: "Freelancer"
      },
      {
        image: "/users/u3.jpg",
        quote: "Identity verification has never been this easy.",
        author: "Rohan Mehta",
        role: "Startup Founder"
      }
    ];

    return (
      <div
        className="min-h-screen flex flex-col"
        style={{
          background: "linear-gradient(135deg, #e8ddff 0%, #ffffff 45%, #ffeede 100%)"
        }}
      >
        <Navigation />

        <main className="flex-1">

          {/* ------------------------------------------------------------- */}
          {/* HERO */}
          {/* ------------------------------------------------------------- */}
          <section className="relative overflow-hidden pt-10 pb-0">

            <div className="container relative mx-auto px-4 text-center pb-0">

              <Badge
                variant="secondary"
                className="mb-6 text-sm px-4 py-1 rounded-full bg-white shadow-sm border"
              >
                Privacy-First Verification
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight max-w-4xl mx-auto">
                Verify Your Identity Once,
                <br />
                Use It Anywhere.
              </h1>

              <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto mt-6">
                youID puts you in control of your identity. Store your documents
                securely on your phone, and approve verification requests with one tap.
              </p>

              <div className="w-full flex justify-center mt-10">
                <div className="overflow-hidden h-[340px] md:h-[370px] lg:h-[370px]">
                  <img
                    src={userMockup}
                    alt="youID App Preview"
                    className="w-[260px] md:w-[420px] lg:w-[420px] object-top"
                  />
                </div>
              </div>

            </div>
          </section>

          {/* ------------------------------------------------------------- */}
          {/* STATS */}
          {/* ------------------------------------------------------------- */}
          <section className="pt-20 pb-12">
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

          {/* ------------------------------------------------------------- */}
          {/* PROBLEM */}
          {/* ------------------------------------------------------------- */}
          <section className="py-24">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

              <div className="w-full flex justify-center">
                <img
                  src={problemMockup}
                  alt="Problem illustration"
                  className="w-full max-w-md drop-shadow-2xl rounded-2xl"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                  The Problem With Identity Verification Today
                </h2>

                <div className="space-y-8">
                  {problems.map((problem, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-5 rounded-xl border bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition"
                    >
                      <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <problem.icon className="h-6 w-6 text-destructive" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {problem.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ------------------------------------------------------------- */}
          {/* SOLUTION */}
          {/* ------------------------------------------------------------- */}
          <section className="py-24">
            <div className="container mx-auto px-4 text-center">

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                How youID Protects You
              </h2>

              <div className="flex justify-center mb-16">
                <img
                  src={solutionMockup}
                  alt="youID Solution"
                  className="w-full max-w-sm md:max-w-md drop-shadow-2xl rounded-3xl"
                />
              </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
  {features.map((feature, index) => (
    <div
      key={index}
      className="space-y-4 flex flex-col items-center text-center"
    >
      {/* Icon */}
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <feature.icon className="h-6 w-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground">
        {feature.title}
      </h3>

      {/* Points */}
      <ul className="space-y-2 text-sm text-muted-foreground w-full">
        {feature.points.map((point, i) => (
          <li
            key={i}
            className="flex items-start justify-center gap-2 text-center"
          >
            <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
            <span className="text-left">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>


            </div>
          </section>

          {/* ------------------------------------------------------------- */}
          {/* TESTIMONIALS */}
          {/* ------------------------------------------------------------- */}
          <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4">

              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What Users Say
                </h2>
              </div>

              <div className="relative w-full overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <Card
                      key={i}
                      className="min-w-[300px] md:min-w-[380px] border-border flex-shrink-0 bg-white/70 backdrop-blur-sm"
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={t.image}
                            alt={t.author}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-foreground">{t.author}</div>
                            <div className="text-sm text-muted-foreground">{t.role}</div>
                          </div>
                        </div>

                        <p className="text-muted-foreground italic">"{t.quote}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </div>

            </div>
          </section>

        </main>

        <Footer />
      </div>
    );
  };

  export default UserLanding;
