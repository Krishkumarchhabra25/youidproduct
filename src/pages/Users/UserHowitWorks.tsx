import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import step1Img from "../../assets/images/Image (1).jpg";
import step2Img from "../../assets/images/documentunder.png";
import step3Img from "../../assets/images/Image (3).jpg";
import step6Img from "../../assets/images/verifieddocumetsss.png";

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
    title: "Sign Up / Sign In",
    desc: "Create an account or sign in to manage your documents.",
    image: step1Img,
    points: [
      "Enter your mobile number or email to get started.",
      "Create a secure password for your account.",
      "Verify your identity using OTP.",
      "Set up your basic profile details.",
      "Access your dashboard and start uploading documents.",
    ],
  },
  {
    id: 2,
    title: "Upload Documents",
    desc: "Choose documents to upload for verification.",
    image: step3Img,
    points: [
      "Select the type of document you want to upload.",
      "Use camera or gallery to upload images or PDF.",
      "Ensure the document photo is clear and readable.",
      "Submit the document for admin review.",
      "Track upload progress in real time.",
    ],
  },
  {
    id: 3,
    title: "Verify Documents",
    desc: "See pending, verified, rejected, or expired documents.",
    image: step2Img,
    points: [
      "Documents enter the 'Pending' stage after upload.",
      "Admins review your submitted documents.",
      "Rejected documents show reason and require re-upload.",
      "Expired documents must be updated for continued use.",
      "Get notified instantly when document status changes.",
    ],
  },
  {
    id: 4,
    title: "Ready for Verification",
    desc: "All required documents verified.",
    image: step6Img,
    points: [
      "All your documents have been successfully validated.",
      "Your profile is now fully verified.",
      "You can now access all features without limitations.",
      "Share your verified identity anytime.",
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

  // Auto-scroll
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const t = setTimeout(() => {
      const nextStep = (activeStep + 1) % totalSteps;
      scrollToStep(nextStep);
    }, 2000);

    return () => clearTimeout(t);
  }, [activeStep]);

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

  // Scroll listener
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const mid =
        container.getBoundingClientRect().top +
        container.clientHeight / 2;

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
              Your complete journey through the youID app — from uploading to verified status.
            </p>
          </div>

          {/* DESKTOP LAYOUT */}
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

                  <ul className="mt-4 list-disc text-white text-sm pl-5 space-y-1">
                    {step.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* RIGHT PHONE FRAME — FORCE HIDDEN ON MOBILE */}
            <div
              className="hidden md:flex justify-center"
              style={{
                display: window.innerWidth < 768 ? "none" : "flex",
              }}
            >
              <div className="sticky top-24 w-[280px] h-[560px] rounded-[40px] border-[6px] border-gray-300 shadow-2xl overflow-hidden bg-black relative">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/40 rounded-full" />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={steps[activeStep].id}
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover rounded-[34px]"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* MOBILE VERSION */}
          <div className="md:hidden flex flex-col space-y-16 mt-10 px-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="bg-black/40 p-5 rounded-2xl border border-white/10 shadow-lg w-full overflow-hidden"
              >
                {/* Step number */}
                <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 text-black flex items-center justify-center text-lg font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-sm text-orange-300 mt-2">{step.desc}</p>

                <ul className="mt-4 list-disc text-white text-sm pl-5 space-y-1">
                  {step.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                {/* Full Image on Mobile */}
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-xl mt-6"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
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