// src/pages/business/BusinessHowItWorks.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";

import chooseImg from "../../assets/images/choose.png";
import selectDocumentsImg from "../../assets/images/verifyidenityprocess.png";
import processingImg from "../../assets/images/processing.png";
import resuestverification from "../../assets/images/verificationresuets (1).png";
import verificationSuccessImg2 from "../../assets/images/verificationSuccesfully.png";

type Step = {
  id: number;
  badge: string;
  title?: string;
  desc?: string;
  image: string;
  points: string[];
};

const stepsData: Step[] = [
  {
    id: 1,
    badge: "Step 1 — User starts verification with youID",
    title: "Start Verification",
    desc: "User clicks the verify button & website prepares a verification request.",
    image: chooseImg,
    points: [
      "User clicks the 'Verify with youID' button on the organization's website.",
      "A brief instruction screen appears before the verification begins.",
      "The website prepares a verification request to send to the user's youID app.",
    ],
  },
  {
    id: 2,
    badge: "Step 2 — Website sends verification request to the youID app",
    title: "Request Sent",
    desc: "Website sends a verification request (QR, deep-link, or push).",
    image: selectDocumentsImg,
    points: [
      "The organization's website sends a verification request to the user's youID app (push, QR, or deep-link).",
      "The youID app prompts the user to open or unlock their identity wallet.",
      "The request includes context such as organization name, purpose, and timestamp.",
    ],
  },
  {
    id: 3,
    badge: "Step 3 — User enters the authentication code on the website",
    title: "Authenticate",
    desc: "The user approves/enters the short auth code to link sessions.",
    image: processingImg,
    points: [
      "youID generates a short authentication code or token for the user.",
      "User enters this authentication code on the organization's website (or it is auto-verified).",
      "This securely links the youID session with the website's verification request.",
    ],
  },
  {
    id: 4,
    badge: "Step 4 — Website sends approval request back to the youID app",
    title: "Approve Request",
    desc: "User reviews the request and approves in their youID app.",
    image: resuestverification,
    points: [
      "After confirming the session, the website sends an approval request to the user's youID app.",
      "The user reviews what the organization is asking to verify.",
      "The user approves the request, and youID sends a signed, verifiable response back.",
    ],
  },
  {
    id: 5,
    badge: "Step 5 — Verification completed successfully",
    title: "Verified",
    desc: "Organization validates response and grants access.",
    image: verificationSuccessImg2,
    points: [
      "The organization validates the signed verification response from youID.",
      "Once all checks pass, the user is marked as verified and granted access.",
      "A minimal compliance log is stored while maintaining full user privacy.",
    ],
  },
];

const BusinessHowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalSteps = stepsData.length;

  // dynamic height (detect tallest step so scroll container size is stable)
  const [dynamicHeight, setDynamicHeight] = useState<number>(720);

  // compute tallest card height once after mount and whenever window resizes or images load
  const recomputeHeights = () => {
    if (!stepRefs.current.length) return;
    let max = 0;
    stepRefs.current.forEach((el) => {
      if (!el) return;
      const h = el.clientHeight;
      if (h > max) max = h;
    });
    // add some breathing room for image + spacing
    if (max > 0) setDynamicHeight(Math.max(720, max + 140));
  };

  useEffect(() => {
    recomputeHeights();

    // Recompute after a small delay in case fonts/images finished loading
    const t = window.setTimeout(recomputeHeights, 300);
    const t2 = window.setTimeout(recomputeHeights, 900);

    const onResize = () => recomputeHeights();
    window.addEventListener("resize", onResize);

    // Also observe images inside the page (if they change size)
    const imgs = Array.from(document.images);
    const onLoad = () => recomputeHeights();
    imgs.forEach((img) => img.addEventListener("load", onLoad));

    return () => {
      clearTimeout(t);
      clearTimeout(t2);
      window.removeEventListener("resize", onResize);
      imgs.forEach((img) => img.removeEventListener("load", onLoad));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-advance on desktop/tablet
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const interval = window.setInterval(() => {
      const next = (activeStep + 1) % totalSteps;
      scrollToStep(next);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep, totalSteps]);

  // scroll helper: center a step inside the scroll container
  const scrollToStep = (i: number) => {
    if (window.innerWidth < 768) return;
    const container = containerRef.current;
    const el = stepRefs.current[i];
    if (!container || !el) return;

    const containerHeight = container.clientHeight;
    const elHeight = el.clientHeight;
    const centerPos = el.offsetTop - (containerHeight / 2 - elHeight / 2);

    const start = container.scrollTop;
    const distance = centerPos - start;
    const duration = 600;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      // easeInOutQuad
      const eased =
        progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

      container.scrollTop = start + distance * eased;

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  // on scroll: set active step to nearest to center (desktop only)
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const mid = container.getBoundingClientRect().top + container.clientHeight / 2;
      let nearest = 0;
      let minDist = Infinity;

      stepRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const r = ref.getBoundingClientRect();
        const elMid = r.top + r.height / 2;
        const d = Math.abs(mid - elMid);
        if (d < minDist) {
          minDist = d;
          nearest = idx;
        }
      });

      setActiveStep(nearest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navigation />

      <div
        className="min-h-screen w-full"
        style={{
          background: "linear-gradient(180deg,#2c0d00 0%, #2a1200 30%, #000 100%)",
        }}
      >
        <section className="relative w-full px-4 sm:px-6 md:px-10 pt-20 pb-28">
          <div className="text-center mb-10">
            <h2 className="text-white text-4xl md:text-5xl font-heading">How it works</h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mt-3">
              See the flow from user identity to verified business confidence
            </p>
          </div>

          {/* DESKTOP / TABLET LAYOUT */}
          <div
            className="relative max-w-7xl mx-auto hidden md:grid gap-16 items-start"
            style={{
              gridTemplateColumns: "minmax(320px,520px) 1fr",
            }}
          >
            {/* LEFT: step cards in a centered vertical scroll container */}
            <div
              ref={containerRef}
              style={{ height: dynamicHeight }}
              className="w-full rounded-2xl p-6 md:p-8 flex flex-col gap-6 overflow-y-auto snap-y snap-mandatory pr-8 min-w-0"
            >
              {stepsData.map((step, idx) => (
                <motion.div
                  key={step.id}
                  ref={(el) => {
                    // assign to array ref — use block so function returns void (fixes TS ref type)
                    stepRefs.current[idx] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeStep === idx ? 1 : 0.45,
                    y: 0,
                    scale: activeStep === idx ? 1 : 0.995,
                  }}
                  transition={{ duration: 0.35 }}
                  className="w-full rounded-2xl p-6 md:p-8 border border-transparent min-h-[360px] flex flex-col justify-center bg-[rgba(0,0,0,0.15)]"
                  style={{
                    scrollSnapAlign: "center",
                    zIndex: activeStep === idx ? 20 : 1,
                    boxShadow: activeStep === idx ? "0 30px 60px rgba(0,0,0,0.7)" : "none",
                  }}
                >
                  {/* Header row: icon + text */}
                  <div className="flex items-start gap-4 min-w-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${
                        activeStep === idx ? "bg-orange-500 text-black" : "bg-gray-800 text-white"
                      } shrink-0`}
                    >
                      {String(idx + 1)}
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm text-orange-300 font-semibold break-words whitespace-normal">
                        {step.badge}
                      </div>
                      {step.title && (
                        <h3 className="text-white text-xl md:text-2xl font-heading mt-1 break-words whitespace-normal">
                          {step.title}
                        </h3>
                      )}
                      {step.desc && (
                        <p className="text-white/70 text-sm md:text-base mt-2 break-words whitespace-normal">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="mt-4 list-disc text-white text-sm md:text-base pl-5 space-y-2 break-words">
                    {step.points.map((p, i) => (
                      <li key={i} className="leading-relaxed break-words whitespace-normal">
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* RIGHT: sticky image that updates with active step */}
            <div className="hidden md:flex justify-center">
              <div className="sticky top-20 w-[420px] lg:w-[520px] xl:w-[620px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={stepsData[activeStep].id}
                    src={stepsData[activeStep].image}
                    alt={stepsData[activeStep].badge}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-auto max-h-[720px] rounded-3xl object-contain shadow-2xl"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT — image INSIDE the card (image top, content below) */}
          <div className="md:hidden flex flex-col space-y-6 mt-8">
            {stepsData.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center w-full"
              >
                <div
                  className="relative w-full max-w-[520px] rounded-3xl px-5 pt-5 pb-6
                    bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f]
                    shadow-[0_30px_80px_rgba(0,0,0,0.85)]
                    border border-white/5"
                >
                  <motion.img
                    src={step.image}
                    alt={step.badge}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true }}
                    className="w-full object-contain max-h-[200px] rounded-xl mb-4"
                  />

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold shrink-0 text-base">
                      {String(index + 1)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-orange-200 font-semibold break-words leading-tight">
                        {step.badge}
                      </div>
                      {step.title && (
                        <h3 className="text-white text-base font-heading break-words mt-1">{step.title}</h3>
                      )}
                    </div>
                  </div>

                  {step.desc && <p className="text-xs text-orange-200 mt-2 break-words leading-relaxed">{step.desc}</p>}

                  <ul className="mt-4 list-disc text-white text-xs pl-4 space-y-2">
                    {step.points.map((p, i) => (
                      <li key={i} className="leading-relaxed break-words">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BusinessHowItWorks;
