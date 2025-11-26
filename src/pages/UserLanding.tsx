// UserLanding.tsx
import Navigation from "../Components/Navigation";
import { Badge } from "../Components/ui/badge";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const userProblems = [
  {
    title: "Risk of Data Breaches and Identity Theft",
    description:
      "Social platforms have suffered major data breaches. Sharing your government ID online feels risky because one leak can expose everything—name, address, ID numbers, and more.",
  },
  {
    title: "Lack of Trust in Platforms",
    description:
      "You can’t always be sure how companies will use or store your documents. Many users worry their ID will be reused, shared, or profiled beyond the original verification purpose.",
  },
  {
    title: "Too Much Data, For One Check",
    description:
      "To prove one detail, you’re often forced to upload entire IDs and documents. That breaks data-minimization principles and increases how much sensitive information is floating around.",
  },
];

const userReasons = [
  {
    number: "01",
    title: "You Stay In Control",
    description:
      "Your documents live on your phone, not on someone else’s server. You approve every verification with your fingerprint or face.",
  },
  {
    number: "02",
    title: "Companies Don’t See Your ID",
    description:
      "Businesses verify what they need to know, without ever seeing or storing your actual documents.",
  },
  {
    number: "03",
    title: "Private by Design",
    description:
      "Zero-knowledge architecture and strong encryption keep your identity safe—even if a company’s systems are attacked.",
  },
  {
    number: "04",
    title: "One Time, Use Anywhere",
    description:
      "Verify once, reuse securely across apps and platforms without uploading documents again and again.",
  },
];

const UserLanding = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const problemRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);

  const chooseRef = useRef<HTMLDivElement | null>(null);
  const chooseBoxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      const hero = heroRef.current;
      if (hero) {
        const heroTitle = hero.querySelector(".hero-title");
        const heroDesc = hero.querySelector(".hero-desc");
        const heroBtn = hero.querySelector(".hero-btn");

        const elements = [heroTitle, heroDesc, heroBtn].filter(
          Boolean
        ) as Element[];

        gsap.set(elements, { opacity: 0 });

        if (heroTitle) {
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
        }

        if (heroDesc) {
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
        }

        if (heroBtn) {
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
      }

      // ANIMATIONS
      const section = problemRef.current;
      const points = pointsRef.current;
      const chooseSection = chooseRef.current;
      const chooseBox = chooseBoxRef.current;

      const mm = gsap.matchMedia();

      // DESKTOP / TABLET
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

      // MOBILE
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
    <div className="min-h-screen flex flex-col font-body">
      <Navigation />

      <main className="flex-1 bg-black">
        {/* HERO */}
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
              <Badge
                variant="secondary"
                className="mb-4 font-body tracking-wide"
              >
                For Individuals & Everyday Users
              </Badge>

              <h1 className="hero-title text-4xl md:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
                Verify Your Identity Once.
                <br />
                Use It Everywhere.
              </h1>

              <p className="hero-desc text-base md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body">
                youID keeps your documents on your phone and lets you approve
                verification with a single tap — companies verify you without
                ever seeing your ID.
              </p>

              <Button
                size="lg"
                variant="secondary"
                className="hero-btn mt-4 text-lg px-10 py-6 font-semibold font-body"
              >
                Get Started with youID
              </Button>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section
          ref={problemRef}
          className="py-20 md:py-28 px-4 md:px-12 lg:px-20 bg-black text-white relative overflow-visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold leading-[1.15]">
                Why People
                <br /> Worry About{" "}
                <span className="text-[#FF6B35]">
                  Sharing Their ID Online
                </span>
              </h2>

              <p className="mt-6 text-base md:text-xl text-gray-400 max-w-sm leading-relaxed font-body">
                Traditional verification asks you to hand over too much
                sensitive information — and trust that nothing bad happens to
                it.
              </p>
            </div>

            <div className="space-y-10 md:space-y-14 font-body">
              {userProblems.map((item, i) => (
                <div
                  key={i}
                  ref={(el: HTMLDivElement | null) => {
                    pointsRef.current[i] = el;
                  }}
                  className="opacity-0 translate-y-10"
                >
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-3">
                    ▸ {item.title}
                  </h3>

                  <p className="text-sm md:text-lg text-gray-400 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY USERS CHOOSE YOU-ID */}
        <section
          ref={chooseRef}
          className="py-20 md:py-28 bg-black text-white relative overflow-visible"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div
              ref={chooseBoxRef}
              className="
                bg-[#FF6B35] text-black rounded-3xl 
                p-6 sm:p-8 md:p-20 
                shadow-2xl 
                min-h-[480px] md:min-h-[620px]
              "
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold leading-[1.15] mb-10 md:mb-14 tracking-tight">
                Why People Trust youID
              </h2>

              <div className="space-y-10 md:space-y-14 text-lg">
                {userReasons.map((item, i) => (
                  <div key={i} className="choose-item">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2 tracking-tight flex items-center gap-4">
                      <span className="text-3xl sm:text-4xl font-extrabold">
                        {item.number}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-black/80 text-sm sm:text-base md:text-lg leading-relaxed font-body max-w-xl">
                      {item.description}
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

export default UserLanding;
