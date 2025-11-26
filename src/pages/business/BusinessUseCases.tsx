// BusinessUseCases.tsx
import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import adultImg from "../../assets/images/banking.png";
import datingImg from "../../assets/images/ecommerce.png";
import socialImg from "../../assets/images/healthcare.jpg";

gsap.registerPlugin(ScrollTrigger);

const BusinessUseCases = () => {
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const leftTextRef = useRef<HTMLElement | null>(null);
  const containerWrapperRef = useRef<HTMLDivElement | null>(null);
  const rightSectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // reset refs each render
  panelsRef.current = [];

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ORIGINAL darker gradient (like your earlier screenshot)
    const initialBg =
      "radial-gradient(circle at top left, #ff6a00 0%, #1a0a00 25%, #000000 70%, #000000 100%)";

    if (containerRef.current) {
      gsap.set(containerRef.current, {
        background: initialBg,
        backgroundSize: "cover",
        backgroundPosition: "top left",
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

      // --------- BACKGROUND GRADIENT SCROLL EFFECT ----------
   // --------- BACKGROUND GRADIENT SCROLL EFFECT ----------
mm.add("(min-width: 0px)", () => {
  // keep strong orange even when scrolled down
  const endBg =
    "radial-gradient(circle at top left, #ff6a00 0%, #e05f00 20%, #2a1200 55%, #050100 100%)";

  if (!containerRef.current) return;

  const tween = gsap.to(containerRef.current, {
    background: endBg,
    ease: "none",
    scrollTrigger: {
      trigger: containerWrapperRef.current || containerRef.current,
      start: "top top",
      // don't fully reach endBg until slightly before the very bottom
      end: "bottom center",
      scrub: 0.7,
    },
  });

  return () => {
    tween.scrollTrigger && tween.scrollTrigger.kill();
    tween.kill();
  };
});


      // ------------------ DESKTOP / LAPTOP ------------------
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

      // ------------------ TABLET ------------------
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
          end: () => `+=${Math.max(totalScrollHeight * 0.9, window.innerHeight)}`,
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

      // ------------------ MOBILE ------------------
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
      badge: "ADULT SITES",
      title: "Anonymous Age Verification",
      points: [
        "Zero document uploads required",
        "Anonymous age confirmation",
        "Prevents minors from accessing adult content",
        "Fully privacy-first & compliant",
      ],
      image: adultImg,
    },
    {
      badge: "DATING PLATFORMS",
      title: "Proof of Identity Without Uploads",
      points: [
        "Instant identity verification",
        "No driving license required",
        "Reduce fake profiles",
        "Boost trust & user safety",
      ],
      image: datingImg,
    },
    {
      badge: "SOCIAL MEDIA",
      title: "Frictionless Profile Verification",
      points: [
        "Verify without storing documents",
        "Stop impersonation",
        "Improve platform trust",
        "Works globally",
      ],
      image: socialImg,
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen text-white overflow-hidden">
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
            pt-24 md:pt-0
            mb-10 md:mb-0
          "
        >
          <h1
            className="mx-auto md:mx-0 text-4xl sm:text-5xl md:text-6xl lg:text-[6rem]
                       font-heading font-extrabold leading-[1.0] tracking-[0.03em]
                       drop-shadow-[0_0_18px_rgba(0,0,0,0.35)] mb-2"
            style={{ fontFamily: "Arimo-Bold" }}
          >
            One Identity
          </h1>

          <h2
            className="mx-auto md:mx-0 text-4xl sm:text-5xl md:text-6xl lg:text-[6rem]
                       font-heading font-extrabold leading-[1.0] tracking-[0.03em]
                       drop-shadow-[0_0_18px_rgba(0,0,0,0.35)]"
            style={{ fontFamily: "Arimo-Bold" }}
          >
            For Every Situation
          </h2>

          <p className="mx-auto md:mx-0 text-base sm:text-lg md:text-2xl text-white/80 max-w-full md:max-w-md mt-4 md:mt-8 font-body leading-snug">
            Identity, Age & Address Verification built for modern platforms.
          </p>
        </section>

        {/* RIGHT SCROLL PANELS */}
        <section
          ref={rightSectionRef}
          className="w-full md:w-[60%] space-y-6 sm:space-y-12 md:space-y-32 py-8 sm:py-12 md:py-24 pr-6 md:pr-20 pl-6 md:pl-14 font-body"
        >
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              ref={(el: HTMLDivElement | null) => {
                panelsRef.current[idx] = el;
              }}
              className="min-h-[70vh] md:min-h-screen md:grid md:grid-cols-2 gap-6 md:gap-10 items-center flex flex-col md:flex-row"
            >
              {/* TEXT SIDE */}
              <div className="space-y-6 md:space-y-8 max-w-full md:max-w-xl font-body text-center md:text-left">
                <div
                  className="inline-block px-4 py-2 text-sm sm:text-base md:text-lg w-fit mx-auto md:mx-0
                             bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl
                             shadow-[0_0_25px_rgba(255,255,255,0.06)] tracking-wide"
                >
                  {useCase.badge}
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading tracking-wide leading-[1.12]">
                  {useCase.title}
                </h2>

                <ul className="space-y-2 md:space-y-4 text-sm sm:text-base md:text-[20px] text-white/85 font-body leading-relaxed">
                  {useCase.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-3 md:gap-4 items-start justify-center md:justify-start"
                    >
                      <span className="text-orange-400 text-xl md:text-2xl leading-none mt-1">
                        ✔
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE SIDE */}
              <div className="flex justify-center mt-6 md:mt-0">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full md:w-[85%] max-w-xl rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessUseCases;
