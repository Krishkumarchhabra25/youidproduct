import React, {  useRef, useState } from "react";

import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

import step1Img from "../../assets/images/Image (1).jpg";
import step2Img from "../../assets/images/Image (2).jpg";
import step3Img from "../../assets/images/Image (3).jpg";
import step4Img from "../../assets/images/Image (4).jpg";

export default function VerificationFlow() {
  const steps = [
    { id: 1, title: "Upload Document", desc: "Upload your ID, Passport, License, or Address proof.", image: step1Img },
    { id: 2, title: "Processing", desc: "We are reviewing your document.", image: step2Img },
    { id: 3, title: "Verify Documents", desc: "See your uploaded documents.", image: step3Img },
    { id: 4, title: "Completed", desc: "Verification is completed.", image: step4Img },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  const generalInputRef = useRef<HTMLInputElement>(null);
  const replacementInputRef = useRef<HTMLInputElement>(null);

  const [documents, setDocuments] = useState<any[]>([]);
  const [replaceId, setReplaceId] = useState<string | null>(null);

  const handleGeneralFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newDoc = {
      id: String(Date.now()),
      name: file.name,
      status: "Pending",
      uploadedAt: new Date().toLocaleString(),
    };

    setDocuments((prev) => [...prev, newDoc]);

    // Auto-scroll to verify section
    const verifyIndex = steps.findIndex((s) => s.id === 3);
    scrollToStep(verifyIndex);
  };

  const handleReplacementFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!replaceId) return;
    const file = e.target.files?.[0];
    if (!file) return;

    setDocuments((prev) =>
      prev.map((d) =>
        d.id === replaceId
          ? { ...d, name: file.name, status: "Replaced", uploadedAt: new Date().toLocaleString() }
          : d
      )
    );

    setReplaceId(null);
  };

  const openReplacementUpload = (id: string) => {
    setReplaceId(id);
    replacementInputRef.current?.click();
  };

  const scrollToStep = (index: number) => {
    setActiveIndex(index);
    const target = stepRefs.current[index];
    if (containerRef.current && target) {
      containerRef.current.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  const onWheel = (e: React.WheelEvent) => {
    if (!containerRef.current) return;
    containerRef.current.scrollTop += e.deltaY;
  };

  const safeActive = Math.min(activeIndex, steps.length - 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto pt-10 px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN */}
          <div
            ref={containerRef}
            onWheel={onWheel}
            className="flex flex-col space-y-12 pb-10 md:max-h-[80vh] md:overflow-y-auto no-scrollbar px-1"
          >
            {steps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center w-full">

                {/* CARD */}
                <div
                  ref={(el) => {
                    stepRefs.current[idx] = el!;
                  }}
                  className={`
                    p-6 rounded-2xl transition-all duration-300 w-full max-w-[480px]
                    text-center md:text-left

                    /* MOBILE GRADIENT */
                    bg-[linear-gradient(135deg,#e8ddff_0%,#ffffff_45%,#ffeede_100%)]

                    /* DESKTOP BACKGROUND */
                    md:bg-none
                    ${safeActive === idx ? "shadow-xl md:bg-white" : "md:bg-white/70"}
                  `}
                >
                  <div className="flex items-start gap-4 md:flex-row flex-col md:text-left text-center">

                    {/* Desktop Step Button */}
                    <button
                      type="button"
                      onClick={() => scrollToStep(idx)}
                      className={`hidden md:flex w-12 h-12 rounded-full items-center justify-center text-lg font-semibold ${
                        safeActive === idx
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-gray-300 text-gray-700"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </button>

                    <div className="flex-1">

                      {/* MOBILE STEP NUMBER */}
                      <div className="md:hidden flex items-center justify-center mb-2">
                        <div className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          Step {String(idx + 1).padStart(2, "0")}
                        </div>
                      </div>

                      {/* Titles */}
                      <div className="md:hidden mb-2">
                        <div className="text-lg font-semibold text-gray-900">{step.title}</div>
                        <div className="text-sm text-gray-600">{step.desc}</div>
                      </div>

                      <h3 className="hidden md:block text-xl font-semibold text-black">{step.title}</h3>
                      <p className="hidden md:block text-sm text-gray-600 mt-1">{step.desc}</p>

                      {/* STEP 1 — UPLOAD */}
                      {step.id === 1 && (
                        <div className="mt-4 space-y-3">
                          <div className="text-sm">
                            Upload JPG/PNG/PDF. Supported: ID, Passport, License, Address Proof.
                          </div>

                          <div className="mt-2 flex items-center gap-3 justify-center md:justify-start">
                            <input
                              ref={generalInputRef}
                              type="file"
                              onChange={handleGeneralFileChange}
                              className="sr-only"
                            />

                            <button
                              onClick={() => generalInputRef.current?.click()}
                              className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm"
                            >
                              Choose file
                            </button>

                            <button
                              onClick={() => scrollToStep(steps.findIndex((s) => s.id === 3))}
                              className="px-3 py-2 rounded-md border text-sm"
                            >
                              My uploads
                            </button>
                          </div>

                          <div className="text-xs text-gray-500">
                            Uploaded documents will appear in Verify Documents.
                          </div>
                        </div>
                      )}

                      {/* STEP 3 — DOCUMENT LIST */}
                      {step.id === 3 && (
                        <div className="mt-4 space-y-4">
                          {documents.map((doc) => (
                            <div
                              key={doc.id}
                              className="p-3 bg-gray-50 border rounded-lg flex items-center justify-between"
                            >
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

                      {/* STEP 4 — COMPLETED */}
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
                    className="w-[90%] max-w-[440px] rounded-xl object-cover"
                  />
                </div>
              </div>
            ))}

            <input
              ref={replacementInputRef}
              type="file"
              onChange={handleReplacementFileChange}
              className="sr-only"
            />
          </div>

          {/* RIGHT SIDE (PHONE IMAGE) */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src={steps[safeActive].image}
              className="w-[420px] rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
