// UserAbout.tsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Shield, Eye, Zap, UserCheck, Lock } from "lucide-react";
import zkImage from "../../assets/images/zeroknowldge.png";
import valuesImage from "../../assets/images/ourvalues.jpg";

gsap.registerPlugin(ScrollTrigger);

const UserAbout = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // reset collected refs each render before assigning in JSX
  sectionsRef.current = [];
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // same darker orange → black as BusinessAbout
    const initialBg =
      "radial-gradient(circle at 10% 0%, rgba(255,106,0,1) 0%, rgba(122,44,0,1) 22%, rgba(18,6,0,1) 55%, rgba(0,0,0,1) 100%)";

    if (containerRef.current) {
      gsap.set(containerRef.current, {
        background: initialBg,
        backgroundSize: "cover",
        backgroundPosition: "top left",
      });
    }

    // section card animations
    sectionsRef.current.forEach((section) => {
      if (!section) return;
      const cards = section.querySelectorAll(".animate-card");
      if (!cards.length) return;

      if (prefersReduced) {
        gsap.set(cards, { opacity: 1, x: 0, y: 0 });
      } else {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });

    if (prefersReduced) return;

    // use gsap.matchMedia (same as BusinessAbout)
    const mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 1024px)", () => {
      const endBg =
        "radial-gradient(circle at 30% 0%, rgba(170,58,0,1) 0%, rgba(20,8,0,1) 40%, rgba(0,0,0,1) 100%)";

      const tween = gsap.to(containerRef.current, {
        background: endBg,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      return () => {
        try {
          tween.scrollTrigger && tween.scrollTrigger.kill();
          tween.kill();
        } catch (e) {}
      };
    });

    // Tablet
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const endBg =
        "radial-gradient(circle at 20% 0%, rgba(170,58,0,0.9) 0%, rgba(26,10,0,1) 45%, rgba(0,0,0,1) 100%)";

      const tween = gsap.to(containerRef.current, {
        background: endBg,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      return () => {
        try {
          tween.scrollTrigger && tween.scrollTrigger.kill();
          tween.kill();
        } catch (e) {}
      };
    });

    // Mobile
    mm.add("(max-width: 767px)", () => {
      const endBg =
        "radial-gradient(circle at 25% 5%, rgba(255,106,0,0.8) 0%, rgba(26,10,0,1) 40%, rgba(0,0,0,1) 100%)";

      const tween = gsap.to(containerRef.current, {
        background: endBg,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      return () => {
        try {
          tween.scrollTrigger && tween.scrollTrigger.kill();
          tween.kill();
        } catch (e) {}
      };
    });

    return () => {
      try {
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {}
    };
  }, []);

  // same themed card style as BusinessAbout
  const themedCardStyle = {
    background: "linear-gradient(180deg, rgba(255,106,0,0.06), rgba(0,0,0,0.6))",
    border: "1px solid rgba(255,106,0,0.10)",
    color: "white",
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col text-white overflow-hidden"
    >
      <Navigation />

      {/* HERO */}
      <section ref={addToRefs} className="relative text-center py-20 md:py-24 px-6 ">
        <Badge className="mb-6 px-4 py-1 text-sm font-medium bg-white/10 text-white rounded-full border-none animate-card font-body">
          About youID for Users
        </Badge>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight animate-card">
          Reimagining Digital Identity for People
        </h1>

        <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed mb-8 animate-card">
          youID lets you prove who you are without handing over your documents
          again and again — your identity stays encrypted on your phone, under
          your control.
        </p>

        <button className="bg-orange-500 text-black px-6 py-3 rounded-full text-sm hover:bg-orange-600 transition animate-card">
          Get Started
        </button>
      </section>

      {/* MISSION / VISION / PROBLEM – same layout as BusinessAbout */}
      <section ref={addToRefs} className="py-14 md:py-16 px-6 md:px-14 lg:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {/* Our Mission */}
          <Card className="relative shadow-md border-none rounded-3xl bg-black animate-card overflow-hidden">
            <div className="absolute right-0 top-4 bottom-4 w-[3px] bg-orange-500 rounded-full" />
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-white flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                Our Mission
              </h3>
              <p className="leading-relaxed text-white font-body">
                Empower individuals to verify identity in seconds while keeping
                full control over their documents and personal data.
              </p>
            </CardContent>
          </Card>

          {/* Our Vision */}
          <Card className="relative shadow-md border-none rounded-3xl bg-black animate-card overflow-hidden">
            <div className="absolute right-0 top-4 bottom-4 w-[3px] bg-orange-500 rounded-full" />
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-white flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                Our Vision
              </h3>
              <p className="leading-relaxed text-white font-body">
                One secure identity on your phone — usable anywhere online,
                without uploading documents to every app you use.
              </p>
            </CardContent>
          </Card>

          {/* The Problem */}
          <Card className="relative shadow-md border-none rounded-3xl bg-black animate-card overflow-hidden">
            <div className="absolute right-0 top-4 bottom-4 w-[3px] bg-orange-500 rounded-full" />
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-white flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                The Problem
              </h3>
              <p className="leading-relaxed text-white font-body">
                Today you’re asked to upload the same sensitive ID everywhere.
                Each upload is another copy of your identity waiting to be
                leaked. youID removes this risk.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ZERO KNOWLEDGE */}
      <section ref={addToRefs} className="py-20 md:py-24 px-6 md:px-14 lg:px-20">
        <div className="text-center mb-14 animate-card">
          <Badge className="mb-4 px-4 py-1 text-sm bg-white/10 text-white rounded-full border-none">
            Our Solution
          </Badge>

          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
            Zero-Knowledge Verification
          </h2>

          <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed">
            youID proves what a service needs to know about you — like age or
            country — without exposing the full document or sending raw data to
            anyone.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            className="rounded-3xl overflow-hidden shadow-xl border-none animate-card"
            style={themedCardStyle}
          >
            <img src={zkImage} alt="Zero Knowledge Security" className="w-full block" />
          </div>

          <div className="animate-card text-white">
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Your Documents Stay With You.
            </h3>

            <p className="leading-relaxed mb-8 text-white text-lg">
              Your passport, license, and ID never leave your phone. You approve
              each verification with your fingerprint or face, and only the
              result is shared.
            </p>

            <ul className="space-y-5 text-white">
              <li className="flex gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full mt-2"></span>
                <p>
                  <strong>No raw ID uploads:</strong> Apps see only what they
                  need to, not your entire document.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full mt-2"></span>
                <p>
                  <strong>Local device storage:</strong> Documents never sit on
                  random company servers.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full mt-2"></span>
                <p>
                  <strong>Biometric approval:</strong> Only you can approve a
                  verification request.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full mt-2"></span>
                <p>
                  <strong>End-to-end encryption:</strong> Your data is encrypted
                  at rest and in transit.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section ref={addToRefs} className="py-20 md:py-24 px-6 md:px-14 lg:px-20">
        <div className="text-center mb-16 animate-card">
          <Badge className="mb-4 px-4 py-1 text-sm bg-white/10 text-white rounded-full border-none">
            Our Values
          </Badge>

          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white">
            What Matters Most to You
          </h2>

          <p className="text-white max-w-3xl mx-auto mt-4 leading-relaxed">
            Four principles guide how we design youID — all focused on
            protecting your privacy and safety online.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div
            className="rounded-3xl overflow-hidden shadow-xl border-none animate-card"
            style={themedCardStyle}
          >
            <img src={valuesImage} alt="Our Values" className="w-full block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                desc: "Your documents stay with you — we never store them.",
              },
              {
                icon: UserCheck,
                title: "User Control",
                desc: "Nothing happens without your explicit biometric approval.",
              },
              {
                icon: Eye,
                title: "Transparency",
                desc: "Clear logs and controls, no hidden syncing or sharing.",
              },
              {
                icon: Lock,
                title: "Security by Design",
                desc: "Encryption at every layer, zero-trust by default.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl shadow-md animate-card text-white"
                style={themedCardStyle}
              >
                <div className="p-3 bg-white/10 text-white rounded-full w-fit mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
            ))}

            <div
              className="p-6 rounded-2xl shadow-md sm:col-span-2 animate-card text-white"
              style={themedCardStyle}
            >
              <div className="p-3 bg-white/10 text-white rounded-full w-fit mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">
                Simplicity
              </h3>
              <p className="text-white text-sm">
                One tap to approve. No forms, no PDFs, no repeated uploads — just
                fast, private verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={addToRefs}
        className="text-center py-20 px-6 md:px-20 animate-card"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
          Own Your Identity with youID
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-white">
          Join the next generation of users who verify instantly while keeping
          their documents safe on their own devices.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-500 text-black px-6 py-3 rounded-full text-sm hover:bg-orange-600 animate-card">
            I’m a User
          </button>

          <button className="text-white border-none px-6 py-3 rounded-full text-sm hover:bg-white/10 animate-card">
            For Businesses
          </button>

          <button className="text-white border-none px-6 py-3 rounded-full text-sm hover:bg-gray-800/40 animate-card">
            Developer Access
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserAbout;
