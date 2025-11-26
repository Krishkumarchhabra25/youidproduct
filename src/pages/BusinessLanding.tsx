import Navigation from "../Components/Navigation";
import { Badge } from "../Components/ui/badge";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BusinessLanding = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const problemRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);

  const chooseRef = useRef<HTMLDivElement | null>(null);
  const chooseBoxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------------------------
      // HERO SECTION (same on all sizes)
      // ---------------------------
      const hero = heroRef.current;
      if (hero) {
        const heroTitle = hero.querySelector(".hero-title");
        const heroDesc = hero.querySelector(".hero-desc");
        const heroBtn = hero.querySelector(".hero-btn");

        gsap.set([heroTitle, heroDesc, heroBtn], { opacity: 0 });

        gsap.fromTo(
          heroTitle,
          { opacity: 0, scale: 0.85, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            delay: 0.2,
          }
        );

        gsap.fromTo(
          heroDesc,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.6,
          }
        );

        gsap.fromTo(
          heroBtn,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.8,
          }
        );
      }

      // ---------------------------
      // RESPONSIVE ANIMATIONS
      // desktop/tablet vs mobile
      // ---------------------------
      const section = problemRef.current;
      const points = pointsRef.current;
      const chooseSection = chooseRef.current;
      const chooseBox = chooseBoxRef.current;

      const mm = gsap.matchMedia();

      // ≥768px: your original pinned / scrub behavior
      mm.add("(min-width: 768px)", () => {
        // PROBLEM SECTION (pinned)
        if (section && points.length > 0) {
          gsap.set(points, { opacity: 0, y: 60 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=300%",
              scrub: true,
              pin: true,
              pinSpacing: true,
            },
          });

          points.forEach((el, i) => {
            if (!el) return;
            tl.to(el, { opacity: 1, y: 0, duration: 1 }, `step-${i}`);
          });
        }

        // CHOOSE YOU-ID SECTION (pulsing box + staggered bullets)
        if (chooseSection && chooseBox) {
          gsap.set(chooseBox, { opacity: 0, scale: 0.95 });

          const chooseTL = gsap.timeline({
            scrollTrigger: {
              trigger: chooseSection,
              start: "top 90%",
              end: "bottom 30%",
              scrub: true,
            },
          });

          chooseTL
            .to(chooseBox, {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power2.out",
            })
            .to(chooseBox, {
              opacity: 0.9,
              scale: 0.97,
              duration: 1,
              ease: "power1.out",
            });

          const bulletItems =
            chooseBox.querySelectorAll<HTMLDivElement>(".choose-item");

          gsap.fromTo(
            bulletItems,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: chooseSection,
                start: "top 75%",
                end: "top 40%",
                scrub: true,
              },
            }
          );
        }
      });

      // <768px: simple fade-in / fade-out on scroll (no pin, no scrub timelines)
      mm.add("(max-width: 767px)", () => {
        // PROBLEM SECTION: whole right column fades in/out
        if (section && points.length > 0) {
          gsap.set(points, { opacity: 0, y: 40 });

          gsap.to(points, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true, // gives fade-in and fade-out as you scroll
            },
          });
        }

        // CHOOSE YOU-ID SECTION: box + bullets simple fade in/out
        if (chooseSection && chooseBox) {
          gsap.fromTo(
            chooseBox,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: chooseSection,
                start: "top 85%",
                end: "bottom 25%",
                scrub: true, // fade in and fade out
              },
            }
          );

          const bulletItems =
            chooseBox.querySelectorAll<HTMLDivElement>(".choose-item");

          gsap.fromTo(
            bulletItems,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: chooseSection,
                start: "top 80%",
                end: "bottom 30%",
                scrub: true,
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navigation />

      <main className="flex-1 bg-black">
        {/* ---------------- HERO ---------------- */}
        <section
          ref={heroRef}
          className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-[#1a0f00]"
        >
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-10 left-1/4 w-3 h-3 bg-orange-200 rounded-full" />
            <div className="absolute top-40 right-1/4 w-2 h-2 bg-orange-300 rounded-full" />
            <div className="absolute bottom-32 left-10 w-4 h-4 bg-orange-100 rounded-full" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4 font-body tracking-wide">
                Built for Modern Businesses
              </Badge>

              <h1 className="hero-title text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
                Verify Customers Instantly.<br />
                Stay Compliant Effortlessly.
              </h1>

              <p className="hero-desc text-lg md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body">
                youID helps organizations onboard verified users in seconds — without storing or handling sensitive documents.
              </p>

              <Button
                size="lg"
                variant="secondary"
                className="hero-btn mt-4 text-lg px-10 py-6 font-semibold font-body"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </section>

        {/* ------------- PROBLEM SECTION (PINNED ON DESKTOP/TABLET) ------------- */}
        <section
          ref={problemRef}
          className="py-28 px-6 md:px-12 lg:px-20 bg-black text-white relative overflow-visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-6xl font-heading font-extrabold leading-[1.15]">
                Why Businesses
                <br /> Worry About{" "}
                <span className="text-[#FF6B35]">Storing Customer PIDs</span>
              </h2>

              <p className="mt-6 text-xl text-gray-400 max-w-sm leading-relaxed font-body">
                Verification today is broken — slow, costly, and insecure.
              </p>
            </div>

            <div className="space-y-14 font-body">
              {[
                "Legal and Regulatory Penalties",
                "Financial & Operational Impacts",
                "Reputational Damage & Loss of Trust",
                "Inherent Risks of PII",
              ].map((title, i) => (
                <div
                  key={i}
                  ref={(el: HTMLDivElement | null) => {
                    pointsRef.current[i] = el;
                  }}
                  className="opacity-0 translate-y-10"
                >
                  <h3 className="text-3xl font-heading font-semibold mb-3">
                    ▸ {title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                    {i === 0 &&
                      "Mishandling PII exposes businesses to GDPR, DPDP, and other major compliance penalties."}
                    {i === 1 &&
                      "Secure PII storage demands audits, encryption, infrastructure, and monitoring — increasing yearly costs."}
                    {i === 2 &&
                      "A single data leak permanently destroys customer trust."}
                    {i === 3 &&
                      "Storing sensitive data creates unavoidable long-term risks."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------- WHY BUSINESSES CHOOSE YOU-ID ------------- */}
        <section
          ref={chooseRef}
          className="py-28 bg-black text-white relative overflow-visible"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div
              ref={chooseBoxRef}
              className="bg-[#FF6B35] text-black rounded-3xl p-20 shadow-2xl min-h-[620px]"
            >
              <h2 className="text-5xl md:text-6xl font-heading font-extrabold leading-[1.15] mb-14 tracking-tight">
                Why Businesses Choose youID
              </h2>

              <div className="space-y-14 text-lg">
                {[
                  [
                    "01",
                    "Instant Verification",
                    "Skip document uploads — verify instantly with zero-document checks.",
                  ],
                  [
                    "02",
                    "Reduce Fraud",
                    "Stop fraudulent sign-ups using decentralized identity methods.",
                  ],
                  [
                    "03",
                    "Zero PII Storage",
                    "youID stores nothing — eliminating all data breach risk.",
                  ],
                  [
                    "04",
                    "Faster Onboarding",
                    "Reduce friction and increase customer conversions instantly.",
                  ],
                ].map((item, i) => (
                  <div key={i} className="choose-item">
                    <h3 className="text-3xl font-heading font-bold mb-2 tracking-tight flex items-center gap-4">
                      <span className="text-4xl font-extrabold">{item[0]}</span>{" "}
                      {item[1]}
                    </h3>
                    <p className="text-black/80 text-lg leading-relaxed font-body max-w-xl">
                      {item[2]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessLanding;
