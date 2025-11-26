// BusinessAbout.tsx
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

const BusinessAbout = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // reset collected refs each render before assigning in JSX
  sectionsRef.current = [];
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // darker, deeper orange-to-black
    const initialBg =
      "radial-gradient(circle at 10% 0%, rgba(255,106,0,1) 0%, rgba(122,44,0,1) 22%, rgba(18,6,0,1) 55%, rgba(0,0,0,1) 100%)";

    if (containerRef.current) {
      gsap.set(containerRef.current, {
        background: initialBg,
        backgroundSize: "cover",
        backgroundPosition: "top left",
      });
    }

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

    // use gsap.matchMedia so mm.add/mm.revert are valid
    const mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 1024px)", () => {
      // darker end background as you scroll down
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

  // used for the rest of the cards (not the mission/vision/problem trio)
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
          About youID for Business
        </Badge>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight animate-card">
          Identity Verification Built for Modern Businesses
        </h1>

        <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed mb-8 animate-card">
          youID helps businesses verify users instantly — without storing documents,
          reducing compliance risk, and improving conversion with seamless onboarding.
        </p>

        <button className="bg-orange-500 text-black px-6 py-3 rounded-full text-sm hover:bg-orange-600 transition animate-card">
          Start Verification
        </button>
      </section>

      {/* MISSION / VISION / PROBLEM */}
      <section ref={addToRefs} className="py-14 md:py-16 px-6 md:px-14 lg:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {/* Our Mission */}
          <Card className="relative shadow-md border-none rounded-3xl bg-black animate-card overflow-hidden">
            {/* right-side orange border inside card */}
            <div className="absolute right-0 top-4 bottom-4 w-[3px] bg-orange-500 rounded-full" />
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-white flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                Our Mission
              </h3>
              <p className="leading-relaxed text-white font-body">
                Enable businesses to verify identity in seconds — without storing or managing
                sensitive documents, reducing compliance risk while keeping users in control.
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
                A frictionless verification ecosystem where businesses operate confidently,
                users maintain full data ownership, and verification works everywhere.
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
                Traditional verification requires storing documents, creating liability,
                manual reviews, and high compliance cost. youID eliminates these burdens entirely.
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
            youID enables businesses to verify identity without ever accessing or storing
            documents — powered by Zero-Knowledge Proof technology.
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
              Enterprise Security. Zero Data Liability.
            </h3>

            <p className="leading-relaxed mb-8 text-white text-lg">
              youID ensures your business doesn't handle or store any personal documentation,
              eliminating compliance overhead and breach risk.
            </p>

            <ul className="space-y-5 text-white">
              <li className="flex gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full mt-2"></span>
                <p><strong>No document storage:</strong> You never hold IDs or sensitive data.</p>
              </li>

              <li className="flex gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full mt-2"></span>
                <p><strong>Local device verification:</strong> Documents never leave the user's phone.</p>
              </li>

              <li className="flex gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full mt-2"></span>
                <p><strong>Biometric approval:</strong> Every verification must be approved by the user.</p>
              </li>

              <li className="flex gap-3">
                <span className="w-3 h-3 bg-orange-400 rounded-full mt-2"></span>
                <p><strong>Encrypted end-to-end:</strong> Only verification results are shared.</p>
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
            What Drives Everything We Build
          </h2>

          <p className="text-white max-w-3xl mx-auto mt-4 leading-relaxed">
            We prioritize trust, transparency, and security in every part of our infrastructure.
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
                desc: "Businesses never store or access user documents.",
              },
              {
                icon: UserCheck,
                title: "User Consent",
                desc: "Verification happens only with biometric approval.",
              },
              {
                icon: Eye,
                title: "Transparency",
                desc: "Clear processes and auditable verification logs.",
              },
              {
                icon: Lock,
                title: "Security by Design",
                desc: "Zero-knowledge architecture and encryption everywhere.",
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
                One tap for users. Zero complexity for businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={addToRefs} className="text-center py-20 px-6 md:px-20 animate-card">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
          Work With youID
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-white">
          Join the growing ecosystem of businesses adopting document-free,
          zero-liability verification.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-500 text-black px-6 py-3 rounded-full text-sm hover:bg-orange-600 animate-card">
            I’m a Business
          </button>

          <button className="text-white border-none px-6 py-3 rounded-full text-sm hover:bg-white/10 animate-card">
            Developer Access
          </button>

          <button className="text-white border-none px-6 py-3 rounded-full text-sm hover:bg-gray-800/40 animate-card">
            Learn More
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAbout;
