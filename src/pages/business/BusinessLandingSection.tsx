"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------
// BULLET DATA
// ---------------------------------
const bulletItems = [
  {
    title: "Identity theft & fraud",
    copy:
      "Criminals use stolen documents (IDs, bank details, licenses) to impersonate people and access services.",
    icon: "/mnt/data/9621d1be-04d9-4b52-a90b-593475525539.png",
  },
  {
    title: "Discrimination from exposed PII",
    copy:
      "Sensitive data falling into the wrong hands can be used to bias, categorize, or discriminate against individuals.",
    icon: "/mnt/data/9621d1be-04d9-4b52-a90b-593475525539.png",
  },
  {
    title: "Never-ending data breaches",
    copy:
      "Companies are constantly attacked, and leaked user identity data becomes permanently available online.",
    icon: "/mnt/data/9621d1be-04d9-4b52-a90b-593475525539.png",
  },
  {
    title: "Compliance pressure & rising KYC costs",
    copy:
      "Regulations demand tighter verification standards, increasing cost, workload, and legal exposure.",
    icon: "/mnt/data/9621d1be-04d9-4b52-a90b-593475525539.png",
  },
];

export default function ProblemsStickyReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const bulletsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // -------------------------------
      // SECTION PINNING
      // -------------------------------
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: true,
        markers: true, // DEBUG
      });

      // -------------------------------
      // BULLET ANIMATION
      // -------------------------------
      gsap.from(bulletsRef.current, {
        x: 120,
        opacity: 0,
        stagger: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%",
          end: "bottom bottom",
          scrub: true,
          markers: true, // DEBUG
        },
      });

      // -------------------------------
      // TITLE FADE-IN
      // -------------------------------
      gsap.from(".sticky-title", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[300vh] py-32 px-6 md:px-16 lg:px-24 bg-[#0B0F12] text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">

        {/* LEFT — STICKY TITLE */}
        <div className="sticky top-32 self-start">
          <h2 className="sticky-title text-6xl md:text-7xl font-semibold leading-tight text-[#D7FF5A]">
            The Real<br />Problems
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-sm">
            Verification today is broken — slow, costly, and insecure.
          </p>
        </div>

        {/* RIGHT — BULLET POINTS */}
        <div className="flex flex-col justify-center space-y-16 pt-10">
          {bulletItems.map((b, i) => (
            <div
              key={i}
              ref={(el) => {
                bulletsRef.current[i] = el!;
              }}
              className="flex gap-6 items-start opacity-0"
            >
              <img
                src={b.icon}
                alt={b.title}
                className="h-14 w-14 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-3xl font-semibold mb-2">▸ {b.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {b.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
