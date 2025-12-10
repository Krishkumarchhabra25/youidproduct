import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

// 🔹 shared hero/card background image
import heroBg from "@/assets/images/YouID 3.png";

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
      // HERO SECTION
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
      // ---------------------------
      const section = problemRef.current;
      const points = pointsRef.current;
      const chooseSection = chooseRef.current;
      const chooseBox = chooseBoxRef.current;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
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

      mm.add("(max-width: 767px)", () => {
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
              scrub: true,
            },
          });
        }

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
                scrub: true,
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
    <div className="min-h-screen flex flex-col font-body bg-[#131019]">
      <Navigation />

      <main className="flex-1 bg-[#131019]">
        {/* ---------------- HERO ---------------- */}
 <section
  ref={heroRef}
  className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* overlay */}
  <div className="absolute inset-0 bg-black/60 pointer-events-none" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <h1 className="hero-title text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
        Verify Customers Instantly.<br />
        Stay Compliant Effortlessly.
      </h1>

      <p className="hero-desc text-lg md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body">
        youID helps organisations verify Users in seconds without
        storing or handling sensitive documents, avoid management Risks,
        Costs and yet stay compliant.
      </p>

      <Button
        size="lg"
        variant="secondary"
        className="
          hero-btn
          mt-6 mx-auto
          text-lg px-10 py-6 font-semibold font-body
          flex items-center justify-center
          bg-[#FF6B35]
          text-white border border-white/10
          hover:bg-[#ff824f]
          shadow-lg shadow-black/40
          rounded-xl
        "
      >
        Request Demo
      </Button>
    </div>
  </div>
</section>


        {/* ------------- PROBLEM SECTION ------------- */}
        <section
          ref={problemRef}
          className="py-28 px-6 md:px-12 lg:px-20 bg-[#131019] text-white relative overflow-visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-6xl font-heading font-extrabold leading-[1.15]">
                Why Businesses
                <br /> Worry About{" "}
                <span className="text-[#FF6B35]">Storing Customer PID</span>
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
          className="py-28 bg-[#131019] text-white relative overflow-visible"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div
              ref={chooseBoxRef}
              className="
                rounded-3xl 
                p-[2px] sm:p-[3px] md:p-[4px]
                bg-gradient-to-br from-black via-[#1f0a00] to-[#FF6B35]
                shadow-2xl
                min-h-[480px] md:min-h-[620px]
              "
            >
              {/* Card with background image */}
              <div
                className="
                  h-full w-full
                  rounded-3xl
                  relative overflow-hidden
                  px-6 sm:px-8 md:px-16
                  py-6 sm:py-8 md:py-16
                  text-white
                "
                style={{
                  backgroundImage: `url(${heroBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/65 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold leading-[1.15] mb-10 md:mb-14 tracking-tight">
                    Why Businesses Choose youID
                  </h2>

                  <div className="space-y-10 md:space-y-14 text-lg">
                    {[
                      {
                        number: "01",
                        title: "Instant Verification",
                        description:
                          "Skip document uploads — verify customers instantly with zero-document checks.",
                      },
                      {
                        number: "02",
                        title: "Reduce Fraud",
                        description:
                          "Stop fraudulent sign-ups using decentralized, cryptographic identity proofs.",
                      },
                      {
                        number: "03",
                        title: "Zero PII Storage",
                        description:
                          "Businesses have option to not store Customer PII, no need to store Customers documents copies — dramatically reducing data breach exposure.",
                      },
                      {
                        number: "04",
                        title: "Faster Onboarding",
                        description:
                          "Cut friction at signup and increase conversion while staying fully compliant.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="choose-item border-t border-white/10 pt-6 first:pt-0 first:border-t-0"
                      >
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2 tracking-tight flex items-center gap-4">
                          <span className="text-3xl sm:text-4xl font-extrabold px-3 py-1 rounded-full bg-black/60 text-[#FFCF9A]">
                            {item.number}
                          </span>
                          <span className="text-white">{item.title}</span>
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed font-body max-w-xl">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end inner card */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessLanding;
