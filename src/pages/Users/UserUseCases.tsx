import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bankingImg from "../../assets/images/Image (1).jpg";
import ecommerceImg from "../../assets/images/Image (2).jpg";
import healthcareImg from "../../assets/images/Image (3).jpg";
import travelImg from "../../assets/images/Image (4).jpg";

// 🔹 same background image as other section
import heroBg from "@/assets/images/YouID 3.png";

gsap.registerPlugin(ScrollTrigger);

const UserUseCases = () => {
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const leftTextRef = useRef<HTMLElement | null>(null);
  const containerWrapperRef = useRef<HTMLDivElement | null>(null);
  const rightSectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // reset refs each render
  panelsRef.current = [];

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const initialBg = "#131019";

    if (containerRef.current) {
      gsap.set(containerRef.current, {
        background: initialBg,
      });
    }

    if (prefersReduced) {
      panelsRef.current.forEach((p) => {
        if (p) gsap.set(p, { opacity: 1, y: 0 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // BG SCROLL
      mm.add("(min-width: 0px)", () => {
        if (!containerRef.current) return;

        const endBg = "#131019";

        const tween = gsap.to(containerRef.current, {
          background: endBg,
          ease: "none",
          scrollTrigger: {
            trigger: containerWrapperRef.current || containerRef.current,
            start: "top top",
            end: "bottom center",
            scrub: 0.7,
          },
        });

        return () => {
          tween.scrollTrigger && tween.scrollTrigger.kill();
          tween.kill();
        };
      });

      // DESKTOP
      mm.add("(min-width: 1024px)", () => {
        const left = leftTextRef.current;
        const right = rightSectionRef.current;
        const panels = panelsRef.current.filter(Boolean);
        if (!left || !right || !panels.length) return;

        gsap.set(panels, { opacity: 0, y: 120 });

        const totalScrollHeight = right.scrollHeight - window.innerHeight;
        ScrollTrigger.create({
          trigger: containerWrapperRef.current,
          start: "top top",
          end: () => `+=${Math.max(totalScrollHeight, window.innerHeight)}`,
          pin: left,
          pinSpacing: true,
          anticipatePin: 1,
        });

        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 120 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 75%",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        });

        gsap.set(panels[0], { opacity: 1, y: 0 });

        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      });

      // TABLET
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const left = leftTextRef.current;
        const right = rightSectionRef.current;
        const panels = panelsRef.current.filter(Boolean);
        if (!left || !right || !panels.length) return;

        gsap.set(panels, { opacity: 0, y: 90 });

        const totalScrollHeight = right.scrollHeight - window.innerHeight;
        ScrollTrigger.create({
          trigger: containerWrapperRef.current,
          start: "top top",
          end: () =>
            `+=${Math.max(totalScrollHeight * 0.9, window.innerHeight)}`,
          pin: left,
          pinSpacing: false,
          anticipatePin: 0.5,
        });

        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 90 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 78%",
                end: "top 35%",
                scrub: true,
              },
            }
          );
        });

        gsap.set(panels[0], { opacity: 1, y: 0 });

        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      });

      // MOBILE
      mm.add("(max-width: 767px)", () => {
        const panels = panelsRef.current.filter(Boolean);

        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 40, scale: 0.995 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        if (panels[0]) gsap.set(panels[0], { opacity: 1, y: 0, scale: 1 });

        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      });

      return () => mm.revert();
    }, containerWrapperRef);

    return () => {
      try {
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {}
    };
  }, []);

  const useCases = [
    {
      badge: "IDENTITY VERIFICATION",
      title: "Verify Identity Instantly",
      points: [
        "No need to upload or share your documents.",
        "Zero document storage required",
        "Instant verification within seconds.",
        "Ideal for platforms that require identity trust.",
      ],
      image: bankingImg,
    },
    {
      badge: "AGE VERIFICATION",
      title: "Anonymous Age Verification",
      points: [
        "Perfect for adult-content platforms",
        "Anonymous verification without exposing any PID, protects privacy.",
        "Zero document uploads or verification required revealing other sources.",
        "No need to upload your face Video or Picture.",
        "Eliminates risks of identity theft or exploiting your Privacy rights.",
      ],
      image: ecommerceImg,
    },
    {
      badge: "PROOF OF ADDRESS",
      title: "Address Verification Without Documents",
      points: [
        "No need to upload Driving license, Bank Statements or Utility Bills.",
        "Instant digital address verification.",
        "Avoid giving more information than needed, e.g. financial records.",
        "Improves onboarding speed by 10×",
        "Reduces the risk significantly of data profiling you.",
      ],
      image: healthcareImg,
    },
    {
      badge: "Anonymously verify your age on ADULT SITES.",
      title: "Anonymous Age Checks for Adult Platforms",
      points: [
        "No ID upload required or sharing of other platform  information.",
        "No need to uploads your live Video or Photo.",
        "Anonymous age confirmation just with a random code",
        "Protects user privacy",
      ],
      image: travelImg,
    },
    {
      badge:
        "Verification without the need to share your documents on DATING PLATFORMS",
      title: "Safer & Verified Dating Profiles",
      points: [
        "Instant document-free verification.",
        "Reduce the risk of fake profiles & scams on Dating Sites providing youID.",
        "Higher trust and safety in Dating Sites providing youID.",
      ],
      image: bankingImg,
    },
    {
      badge: "Identitify without the need to give ownership to SOCIAL MEDIA",
      title: "Verified Social Accounts Without Uploading IDs",
      points: [
        "No document upload required.",
        "Protects privacy from platforms.",
        "Eliminates risk of data leaks.",
        "Reduce impersonation & fake accounts.",
      ],
      image: ecommerceImg,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-white overflow-x-hidden bg-[#131019]"
    >
      <Navigation />

      <div
        ref={containerWrapperRef}
        className="flex flex-col md:flex-row relative min-h-screen"
      >
        {/* LEFT STICKY TEXT HERO */}
        <section
          ref={leftTextRef}
          className="
            w-full md:w-[40%]
            h-auto md:h-screen
            md:sticky top-0 
            flex flex-col justify-center
            items-center text-center md:items-start md:text-left
            px-6 md:px-10
            pt-20 md:pt-0
            mb-10 md:mb-0
          "
        >
          <h1
            className="mx-auto md:mx-0 text-4xl sm:text-5xl md:text-5xl lg:text-[4rem]
                       font-heading font-extrabold leading-[1.0] tracking-[0.03em]
                       drop-shadow-[0_0_18px_rgba(0,0,0,0.35)] mb-2"
          >
            Your Own Document Secure Wallet
          </h1>

          <h2
            className="mx-auto md:mx-0 text-4xl sm:text-5xl md:text-5xl lg:text-[4rem]
                       font-heading font-extrabold leading-[1.0] tracking-[0.03em]
                       drop-shadow-[0_0_18px_rgba(0,0,0,0.35)]"
          >
            Use it Anywhere, Anytime
          </h2>

          <p className="mx-auto md:mx-0 text-base sm:text-lg md:text-xl text-white/80 max-w-full md:max-w-md mt-4 md:mt-8 font-body leading-snug">
            You can use it for any type of Verification on any platform.
          </p>
        </section>

        {/* RIGHT SCROLL PANELS */}
        <section
          ref={rightSectionRef}
          className="
            w-full md:w-[60%]
            space-y-20 sm:space-y-24 md:space-y-24
            py-8 sm:py-12 md:py-24
            pr-6 md:pr-20 pl-6 md:pl-14
            font-body
          "
        >
          {/* QUESTION 1: WHAT CAN YOU USE IT FOR? */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            <h3
              className="
                text-2xl sm:text-3xl md:text-4xl
                font-heading font-extrabold
                tracking-[0.08em]
                uppercase
                text-white
              "
            >
              What can you use it for?
            </h3>

            {useCases.slice(0, 3).map((useCase, idx) => {
              const globalIdx = idx; // 0,1,2

              return (
                <div
                  key={globalIdx}
                  ref={(el: HTMLDivElement | null) => {
                    panelsRef.current[globalIdx] = el;
                  }}
                  className="
                    md:min-h-screen
                    flex
                    md:items-start  
                    md:pt-10         
                  "
                >
                  <div className="w-full max-w-6xl mx-auto relative">
                    {/* MOBILE CARD + PHONE */}
                    <div className="relative w-full md:hidden pb-40 sm:pb-48">
                      <div
                        className="
                          relative
                          w-full
                          rounded-[2.5rem]
                          px-6
                          pt-8
                          pb-12
                          overflow-hidden
                          shadow-[0_30px_80px_rgba(0,0,0,0.85)]
                          bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f]
                        "
                        style={{
                          backgroundImage: `url(${heroBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        {/* lighter overlay so bg image is visible */}
                        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
                        <div className="relative z-10">
                          <h2
                            className="
                              text-lg sm:text-xl
                              font-heading font-extrabold
                              tracking-[0.25em]
                              leading-tight
                              mb-4
                            "
                          >
                            {useCase.badge}
                          </h2>

                          <ul className="space-y-3 text-sm sm:text-base text-white/90 pr-36 sm:pr-40">
                            {useCase.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="mt-[2px] text-[#FF6B35] text-lg">
                                  •
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <img
                        src={useCase.image}
                        alt={useCase.title}
                        className="
                          absolute
                          bottom-28
                          right-[-10px]
                          w-[40%]
                          max-w-[150px]
                          translate-y-1/4
                          rounded-[2rem]
                          shadow-[0_20px_50px_rgba(0,0,0,0.9)]
                        "
                      />
                    </div>

                    {/* DESKTOP/TABLET LAYOUT */}
                    <div
                      className="
                        hidden md:flex
                        relative
                        flex-col md:flex-row items-center md:items-stretch
                        gap-10 md:gap-12
                        pt-10 md:pt-0
                      "
                    >
                      <div
                        className="
                          flex-1
                          rounded-[2.5rem]
                          p-[2px] sm:p-[3px] md:p-[4px]
                          bg-gradient-to-br from-black via-[#1f0a00] to-[#FF6B35]
                          shadow-[0_30px_80px_rgba(0,0,0,0.85)]
                        "
                      >
                        <div
                          className="
                            h-full w-full
                            rounded-[2.5rem]
                            relative overflow-hidden
                            px-6 sm:px-10 md:px-14
                            py-8 sm:py-10 md:py-14
                            text-white
                            flex flex-col justify-center
                            gap-6 sm:gap-7 md:gap-8
                            bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f]
                          "
                          style={{
                            backgroundImage: `url(${heroBg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="absolute inset-0 bg-black/45 pointer-events-none" />
                          <div className="relative z-10">
                            <h2
                              className="
                                text-2xl sm:text-3xl md:text-[2.4rem] lg:text-[2.7rem]
                                font-heading font-extrabold
                                tracking-[0.25em]
                                md:tracking-[0.08em]
                                leading-tight
                                mb-6 md:mb-8
                              "
                            >
                              {useCase.badge}
                            </h2>

                            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg md:text-xl text-white/90">
                              {useCase.points.map((point, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3"
                                >
                                  <span className="mt-[3px] text-[#FF6B35] text-lg sm:text-xl">
                                    •
                                  </span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div
                        className="
                          relative
                          w-full md:w-[32%]
                          flex items-center justify-center md:justify-start
                          md:-ml-10 lg:-ml-14
                        "
                      >
                        <img
                          src={useCase.image}
                          alt={useCase.title}
                          className="
                            relative
                            w-[60%] sm:w-[70%] md:w-full
                            max-w-sm
                            rounded-[2.5rem]
                            shadow-[0_25px_60px_rgba(0,0,0,0.95)]
                            object-cover
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* QUESTION 2: WHERE CAN YOU USE IT? (remaining 3) */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            <h3
              className="
                text-2xl sm:text-3xl md:text-4xl
                font-heading font-extrabold
                tracking-[0.08em]
                uppercase
                text-white 
              "
            >
              Where can you use it?
            </h3>

            {useCases.slice(3).map((useCase, idx) => {
              const globalIdx = idx + 3; // 3,4,5

              return (
                <div
                  key={globalIdx}
                  ref={(el: HTMLDivElement | null) => {
                    panelsRef.current[globalIdx] = el;
                  }}
                  className="
                    md:min-h-screen
                    flex
                    md:items-start  
                    md:pt-10
                  "
                >
                  <div className="w-full max-w-6xl mx-auto relative">
                    {/* MOBILE CARD + PHONE */}
                    <div className="relative w-full md:hidden pb-40 sm:pb-48">
                      <div
                        className="
                          relative
                          w-full
                          rounded-[2.5rem]
                          px-6
                          pt-8
                          pb-12
                          overflow-hidden
                          shadow-[0_30px_80px_rgba(0,0,0,0.85)]
                          bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f]
                        "
                        style={{
                          backgroundImage: `url(${heroBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
                        <div className="relative z-10">
                          <h2
                            className="
                              text-lg sm:text-xl
                              font-heading font-extrabold
                              tracking-[0.25em]
                              normal-case
                              leading-tight
                              mb-4
                            "
                          >
                            {useCase.badge}
                          </h2>

                          <ul className="space-y-3 text-sm sm:text-base text-white/90 pr-36 sm:pr-40">
                            {useCase.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="mt-[2px] text-[#FF6B35] text-lg">
                                  •
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <img
                        src={useCase.image}
                        alt={useCase.title}
                        className="
                          absolute
                          bottom-28
                          right-[-10px]
                          w-[40%]
                          max-w-[150px]
                          translate-y-1/4
                          rounded-[2rem]
                          shadow-[0_20px_50px_rgba(0,0,0,0.9)]
                        "
                      />
                    </div>

                    {/* DESKTOP/TABLET LAYOUT */}
                    <div
                      className="
                        hidden md:flex
                        relative
                        flex-col md:flex-row items-center md:items-stretch
                        gap-10 md:gap-12
                        pt-10 md:pt-0
                      "
                    >
                      <div
                        className="
                          flex-1
                          rounded-[2.5rem]
                          p-[2px] sm:p-[3px] md:p-[4px]
                          bg-gradient-to-br from-black via-[#1f0a00] to-[#FF6B35]
                          shadow-[0_30px_80px_rgba(0,0,0,0.85)]
                        "
                      >
                        <div
                          className="
                            h-full w-full
                            rounded-[2.5rem]
                            relative overflow-hidden
                            px-6 sm:px-10 md:px-14
                            py-8 sm:py-10 md:py-14
                            text-white
                            flex flex-col justify-center
                            gap-6 sm:gap-7 md:gap-8
                            bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f]
                          "
                          style={{
                            backgroundImage: `url(${heroBg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="absolute inset-0 bg-black/45 pointer-events-none" />
                          <div className="relative z-10">
                            <h2
                              className="
                                text-2xl sm:text-3xl md:text-[2.1rem] lg:text-[2.2rem]
                                font-heading font-extrabold
                                tracking-[0.25em]
                                md:tracking-[0.08em]
                                leading-tight
                                mb-6 md:mb-8
                              "
                            >
                              {useCase.badge}
                            </h2>

                            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg md:text-xl text-white/90">
                              {useCase.points.map((point, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3"
                                >
                                  <span className="mt-[3px] text-[#FF6B35] text-lg sm:text-xl">
                                    •
                                  </span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div
                        className="
                          relative
                          w-full md:w-[32%]
                          flex items-center justify-center md:justify-start
                          md:-ml-10 lg:-ml-14
                        "
                      >
                        <img
                          src={useCase.image}
                          alt={useCase.title}
                          className="
                            relative
                            w-[60%] sm:w-[70%] md:w-full
                            max-w-sm
                            rounded-[2.5rem]
                            shadow-[0_25px_60px_rgba(0,0,0,0.95)]
                            object-cover
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default UserUseCases;
