import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

import step1Img from "../../assets/images/Image (1).jpg";
import step2Img from "../../assets/images/Image (2).jpg";
import step3Img from "../../assets/images/Image (3).jpg";
import step6Img from "../../assets/images/Image (6).jpg";

type Step = { id: number; title: string; desc: string; image: string };
type DocStatus = "verified" | "pending" | "rejected" | "expired";

type DocumentItem = {
  id: string;
  name: string;
  status: DocStatus;
  uploadedAt: string;
  history: { at: string; action: string }[];
};

const steps: Step[] = [
  { id: 2, title: "Sign Up / Sign In", desc: "Create an account or sign in to manage your documents.", image: step1Img },
  { id: 1, title: "Upload Documents", desc: "Choose documents to upload for verification.", image: step3Img },
  {
    id: 3,
    title: "Verify Documents",
    desc: "See which documents are pending, verified, rejected or expired. Upload replacements or view details.",
    image: step2Img,
  },
  { id: 4, title: "Ready for Verification", desc: "All required documents verified", image: step6Img },
];

const formatNow = () => new Date().toLocaleString();

const UserHowitWorks: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [documents, setDocuments] = useState<DocumentItem[]>([
    { id: "doc-1", name: "ID Card.pdf", status: "verified", uploadedAt: formatNow(), history: [{ at: formatNow(), action: "Uploaded" }] },
    { id: "doc-2", name: "Address Proof.jpg", status: "pending", uploadedAt: formatNow(), history: [{ at: formatNow(), action: "Uploaded" }] },
    { id: "doc-3", name: "Passport.png", status: "rejected", uploadedAt: formatNow(), history: [{ at: formatNow(), action: "Uploaded" }, { at: formatNow(), action: "Rejected - blur detected" }] },
  ]);

  const replacementInputRef = useRef<HTMLInputElement | null>(null);
  const replacementTargetRef = useRef<string | null>(null);

  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, steps.length);
  }, []);

  useEffect(() => setActive(0), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const calcMostVisible = () => {
      const containerRect = container.getBoundingClientRect();
      let bestIndex = 0;
      let bestRatio = 0;

      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = Math.max(rect.top, containerRect.top);
        const bottom = Math.min(rect.bottom, containerRect.bottom);
        const visible = Math.max(0, bottom - top);
        const ratio = rect.height > 0 ? visible / rect.height : 0;

        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = idx;
        }
      });

      if (bestRatio > 0.05 && bestIndex !== active) {
        setActive(bestIndex);
      }
    };

    calcMostVisible();
    container.addEventListener("scroll", calcMostVisible, { passive: true });
    window.addEventListener("resize", calcMostVisible);

    return () => {
      container.removeEventListener("scroll", calcMostVisible);
      window.removeEventListener("resize", calcMostVisible);
    };
  }, [active]);

  const safeActive = Math.max(0, Math.min(active, steps.length - 1));

  const onWheel = (e: React.WheelEvent) => {
    const el = containerRef.current;
    if (!el) return;

    const delta = e.deltaY;
    const atTop = el.scrollTop === 0;
    const atBottom = Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) < 1;

    if (!((delta < 0 && atTop) || (delta > 0 && atBottom))) {
      e.stopPropagation();
    }
  };

  const scrollToStep = (index: number) => {
    const el = stepRefs.current[index];
    const container = containerRef.current;
    if (!el || !container) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const openReplacementUpload = (targetId: string) => {
    replacementTargetRef.current = targetId;
    replacementInputRef.current?.click();
  };

  const handleReplacementFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const targetId = replacementTargetRef.current;
    if (!file || !targetId) return;

    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === targetId
          ? {
              ...doc,
              name: file.name,
              status: "pending",
              uploadedAt: formatNow(),
              history: [...doc.history, { at: formatNow(), action: "Replacement uploaded" }],
            }
          : doc
      )
    );

    replacementTargetRef.current = null;
    if (replacementInputRef.current) replacementInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen w-full bg-[linear-gradient(to_bottom_right,#eee6ff,#ffffff,#ffe9d6)]">
      <Navigation />

      <section className="relative w-full px-6 md:px-10 pt-20 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-black text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto mt-3">
            Your complete journey through the youID app — from document upload to verified status.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <div
            ref={containerRef}
            onWheel={onWheel}
            className="flex flex-col space-y-10 items-center md:items-start pb-10 pr-0 md:pr-6 md:max-h-[80vh] md:overflow-y-auto no-scrollbar"
          >
            {steps.map((step, idx) => (
              <div key={step.id}>

                <div
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    safeActive === idx ? "bg-white shadow-xl" : "bg-white/70"
                  }`}
                >
                  <div className="flex items-start gap-4">

                    <button
                      type="button"
                      onClick={() => scrollToStep(idx)}
                      className={`hidden md:flex w-12 h-12 rounded-full items-center justify-center text-lg font-semibold ${
                        safeActive === idx ? "bg-blue-600 text-white" : "bg-white border border-gray-300 text-gray-700"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </button>

                    <div className="flex-1">
                      <div className="md:hidden mb-2 text-center">
                        <div className="text-sm font-semibold text-gray-900">{step.title}</div>
                        <div className="text-xs text-gray-600">{step.desc}</div>
                      </div>

                      <h3 className="hidden md:block text-xl font-semibold text-black">{step.title}</h3>
                      <p className="hidden md:block text-sm text-gray-600 mt-1">{step.desc}</p>

                      {step.id === 3 && (
                        <div className="mt-4 space-y-4">
                          {documents.map((doc) => (
                            <div key={doc.id} className="p-3 bg-gray-50 border rounded-lg flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium">{doc.name}</div>
                                <div className="text-xs text-gray-500">
                                  {doc.status} • {doc.uploadedAt}
                                </div>
                              </div>
                              <button
                                onClick={() => openReplacementUpload(doc.id)}
                                className="px-3 py-1.5 rounded-md border text-sm"
                              >
                                Upload replacement
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.id === 4 && (
                        <div className="mt-4">
                          <button className="px-4 py-2 rounded-md bg-green-600 text-white text-sm">
                            Verification done
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* MOBILE IMAGE */}
                <div className="md:hidden mt-4 w-full flex justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full rounded-xl object-cover"
                  />
                </div>

              </div>
            ))}

            <input ref={replacementInputRef} type="file" onChange={handleReplacementFileChange} className="sr-only" />
          </div>

          {/* PHONE MOCKUP */}
          <div className="hidden md:flex justify-center">
            <div className="sticky top-24 w-[280px] md:w-[270px] md:h-[550px] aspect-[9/16]
                         rounded-[40px] border-[6px] border-[#e5e5e5]
                         shadow-2xl overflow-hidden bg-black/90
                         relative flex items-center justify-center"
            >
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/40 rounded-full" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={steps[safeActive].id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <img
                    src={steps[safeActive].image}
                    alt={steps[safeActive].title}
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
  );
};

export default UserHowitWorks;
