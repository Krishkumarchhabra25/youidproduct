import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import step1Img from "../../assets/images/signupmobile.png";
import step2Img from "../../assets/images/documentuploadmobile.png";
import step3Img from "../../assets/images/homeherohone1.png";
import step6Img from "../../assets/images/homeheromobile2.png";

import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";

type Step = {
  id: number;
  title: string;
  desc: string;
  image: string;
  points: string[];
};

const steps: Step[] = [
  {
    id: 1,
    title: "Sign Up",
    desc: "Create an account or sign in to manage your documents.",
    image: step1Img,
    points: [
      "Enter your mobile number to get started.",
      "Create a secure 5-digit security PIN for your account.",
      "Verify your login details via mobile and email OTP.",
      "Set up your basic profile details.",
      "Access your dashboard and start activation process.",
    ],
  },
  {
    id: 2,
    title: "Scan Documents",
    desc: "Choose documents to scan for verification.",
    image: step2Img,
    points: [
      "Select the Countries (Max 3)",
      "Select the type of document you want to scan to be used for Verification.",
      "Ensure the document clear and readable by the app scanner",
      "Submit the document for review.",
   //   "Track upload progress in real time.",
    ],
  },
  {
    id: 3,
    title: "Verify Documents",
    desc: "Documents are verified instantly and ready for use.",
    image: step3Img,
    points: [
      "Documents are in 'Pending' stage until verified successfully.",
     // "Admins review your submitted documents.",
      "Rejected documents show reason and require re-upload",
      "Expired documents must be updated for continued use",
      "Get notified instantly when document status changes.",
    ],
  },
  {
    id: 4,
    title: "Ready for Use",
    desc: "All required documents verified.",
    image: step6Img,
    points: [
      "All your documents have been successfully validated.",
      "Your profile is now fully verified.",
      "You can now access all features without limitations.",
      "Use your verified identity anytime..",
      "Stay updated and renew documents before they expire.",
    ],
  },
];

const UserHowitWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalSteps = steps.length;

  const [dynamicHeight, setDynamicHeight] = useState(500);

  // Detect tallest step
  useEffect(() => {
    if (!stepRefs.current.length) return;
    let max = 0;

    stepRefs.current.forEach((el) => {
      if (!el) return;
      const h = el.clientHeight;
      if (h > max) max = h;
    });

    setDynamicHeight(max + 120);
  }, []);

  // Auto-scroll (desktop / tablet only)
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const t = setTimeout(() => {
      const nextStep = (activeStep + 1) % totalSteps;
      scrollToStep(nextStep);
    }, 2000);

    return () => clearTimeout(t);
  }, [activeStep, totalSteps]);

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
    const duration = 1000;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      container.scrollTop =
        start +
        distance *
          (progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  // Scroll listener (desktop / tablet)
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const mid =
        container.getBoundingClientRect().top + container.clientHeight / 2;

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

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Navigation />

      <div className="min-h-screen w-full bg-[linear-gradient(135deg,#000000_0%,#000000_40%,#b45309_100%)]">
        <section className="relative w-full px-6 md:px-10 pt-20 pb-20">
          <div className="text-center mb-10">
            <h2 className="text-white text-5xl md:text-4xl font-heading">
              How It Works
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto mt-3">
              Registering & activating youIDsecure wallet is easy and simple
            </p>
          </div>

          {/* DESKTOP / TABLET LAYOUT (UNCHANGED) */}
          <div className="relative max-w-7xl mx-auto hidden md:grid grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE (step cards) */}
            <div
              ref={containerRef}
              style={{ height: dynamicHeight }}
              className="w-full md:w-[85%] md:mx-auto rounded-2xl p-8 flex flex-col space-y-20 overflow-y-auto md:self-center"
            >
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  className="w-full p-6 rounded-2xl border-l-4 border-orange-500 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeStep === idx ? 1 : 0.3,
                    y: 0,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ background: "rgba(30, 30, 30, 0.85)" }}
                >
                  <div
                    className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center text-lg font-semibold ${
                      activeStep === idx
                        ? "bg-orange-500 text-black"
                        : "bg-gray-800 text-white"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-semibold text-white font-heading">
                    {step.title}
                  </h3>

                  <p className="text-sm text-orange-300 mt-2 font-body">
                    {step.desc}
                  </p>

                  <ul className="mt-4 list-disc font-body text-white text-sm pl-5 space-y-1">
                    {step.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE — BIG, FULLY VISIBLE IMAGE */}
            <div className="hidden md:flex justify-center">
              <div className="sticky top-24 w-[300px] lg:w-[300px] xl:w-[300px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={steps[activeStep].id}
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-auto rounded-3xl object-contain shadow-2xl"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

{/* MOBILE VERSION – SAME STRUCTURE AS USE CASES */}
<div className="md:hidden flex flex-col space-y-16 mt-10">
  {steps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* CARD */}
      <div
        className="
          relative
          w-[92%]
          max-w-[380px]
          rounded-[2.5rem]
          px-6
          pt-8
          pb-10
          bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f]
          shadow-[0_30px_80px_rgba(0,0,0,0.85)]
          border border-white/5
        "
      >
        {/* step number circle */}
        <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 text-black flex items-center justify-center text-lg font-bold">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* title */}
        <h3 className="text-xl font-semibold text-white font-heading">
          {step.title}
        </h3>

        {/* ✅ subheading / description */}
        <p className="text-sm text-orange-200 mt-2 font-body pr-24 sm:pr-28">
          {step.desc}
        </p>

        {/* bullets – keep extra right padding so they don’t go under phone */}
        <ul className="mt-4 list-disc text-white text-sm pl-5 pr-24 sm:pr-28 space-y-1 leading-relaxed font-body">
          {step.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* PHONE IMAGE */}
  <motion.img
  src={step.image}
  alt={step.title}
  className="
    absolute
    -bottom-2
    -right-4
    w-[40%]            /* smaller */
    max-w-[140px]      /* smaller max size */
    object-contain
    drop-shadow-xl
    pointer-events-none
  "

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>
  ))}
</div>




        </section>

        <Footer />
      </div>
    </div>
  );
};

export default UserHowitWorks;
