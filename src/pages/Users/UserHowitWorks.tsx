import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

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
      "You can now access all youID features without limitations.",
      "Easily share your verified identity anytime.",
      "Stay updated and renew documents before they expire.",
    ],
  },
];

const UserHowitWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([0]);
  const [activeStep, setActiveStep] = useState(0);

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isAutoPlaying = useRef(true);

  const totalSteps = steps.length;

  const scrollToStep = (i: number) => {
    isAutoPlaying.current = false;
    const container = containerRef.current;
    const target = stepRefs.current[i];

    if (container && target) {
      container.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  const handleNextStep = () => {
    if (activeStep < totalSteps - 1) scrollToStep(activeStep + 1);
  };

  useEffect(() => {
    if (visibleSteps.length >= steps.length) return;

    const timer = setTimeout(() => {
      setVisibleSteps((prev) => [...prev, prev.length]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [visibleSteps]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      isAutoPlaying.current = false;

      const containerTop = container.getBoundingClientRect().top;

      let nearest = 0;
      let minDist = Infinity;

      stepRefs.current.forEach((ref, idx) => {
        if (ref && visibleSteps.includes(idx)) {
          const rect = ref.getBoundingClientRect();
          const dist = Math.abs(rect.top - containerTop);

          if (dist < minDist) {
            nearest = idx;
            minDist = dist;
          }
        }
      });

      setActiveStep(nearest);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [visibleSteps]);

  return (
    <div>
      <Navigation />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-orange-50">
        <section className="relative w-full px-6 md:px-10 pt-20 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-black text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="text-black/70 text-lg max-w-2xl mx-auto mt-3">
              Your complete journey through the youID app — from document upload to verified status.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Scroll Button */}
            <button
              onClick={handleNextStep}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30 bg-white p-3 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all animate-bounce"
            >
              <ArrowDown className="w-7 h-7" />
            </button>

            {/* LEFT SIDE CONTENT */}
            <div
              ref={containerRef}
              className="flex flex-col space-y-12 items-center md:items-start pb-40 pr-0 md:pr-6 
                       md:max-h-[80vh] md:overflow-y-auto scrollbar-hide"
            >
              <AnimatePresence>
                {steps.map((step, idx) =>
                  visibleSteps.includes(idx) ? (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}

                      // FIXED: TS ref return type
                      ref={(el) => {
                        stepRefs.current[idx] = el;
                      }}

                      className={`w-full p-6 rounded-2xl transition-all duration-300 ${
                        activeStep === idx
                          ? "bg-white shadow-xl scale-[1.02]"
                          : "bg-white/70"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`hidden md:flex w-12 h-12 rounded-full items-center justify-center text-lg font-semibold ${
                            activeStep === idx
                              ? "bg-blue-600 text-white"
                              : "bg-white border border-gray-300 text-gray-700"
                          }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black">{step.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{step.desc}</p>

                          <ul className="mt-3 list-disc text-gray-700 text-sm pl-5 space-y-1">
                            {step.points.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>

                          {/* MOBILE IMAGE */}
                          <div className="block md:hidden mt-4">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-auto rounded-xl"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE PHONE MOCKUP */}
            <div className="hidden md:flex justify-center">
              <div className="sticky top-24 w-[280px] h-[550px] rounded-[40px] border-[6px] border-gray-300 shadow-2xl overflow-hidden bg-black relative">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/40 rounded-full" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={steps[activeStep].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full"
                  >
                    <img
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      className="w-full h-full object-cover rounded-[34px]"
                    />
                  </motion.div>
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
