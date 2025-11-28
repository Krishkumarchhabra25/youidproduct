import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Card, CardContent } from "@/Components/ui/card";
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  FileCheck,
  ScanLine,
  Handshake,
} from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UserBenefits = () => {
   const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  cardsRef.current = [];

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      cardsRef.current.forEach((c) => {
        if (c) gsap.set(c, { x: 0, opacity: 1, y: 0 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia(); // ✅ FIXED

      // ---------------- DESKTOP ----------------
      mm.add("(min-width: 1024px)", () => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

        gsap.set(cards, { x: 300, opacity: 0 });

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { x: 300, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        });

        gsap.set(el, {
          background:
            "radial-gradient(circle at top left, #ff6a00 0%, #1a0a00 25%, #000000 70%, #000000 100%)",
        });

        gsap.to(el, {
          background:
            "radial-gradient(circle at top left, #ff6a00 0%, #e05f00 22%, #2a1200 55%, #050100 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom center",
            scrub: 0.7,
          },
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
      });

      // ---------------- TABLET ----------------
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

        gsap.set(cards, { x: 180, opacity: 0 });

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { x: 180, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                end: "top 35%",
                scrub: true,
              },
            }
          );
        });

        gsap.to(el, {
          background:
            "radial-gradient(circle at top left, #6a2200 0%, #160702 35%, #000000 75%)",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
      });

      // ---------------- MOBILE ----------------
      mm.add("(max-width: 767px)", () => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 24, opacity: 0, scale: 0.995 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        gsap.set(el, {
          background:
            "radial-gradient(circle at top left, #7a2a00 0%, #180a02 25%, #000000 70%)",
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
     ref={sectionRef}
      className="min-h-screen flex flex-col text-white bg-black overflow-hidden"
    >
      <Navigation />

      {/* HEADER */}
      <section className="container mx-auto px-6 py-16 md:py-28 flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-16 bg-transparent">
        {/* LEFT — TITLE */}
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
            User
            <br /> Benefits
          </h1>

          <div className="w-20 h-1 bg-white mt-6 rounded-full opacity-80"></div>
        </div>

        {/* RIGHT — SUBHEADING */}
        <div className="max-w-xl space-y-6 md:space-y-8 font-mono">
          <div className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
             YouID provides Businesses and Users a Win-Win outcome .
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-body">
             youID isn't just about faster verification — it's about empowering
            you with ownership, safety, and simplicity in every digital
            interaction.
            </p>
          </div>

         
        </div>
      </section>

      {/* CARDS */}
      <section className="container mx-auto px-6 pb-20 md:pb-32 font-mono bg-transparent">
        <div className="grid gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          {/* 1 */}
          <div
            className="lg:col-span-4 lg:row-span-2"
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
          >
            <Card className="h-full rounded-3xl bg-[#0f0b07] border border-yellow-600/20 shadow-[0_0_25px_rgba(255,215,0,0.12)] text-white">
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4 text-left">
                <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />
                <h3 className="text-lg sm:text-2xl text-yellow-300 font-heading">
                  Privacy Protection
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body">
                  Users never have to upload or share sensitive identity documents, reducing the risk of data 
          breaches or misuse.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 2 */}
          <div className="lg:col-span-8" ref={(el) => {
              cardsRef.current[1] = el;
            }}>
            <Card className="rounded-3xl bg-[#0f0b07] border border-yellow-600/20 shadow-[0_0_25px_rgba(255,215,0,0.12)] text-white">
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4 text-left">
                <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />
                <h3 className="text-lg sm:text-2xl text-yellow-300 font-heading">Faster Verification</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body">
                   Instant identity checks without lengthy document submission processes, making onboarding 
          quick and hassle-free.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 3 */}
          <div className="lg:col-span-4" ref={(el) => {
              cardsRef.current[2] = el;
            }}>
            <Card className="rounded-3xl bg-[#0f0b07] border border-yellow-600/20 shadow-[0_0_25px_rgba(255,215,0,0.12)] text-white">
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4 text-left">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />
                <h3 className="text-lg sm:text-2xl text-yellow-300 font-heading">Convenience</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body">
                   No need to scan, upload, or email documents — verification happens seamlessly in the 
          background.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 4 */}
          <div className="lg:col-span-4" ref={(el) => {
              cardsRef.current[3] = el;
            }}>
            <Card className="rounded-3xl bg-[#0f0b07] border border-yellow-600/20 shadow-[0_0_25px_rgba(255,215,0,0.12)] text-white">
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4 text-left">
                <FileCheck className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />
                <h3 className="text-lg sm:text-2xl text-yellow-300 font-heading">Greater Security</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body">
                            Eliminates exposure of personal documents to multiple businesses minimizing identity theft 
          risks.

                </p>
              </CardContent>
            </Card>
          </div>

          {/* 5 */}
          <div className="lg:col-span-8" ref={(el) => {
              cardsRef.current[4] = el;
            }}>
            <Card className="rounded-3xl bg-[#0f0b07] border border-yellow-600/20 shadow-[0_0_25px_rgba(255,215,0,0.12)] text-white">
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4 text-left">
                <ScanLine className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />
                <h3 className="text-lg sm:text-2xl text-yellow-300 font-heading">No More Document Handling</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body">
                  Businesses no longer need to collect, store, or process sensitive ID files — reducing legal and security risks.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 6 */}
          <div className="lg:col-span-4" ref={(el) => {
              cardsRef.current[5] = el;
            }}>
            <Card className="rounded-3xl bg-[#0f0b07] border border-yellow-600/20 shadow-[0_0_25px_rgba(255,215,0,0.12)] text-white">
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4 text-left">
                <Handshake className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />
                <h3 className="text-lg sm:text-2xl text-yellow-300 font-heading">Control Over Personal Data</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body">
    Users retain ownership of their identity information, ensuring compliance with privacy 
          standards like GDPR.                </p>
              </CardContent>
            </Card>
          </div>

                {/* 7 */}
          <div className="lg:col-span-4" ref={(el) => {
              cardsRef.current[6] = el;
            }}>
            <Card className="rounded-3xl bg-[#0f0b07] border border-yellow-600/20 shadow-[0_0_25px_rgba(255,215,0,0.12)] text-white">
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4 text-left">
                <Handshake className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />
                <h3 className="text-lg sm:text-2xl text-yellow-300 font-heading">Improved User Experience</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body">
A frictionless process that avoids delays and enhances trust in the service.    </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserBenefits;