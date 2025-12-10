// src/pages/business/BusinessHowItWorks.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";

import chooseImg from "../../assets/images/laptop1.png";
import selectDocumentsImg from "../../assets/images/laptop6.png";
import processingImg from "../../assets/images/laptop2.png";
import requestVerificationImg from "../../assets/images/notificationrequestuser.png";
import verificationSuccessImg2 from "../../assets/images/laptop5.png";

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
    badge: "Step 1 — Customer starts verification from your site",
    title: "Initiate Verification",
    desc: "Customer clicks 'Verify with youID' and your site creates a verification request.",
    image: chooseImg,
    points: [
      "Click a 'Verify with youID' button on your checkout / onboarding flow.",
      "A short context (purpose + org name) is attached to the request for transparency.",
      "Request is delivered to the user via QR, deep-link or push depending on device.",
    ],
  },
  {
    id: 2,
    badge: "Step 2 — Request delivered to end-user identity wallet",
    title: "Request Sent",
    desc: "Your site sends a signed verification request containing the scope of data required.",
    image: selectDocumentsImg,
    points: [
      "The request communicates which attributes or documents you need (KYC, age, entitlement).",
      "youID displays the request details so the user can make an informed decision.",
      "The request contains a timestamp and request nonce to protect against replay attacks.",
    ],
  },
  {
    id: 3,
    badge: "Step 3 — User authenticates & confirms on their device",
    title: "Authenticate & Approve",
    desc: "User authenticates in youID and approves sending the requested attestations.",
    image: processingImg,
    points: [
      "youID prompts the user to authenticate (PIN/biometrics) before sharing data.",
      "User confirms exactly which claims are shared — minimal disclosure by default.",
      "A short auth code or session token links the browser session to the wallet for secure exchange.",
    ],
  },
  {
    id: 4,
    badge: "Step 4 — Signed response returned to your backend",
    title: "Receive Signed Response",
    desc: "youID returns a cryptographically signed verifiable response you can validate.",
    image: requestVerificationImg,
    points: [
      "Your backend verifies cryptographic signature and payload integrity.",
      "Verification response contains the minimal asserted claims required to grant access.",
      "The response can be checked against your business rules (age checks, entitlement, etc.).",
    ],
  },
  {
    id: 5,
    badge: "Step 5 — Access granted, logs & compliance recorded",
    title: "Verified & Logged",
    desc: "After validation, the user receives access and a minimal compliance record is stored.",
    image: verificationSuccessImg2,
    points: [
      "Once validated, grant access or complete the transaction flow.",
      "Store a minimal audit record (hash + timestamp) preserving user privacy.",
      "Provide a refresh/renew path for expiring attestations and maintain compliance readiness.",
    ],
  },
];

const BusinessHowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalSteps = stepsData.length;

  // dynamic height (detect tallest step so scroll container size is stable)
  const [dynamicHeight, setDynamicHeight] = useState<number>(600);

  // compute tallest card height once after mount and whenever window resizes or images load
  const recomputeHeights = () => {
    if (!stepRefs.current.length) return;
    let max = 0;
    stepRefs.current.forEach((el) => {
      if (!el) return;
      const h = el.clientHeight;
      if (h > max) max = h;
    });
    // add breathing room for image + spacing
    if (max > 0) setDynamicHeight(Math.max(600, max + 120));
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

  // Auto-advance on desktop/tablet (desktop threshold matches user layout: >= 768)
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

  // on scroll: set active step to nearest to center (desktop/tablet only)
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

  const activeImage = stepsData[activeStep]?.image;
  const isRequestVerification = activeImage === requestVerificationImg;

  return (
    <>
      <Navigation />

  <div
  className="min-h-screen w-full bg-[#131019] text-white"
>

        <section className="relative w-full px-6 md:px-10 pt-20 pb-28">
          <div className="text-center mb-10">
            <h2 className="text-white text-4xl md:text-5xl font-heading">How it works</h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mt-3">
              From user identity to business verification — secure, private, auditable.
            </p>
          </div>

          {/* DESKTOP / TABLET LAYOUT (matches user component breakpoints) */}
          <div
            className="relative max-w-7xl mx-auto hidden md:grid grid-cols-2 gap-16 items-center"
          >
            {/* LEFT: step cards in a centered vertical scroll container */}
            <div
              ref={containerRef}
              style={{ height: dynamicHeight }}
              className="w-full md:w-[85%] md:mx-auto rounded-2xl p-8 flex flex-col space-y-8 overflow-y-auto"
            >
              {stepsData.map((step, idx) => (
                <motion.div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeStep === idx ? 1 : 0.45,
                    y: 0,
                    scale: activeStep === idx ? 1 : 0.995,
                  }}
                  transition={{ duration: 0.35 }}
                  className="w-full p-6 rounded-2xl border-l-4 border-orange-500"
                  style={{ background: "rgba(20,20,20,0.7)" }}
                >
                  <div
                    className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center text-lg font-semibold ${
                      activeStep === idx ? "bg-orange-500 text-black" : "bg-gray-800 text-white"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <div className="text-sm text-orange-300 mb-1">{step.badge}</div>

                  {step.title && (
                    <h3 className="text-xl font-semibold text-white font-heading">{step.title}</h3>
                  )}

                  {step.desc && <p className="text-sm text-white/70 mt-2">{step.desc}</p>}

                  <ul className="mt-4 list-disc text-white text-sm pl-5 space-y-1">
                    {step.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* RIGHT: sticky image that updates with active step */}
            <div className="hidden md:flex justify-center">
              {/* <-- INCREASED WIDTHS HERE TO ALLOW LARGER LAPTOP IMAGE --> */}
              <div className="sticky top-24 w-[420px] lg:w-[520px] xl:w-[620px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={stepsData[activeStep].id}
                    src={stepsData[activeStep].image}
                    alt={stepsData[activeStep].badge}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full h-auto rounded-3xl object-contain shadow-2xl transform-gpu ${
                      isRequestVerification
                        ? "max-h-[600px] scale-[1.20]"
                        : "max-h-[900px] scale-[1.15]"
                    }`}
                    style={{ transformOrigin: "center right" }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT — image INSIDE the card (image top, content below) */}
          <div className="xl:hidden flex flex-col items-center space-y-8 mt-8 w-full px-4">
            {stepsData.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-md"
              >
                <div
                  className="relative w-full rounded-lg overflow-hidden
                    bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#3d1800]
                    shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                    border border-orange-500/20"
                >
                  {/* Image section — smaller on mobile */}
                  <div className="relative w-full p-0">
                    <div
                      className="
                        relative w-full
                        h-[180px]
                        sm:h-[200px]
                        md:h-[220px]
                        overflow-hidden
                        rounded-md
                      "
                    >
                      <motion.img
                        src={step.image}
                        alt={step.badge}
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                        className="
                          absolute inset-0
                          w-full h-full
                          object-contain
                          rounded-md
                        "
                        style={{ objectPosition: "center center" }}
                      />
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="px-5 pb-6 pt-2">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold shrink-0 text-lg shadow-lg">
                        {String(index + 1)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] text-orange-300 font-semibold leading-tight mb-1 break-words">
                          {step.badge}
                        </div>
                        {step.title && (
                          <h3 className="text-white text-lg font-heading font-semibold break-words">
                            {step.title}
                          </h3>
                        )}
                      </div>
                    </div>

                    {step.desc && (
                      <p className="text-orange-100/80 text-sm mb-4 leading-relaxed break-words">
                        {step.desc}
                      </p>
                    )}

                    <ul className="space-y-2.5 text-white/90 text-[13px] leading-relaxed">
                      {step.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1 shrink-0">•</span>
                          <span className="break-words flex-1">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
