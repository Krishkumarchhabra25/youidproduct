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
      "Access your dashboard and start uploading documents."
    ]
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
      "Track upload progress in real time."
    ]
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
      "Get notified instantly when document status changes."
    ]
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
      "Stay updated and renew documents before they expire."
    ]
  }
];

const UserHowitWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const totalSteps = steps.length;

  // ⭐ Auto scroll (desktop only)
  useEffect(() => {
    if (window.innerWidth < 768) return; // mobile → no auto scroll

    const t = setTimeout(() => {
      if (activeStep < totalSteps - 1) scrollToStep(activeStep + 1);
    }, 2000);

    return () => clearTimeout(t);
  }, [activeStep]);

  // ⭐ Scroll to center (desktop only)
const scrollToStep = (i: number) => {
  if (window.innerWidth < 768) return;

  const container = containerRef.current;
  const el = stepRefs.current[i];
  if (!container || !el) return;

  const containerHeight = container.clientHeight;
  const elHeight = el.clientHeight;
  const targetScroll = el.offsetTop - (containerHeight / 2 - elHeight / 2);

  // Custom slow scrolling
  const start = container.scrollTop;
  const distance = targetScroll - start;
  const duration = 1200; // ⏳ 1.2 seconds → slow motion
  let startTime: number | null = null;

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const animate = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    container.scrollTop = start + distance * easeInOutQuad(progress);

    if (elapsed < duration) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};


  // ⭐ Scroll detection (desktop only)
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const cRect = container.getBoundingClientRect();
      const midpoint = cRect.top + cRect.height / 2;

      let nearest = 0;
      let minDist = Infinity;

      stepRefs.current.forEach((ref, idx) => {
        if (!ref) return;

        const r = ref.getBoundingClientRect();
        const elementMid = r.top + r.height / 2;
        const dist = Math.abs(midpoint - elementMid);

        if (dist < minDist) {
          nearest = idx;
          minDist = dist;
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

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-orange-50">
        <section className="relative w-full px-6 md:px-10 pt-20 pb-20">
          <div className="text-center mb-10">
            <h2 className="text-black text-3xl md:text-4xl font-bold">
              How It Works
            </h2>
            <p className="text-black/70 text-lg max-w-2xl mx-auto mt-3">
              Your complete journey through the youID app — from uploading to verified status.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

         
            {/* LEFT SIDE — MOBILE NORMAL LIST, DESKTOP SCROLL BOX */}
            <div
              ref={containerRef}
              className="
                w-full 
                bg-white rounded-2xl shadow-xl p-8 
                flex flex-col space-y-24

                md:h-[320px] md:overflow-y-auto   /* desktop only */
              "
            >
              {steps.map((step, idx) => (
                <div key={step.id} className="w-full">

                  {/* CONTENT */}
                  <div
ref={(el) => {
  stepRefs.current[idx] = el;
}}
                    className="w-full flex flex-col justify-center"
                  >
                    <div
                      className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center text-lg font-semibold ${
                        activeStep === idx && window.innerWidth >= 768
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-gray-300 text-gray-700"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-xl font-semibold text-black">{step.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{step.desc}</p>

                    <ul className="mt-4 list-disc text-gray-700 text-sm pl-5 space-y-1">
                      {step.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* MOBILE IMAGE */}
                  <div className="block md:hidden mt-4 mb-8">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto rounded-xl shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE — PHONE PREVIEW (Desktop Only) */}
            <div className="hidden md:flex justify-center">
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
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover rounded-[34px]"
                  />
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default UserHowitWorks;
