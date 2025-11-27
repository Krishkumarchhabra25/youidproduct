import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import adultImg from "../../assets/images/Image (1).jpg";
import datingImg from "../../assets/images/Image (2).jpg";
import socialImg from "../../assets/images/Image (3).jpg";

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
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

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
      mm.add("(min-width: 0px)", () => {
        const endBg =
          "radial-gradient(circle at top left, #ff6a00 0%, #e05f00 20%, #2a1200 55%, #050100 100%)";

        if (!containerRef.current) return;

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

  // 🔁 simplified: one sentence instead of bullet points
 const useCases = [
    {
      badge: "Anonymous Age Verification ADULT SITES",
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
      badge: "Proof of Identity Without Uploads DATING PLATFORMS",
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
      badge: "Frictionless Profile Verification SOCIAL MEDIA",
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
            className="mx-auto md:mx-0 text-4xl sm:text-5xl md:text-5xl lg:text-[4rem]
                       font-heading font-extrabold leading-[1.0] tracking-[0.03em]
                       drop-shadow-[0_0_18px_rgba(0,0,0,0.35)] mb-2"
          >
            One Identity
          </h1>

          <h2
            className="mx-auto md:mx-0 text-4xl sm:text-5xl md:text-5xl lg:text-[4rem]
                       font-heading font-extrabold leading-[1.0] tracking-[0.03em]
                       drop-shadow-[0_0_18px_rgba(0,0,0,0.35)]"
          >
            For Every Situation
          </h2>

          <p className="mx-auto md:mx-0 text-base sm:text-lg md:text-xl text-white/80 max-w-full md:max-w-md mt-4 md:mt-8 font-body leading-snug">
            Identity, Age & Address Verification built for modern platforms.
          </p>
        </section>

        {/* RIGHT SCROLL PANELS */}
       <section
  ref={rightSectionRef}
  className="w-full md:w-[60%] space-y-10 sm:space-y-16 md:space-y-24 py-8 sm:py-12 md:py-24 pr-6 md:pr-20 pl-6 md:pl-14 font-body"
>
  {useCases.map((useCase, idx) => (
    <div
      key={idx}
      ref={(el: HTMLDivElement | null) => {
        panelsRef.current[idx] = el;
      }}
      className="min-h-[70vh] md:min-h-screen flex items-center"
    >
      <div
        className="
          w-full max-w-5xl mx-auto
          relative
          flex flex-col md:flex-row items-center md:items-stretch gap-8
          pt-14 md:pt-16
        "
      >
        {/* CONTENT CARD */}
        <div
          className="
            flex-1
            rounded-3xl 
            p-[2px] sm:p-[3px] md:p-[4px]
            bg-gradient-to-br from-black via-[#1f0a00] to-[#FF6B35]
            shadow-2xl
          "
        >
          <div
            className="
              h-full w-full
              rounded-3xl
              bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f]
              px-6 sm:px-8 md:px-12
              py-8 sm:py-10 md:py-14
              text-white
              flex flex-col gap-6
            "
          >
            {/* BADGE AS SIMPLE HEADING */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-wide">
              {useCase.badge}
            </h2>

            {/* POINTS LIST */}
            <ul className="space-y-3 text-white/85 text-sm sm:text-base md:text-[17px]">
              {useCase.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#FF6B35] text-lg">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MOBILE SCREEN IMAGE */}
        <div className="relative w-full md:w-[32%] flex items-center justify-center md:justify-start md:-ml-12">
          <img
            src={useCase.image}
            alt={useCase.badge}
            className="
              relative
              w-[60%] sm:w-[70%] md:w-full 
              max-w-xs
              rounded-[2rem]
              shadow-[0_25px_60px_rgba(0,0,0,0.95)]
              object-cover
            "
          />
        </div>
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
