// UserLanding.tsx
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { SiAndroid, SiApple } from "react-icons/si"; // npm i react-icons if you don't have it

gsap.registerPlugin(ScrollTrigger);

const userProblems = [
  {
    title: "Risk of Data Breaches and Identity Theft",
    description:
      "Businesses have suffered major data breaches. Sharing your Identity documents online feels risky because one leak can expose everything about you.",
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
      "Your documents are stored on your phone, not on someone else’s server not even ours. You approve every verification just like your banking apps.",
  },
  {
    number: "02",
    title: "Companies Don’t See Your ID",
    description:
      "Businesses verify what they need to know, without ever seeing or storing your actual documents.",
  },
  {
    number: "03",
    title: "Private and Secure by Design",
    description:
      "Zero-knowledge architecture and strong encryption keep your identity secure and private.",
  },
  {
    number: "04",
    title: "One Time, Use Anywhere",
    description:
      "Verify once, reuse securely across apps and platforms without uploading or sharing documents again and again.",
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
      const heroBtns = hero.querySelectorAll(".hero-btn");
        const heroNote = hero.querySelector(".hero-note"); 

   const elements = [
        heroTitle,
        heroDesc,
        ...Array.from(heroBtns),
      ].filter(Boolean) as Element[];

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

          if (heroNote) {
    gsap.fromTo(
      heroNote,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.9,
      }
    );
  }

 if (heroBtns.length) {
        gsap.fromTo(
          heroBtns,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.8,
            stagger: 0.1, // nice little offset between Android & iOS
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
          

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* <Badge
                variant="secondary"
                className="mb-4 font-body tracking-wide"
              >
                For Individuals & Everyday Users
              </Badge> */}

              <h1 className="hero-title text-4xl md:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
                Verify Your Identity Once.
                <br />
                Use It Anywhere, Anytime.
              </h1>

              <p className="hero-desc text-base md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body">
               Easily and securely verify your documents using the youID digital wallet on your smartphone. Approve requests without sharing your documents with any business  not even us. The approval process works just like your banking apps.
              </p>
<div className="mt-6 flex flex-col items-center justify-center gap-4 md:gap-6">
  <p className="hero-note text-white/80 text-sm md:text-base font-body whitespace-nowrap">
    Download and use it – it’s free!
  </p>

  <div className="flex flex-col items-center gap-4">
    <Button
      size="lg"
      variant="secondary"
      className="
        hero-btn
        min-w-[180px]
        text-lg px-10 py-6 font-semibold font-body
        flex items-center gap-3 justify-center
        bg-gradient-to-r from-black via-black to-[#FF6B35]
        text-white border border-white/10
        hover:from-black hover:via-[#1a1a1a] hover:to-[#ff824f]
        shadow-lg shadow-black/40
      "
    >
      <SiAndroid className="w-5 h-5" />
      Android
    </Button>

    <Button
      size="lg"
      variant="secondary"
      className="
        hero-btn
        min-w-[180px]
        text-lg px-10 py-6 font-semibold font-body
        flex items-center gap-3 justify-center
        bg-gradient-to-r from-[#FF6B35] via-black to-black
        text-white border border-white/10
        hover:from-[#ff824f] hover:via-[#1a1a1a] hover:to-black
        shadow-lg shadow-black/40
      "
    >
      <SiApple className="w-5 h-5" />
      IOS
    </Button>
  </div>
</div>




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
                Why Users
                <br /> worry about {" "}
                <span className="text-[#FF6B35]">
                  Sharing their documents Online
                </span>
              </h2>

              <p className="mt-6 text-base md:text-xl text-gray-400 max-w-sm leading-relaxed font-body">
               Current verification process asks you to hand over too much sensitive information and trust that nothing bad happens with your data but it does
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
    rounded-3xl 
    p-[2px] sm:p-[3px] md:p-[4px]
    bg-gradient-to-br from-black via-[#1f0a00] to-[#FF6B35]
    shadow-2xl
    min-h-[480px] md:min-h-[620px]
  "
>
  <div
    className="
      h-full w-full
      rounded-3xl
      bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f]
      px-6 sm:px-8 md:px-16
      py-6 sm:py-8 md:py-16
      text-white
    "
  >
    <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold leading-[1.15] mb-10 md:mb-14 tracking-tight">
      Why can Users trust youID?
    </h2>

    <div className="space-y-10 md:space-y-14 text-lg">
      {userReasons.map((item, i) => (
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



          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UserLanding;
