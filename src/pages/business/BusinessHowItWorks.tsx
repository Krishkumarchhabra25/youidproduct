"use client";

import React, { useLayoutEffect, useRef } from "react";
import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chooseImg from "../../assets/images/choose.png";
import selectDocumentsImg from "../../assets/images/selectdocuments.png";
import processingImg from "../../assets/images/processing.png";
import resuestverification from "../../assets/images/verificationresuets (1).png";
import verificationSuccessImg2 from "../../assets/images/verificationSuccesfully.png";
gsap.registerPlugin(ScrollTrigger);

const BusinessHowItWorks: React.FC = () => {
  // refs
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stepNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileStepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileImageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const leftTextRef = useRef<HTMLDivElement | null>(null);
  const containerWrapperRef = useRef<HTMLDivElement | null>(null);
  const rightSectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepLineRef = useRef<HTMLDivElement | null>(null);
  const stepFillRef = useRef<HTMLDivElement | null>(null);
  const trackerRef = useRef<HTMLDivElement | null>(null);

  const images = [
    chooseImg,
    selectDocumentsImg,
    processingImg,
    resuestverification,
    verificationSuccessImg2,
  ];

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initialBg =
      "radial-gradient(circle at top left, #ff6a00 0%, #1a0a00 25%, #000000 70%, #000000 100%)";

    if (containerRef.current) {
      gsap.set(containerRef.current, {
        background: initialBg,
        backgroundSize: "cover",
        backgroundPosition: "top left",
      });
    }

    if (prefersReduced) {
      panelsRef.current.forEach((p) => p && gsap.set(p, { opacity: 1, y: 0 }));
      imageRefs.current.forEach((img, i) => img && gsap.set(img, { opacity: i === 0 ? 1 : 0 }));
      mobileImageRefs.current.forEach((img) => img && gsap.set(img, { opacity: 1 }));
      return;
    }

    const nonNullDivs = (arr: (HTMLDivElement | null)[]): HTMLDivElement[] =>
      arr.filter((el): el is HTMLDivElement => !!el);
    const nonNullImgs = (arr: (HTMLImageElement | null)[]): HTMLImageElement[] =>
      arr.filter((el): el is HTMLImageElement => !!el);

    function positionLineToPanelTops() {
      const panels = nonNullDivs(panelsRef.current);
      const nodes = nonNullDivs(stepNodeRefs.current);
      const line = stepLineRef.current;
      const fill = stepFillRef.current;
      const trackerContainer = trackerRef.current;

      if (!line || !fill || !panels.length || !nodes.length || !trackerContainer) return;

      const firstNodeRect = nodes[0].getBoundingClientRect();
      const lastNodeRect = nodes[nodes.length - 1].getBoundingClientRect();
      const trackerRect = trackerContainer.getBoundingClientRect();

      const firstNodeCenter = firstNodeRect.top - trackerRect.top + firstNodeRect.height / 2;
      const lastNodeCenter = lastNodeRect.top - trackerRect.top + lastNodeRect.height / 2;
      const height = lastNodeCenter - firstNodeCenter;

      line.style.top = `${firstNodeCenter}px`;
      line.style.height = `${Math.max(1, height)}px`;
      fill.style.top = `${firstNodeCenter}px`;

      trackerContainer.style.opacity = "1";
    }

    function setActiveStep(index: number) {
      const nodes = nonNullDivs(stepNodeRefs.current);
      const panels = nonNullDivs(panelsRef.current);
      const fill = stepFillRef.current;
      const trackerContainer = trackerRef.current;

      if (!nodes.length || !fill || !panels.length || !trackerContainer) return;

      // desktop nodes
      nodes.forEach((n, i) => {
        n.classList.remove("step-past", "step-active", "step-future");
        if (i < index) n.classList.add("step-past");
        else if (i === index) n.classList.add("step-active");
        else n.classList.add("step-future");
      });

      // mobile circles mirror classes (so they glow)
      mobileStepRefs.current.forEach((el, i) => {
        if (!el) return;
        el.classList.remove("past", "active", "future");
        if (i < index) el.classList.add("past");
        else if (i === index) el.classList.add("active");
        else el.classList.add("future");
      });

      // desktop left stack images
      const imgs = nonNullImgs(imageRefs.current);
      imgs.forEach((imgEl, i) => {
        if (i === index) gsap.to(imgEl, { opacity: 1, duration: 0.6, ease: "power2.out" });
        else gsap.to(imgEl, { opacity: 0, duration: 0.45, ease: "power2.out" });
      });

      // vertical tracker fill calculation
      const trackerRect = trackerContainer.getBoundingClientRect();
      const firstNodeRect = nodes[0].getBoundingClientRect();
      const activeNodeRect = nodes[index].getBoundingClientRect();
      const lastNodeRect = nodes[nodes.length - 1].getBoundingClientRect();

      const firstNodeCenter = firstNodeRect.top - trackerRect.top + firstNodeRect.height / 2;
      const activeNodeCenter = activeNodeRect.top - trackerRect.top + activeNodeRect.height / 2;
      const lastNodeCenter = lastNodeRect.top - trackerRect.top + lastNodeRect.height / 2;

      const totalHeight = lastNodeCenter - firstNodeCenter;
      const activeHeight = activeNodeCenter - firstNodeCenter;

      const percentFill = totalHeight > 0 ? (activeHeight / totalHeight) * 100 : 0;

      gsap.to(fill, {
        height: `${Math.max(0, Math.min(100, percentFill))}%`,
        duration: 0.35,
        ease: "power2.out",
      });
    }

    function clearActiveStates() {
      stepNodeRefs.current.forEach((n) => n && n.classList.remove("step-active", "step-past", "step-future"));
      mobileStepRefs.current.forEach((m) => m && m.classList.remove("past", "active", "future"));
      if (stepFillRef.current) stepFillRef.current.style.height = "0%";
      if (trackerRef.current) trackerRef.current.style.opacity = "0";
      imageRefs.current.forEach((img) => img && (img.style.opacity = "0"));
      mobileImageRefs.current.forEach((img) => img && (img.style.opacity = "1"));
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 0px)", () => {
        const endBg =
          "radial-gradient(circle at top left, #ff6a00 0%, #e05f00 20%, #2a1200 55%, #050100 100%)";

        if (!containerRef.current) return;

        const tween = gsap.to(containerRef.current, {
          background: endBg,
          ease: "none",
          scrollTrigger: {
            trigger: containerWrapperRef.current || containerRef.current,
            start: "top top",
            end: "bottom center",
            scrub: 0.7,
          },
        });

        return () => {
          if (tween.scrollTrigger) tween.scrollTrigger.kill();
          tween.kill();
        };
      });

      mm.add("(min-width: 1024px)", () => {
        const left = leftTextRef.current;
        const right = rightSectionRef.current;
        const panels = nonNullDivs(panelsRef.current);

        if (!left || !right || !panels.length || !containerWrapperRef.current) return;

        gsap.set(panels, { opacity: 0, y: 120 });
        gsap.set(panels[0], { opacity: 1, y: 0 });

        imageRefs.current.forEach((img, i) => {
          if (!img) return;
          gsap.set(img, { opacity: i === 0 ? 1 : 0 });
        });

        const totalScrollHeight = right.scrollHeight - window.innerHeight;

        ScrollTrigger.create({
          trigger: containerWrapperRef.current,
          start: "top top",
          end: () => `+=${Math.max(totalScrollHeight, window.innerHeight)}`,
          pin: left,
          pinSpacing: true,
          anticipatePin: 1,
        });

        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 120 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 75%",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        });

        setTimeout(() => {
          positionLineToPanelTops();
          setActiveStep(0);
        }, 150);

        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top 55%",
            end: "top 20%",
            onEnter: () => setActiveStep(i),
            onEnterBack: () => setActiveStep(i),
          });
        });

        ScrollTrigger.addEventListener("refresh", positionLineToPanelTops);
        window.addEventListener("resize", positionLineToPanelTops);

        return () => {
          ScrollTrigger.removeEventListener("refresh", positionLineToPanelTops);
          window.removeEventListener("resize", positionLineToPanelTops);
          ScrollTrigger.getAll().forEach((t) => t.kill());
          clearActiveStates();
        };
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const left = leftTextRef.current;
        const right = rightSectionRef.current;
        const panels = nonNullDivs(panelsRef.current);

        if (!left || !right || !panels.length || !containerWrapperRef.current) return;

        gsap.set(panels, { opacity: 0, y: 90 });
        gsap.set(panels[0], { opacity: 1, y: 0 });

        imageRefs.current.forEach((img, i) => {
          if (!img) return;
          gsap.set(img, { opacity: i === 0 ? 1 : 0 });
        });

        const totalScrollHeight = right.scrollHeight - window.innerHeight;

        ScrollTrigger.create({
          trigger: containerWrapperRef.current,
          start: "top top",
          end: () => `+=${Math.max(totalScrollHeight * 0.9, window.innerHeight)}`,
          pin: left,
          pinSpacing: false,
          anticipatePin: 0.5,
        });

        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 90 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 78%",
                end: "top 35%",
                scrub: true,
              },
            }
          );
        });

        setTimeout(() => {
          positionLineToPanelTops();
          setActiveStep(0);
        }, 150);

        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top 65%",
            end: "top 25%",
            onEnter: () => setActiveStep(i),
            onEnterBack: () => setActiveStep(i),
          });
        });

        ScrollTrigger.addEventListener("refresh", positionLineToPanelTops);
        window.addEventListener("resize", positionLineToPanelTops);

        return () => {
          ScrollTrigger.removeEventListener("refresh", positionLineToPanelTops);
          window.removeEventListener("resize", positionLineToPanelTops);
          ScrollTrigger.getAll().forEach((t) => t.kill());
          clearActiveStates();
        };
      });

      mm.add("(max-width: 767px)", () => {
        const panels = nonNullDivs(panelsRef.current);

        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 30, scale: 0.995 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 90%",
                end: "top 65%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top 92%",
            end: "top 64%",
            onEnter: () => setActiveStep(i),
            onEnterBack: () => setActiveStep(i),
          });
        });

        mobileImageRefs.current.forEach((img) => img && (img.style.opacity = "1"));

        setTimeout(() => setActiveStep(0), 100);

        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          clearActiveStates();
        };
      });

      return () => mm.revert();
    }, containerWrapperRef);

    return () => {
      try {
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {
        // ignore
      }
    };
  }, []);

  const useCases = [
    {
      badge: "Step 1 — User starts verification with youID",
      points: [
        "User clicks the “Verify with youID” button on the organization’s website.",
        "A brief instruction screen appears before the verification begins.",
        "The website prepares a verification request to send to the user’s youID app.",
      ],
    },
    {
      badge: "Step 2 — Website sends verification request to the youID app",
      points: [
        "The organization’s website sends a verification request to the user’s youID app (push, QR, or deep-link).",
        "The youID app prompts the user to open or unlock their identity wallet.",
        "The request includes context such as organization name, purpose, and timestamp for informed consent.",
      ],
    },
    {
      badge: "Step 3 — User enters the authentication code on the website",
      points: [
        "youID generates a short authentication code or token for the user.",
        "User enters this authentication code on the organization’s website (or it is auto-verified).",
        "This securely links the youID session with the organization’s verification request.",
      ],
    },
    {
      badge: "Step 4 — Website sends approval request back to the youID app",
      points: [
        "After confirming the session, the website sends an approval request to the user’s youID app.",
        "The user reviews what the organization is asking to verify.",
        "The user approves the request, and youID sends a signed, verifiable response back to the website.",
      ],
    },
    {
      badge: "Step 5 — Verification completed successfully",
      points: [
        "The organization validates the signed verification response from youID.",
        "Once all checks pass, the user is marked as verified and granted access.",
        "A minimal compliance log is stored while maintaining full user privacy.",
      ],
    },
  ];

  const steps = ["1", "2", "3", "4", "5"];

  return (
    <>
      <Navigation />

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at top left, #ff6a00 0%, #1a0a00 25%, #000000 70%, #000000 100%)",
        }}
      >
        {/* top spacing responsive: small on phones, larger on desktop */}
        <div className="pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28" />

        {/* title - responsive sizes & top offset so title sits comfortably above content */}
        <div className="mx-auto max-w-3xl text-center px-4 sm:px-6 md:px-8">
          <h2 className="text-white font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight">
            How it works
          </h2>
          <p className="text-gray-300 font-body text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto">
            See the flow from user identity to verified business confidence
          </p>
        </div>

        {/* custom CSS for responsive image heights and mobile spacing */}
        <style>{`
          /* desktop node circle / tracker styles (unchanged) */
          .step-node-circle {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #1a0a00;
            border: 3px solid #666;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 18px;
            color: #999;
            transition: all 0.35s ease;
            position: relative;
            z-index: 2;
            box-shadow: none;
          }
          .step-past .step-node-circle { background: #ff6a00; border-color: #ff6a00; color: #fff; box-shadow: 0 0 20px rgba(255, 106, 0, 0.6); opacity: 0.4; }
          .step-active .step-node-circle { background: #ff6a00; border-color: #ff6a00; color: #fff; box-shadow: 0 0 30px rgba(255, 106, 0, 0.8); transform: scale(1.2); opacity: 1; }
          .step-future .step-node-circle { background: #1a0a00; border-color: #444; color: #666; opacity: 1; }
          .panel-with-node { position: relative; }
          .panel-node-wrapper { position: absolute; left: -68px; top: 50%; transform: translateY(-50%); display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; pointer-events: none; z-index: 30; }
          @media (max-width: 1023px) { .panel-node-wrapper { display: none; } }

          /* mobile step circle */
          .mobile-step { width: 56px; height: 56px; border-radius: 999px; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:16px; color:#fff; background:#1a0a00; border:2px solid rgba(255,255,255,0.04); transition: all 0.28s ease; z-index: 30; }
          .mobile-step.past { background:#ff6a00; box-shadow: 0 6px 18px rgba(255,106,0,0.12); transform: scale(0.98); }
          .mobile-step.active { background: linear-gradient(135deg,#ff6a00,#e05f00); box-shadow: 0 12px 40px rgba(255,106,0,0.28), 0 0 30px rgba(224,95,0,0.16); transform: scale(1.06); }
          .mobile-step.future { background:#1a0a00; opacity: 0.95; }

          /* mobile image sizing - tuned per breakpoint so images don't over-zoom */
          .mobile-image { display:block; width:100%; border-radius: 0.75rem; object-fit: cover; box-shadow: 0 8px 30px rgba(0,0,0,0.45); margin-right: 1rem; opacity:1; background: #0b0b0b; height: 11.5rem; }
          @media (min-width: 640px) { .mobile-image { height: 12.5rem; } } /* sm */
          @media (min-width: 768px) { .mobile-image { height: 14.5rem; } } /* md */
          @media (min-width: 1024px) { .mobile-image { display:none; } } /* hide mobile images on lg+ (desktop uses left stack) */

          /* special modifier: don't zoom phone screenshots - show fully centered */
          .mobile-image.object-contain { object-fit: contain; height: 13rem; background: #000; }

          .panel-badge { display: inline-block; padding: 0.6rem 1rem; border-radius: 0.75rem; background: linear-gradient(90deg, rgba(255,106,0,0.08), rgba(224,95,0,0.06)); border: 1px solid rgba(255,106,0,0.12); color: #ffb58a; font-weight: 600; font-size: 0.95rem; }
        `}</style>

        <div ref={containerWrapperRef} className="relative w-full pb-12 sm:pb-14 md:pb-16 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
              {/* desktop left stack (hidden under md) */}
              <div
                ref={leftTextRef}
                className="hidden lg:flex lg:sticky lg:top-28 lg:h-screen items-start justify-center py-4 lg:py-0 lg:pt-6"
              >
                <div className="relative w-[520px] md:w-[560px] lg:w-[640px] h-[360px] md:h-[420px] lg:h-[480px]">
                  <div className="absolute inset-0 rounded-3xl border border-gray-700/30 shadow-2xl overflow-hidden bg-black/30" />
                  {images.map((src, i) => (
                    <img
                      key={i}
                      ref={(el) => { imageRefs.current[i] = el; }}
                      src={typeof src === "string" ? src : (src as any).default ?? (src as any)}
                      alt={`step-${i}-visual`}
                      className={`absolute inset-0 rounded-3xl pointer-events-none ${i === 3 ? "object-contain scale-110" : "object-cover"}`}
                      style={{ opacity: i === 0 ? 1 : 0, transition: "opacity 400ms ease", width: "100%", height: "100%", left: i === 3 ? "50%" : "0", transform: i === 3 ? "translateX(-50%)" : "none" }}
                    />
                  ))}
                </div>
              </div>

              {/* right panels */}
              <div ref={rightSectionRef} className="relative py-6 lg:py-24">
                <div ref={trackerRef} className="hidden lg:block absolute -left-8 w-20 h-full pointer-events-none" style={{ opacity: 0, transition: "opacity 0.4s ease" }}>
                  <div className="relative w-full h-full">
                    <div ref={stepLineRef} className="absolute left-1/2 w-1 bg-gray-600" style={{ transform: "translateX(-50%)", top: 0, height: 0, opacity: 0.8 }} />
                    <div ref={stepFillRef} className="absolute left-1/2 w-1 bg-orange-500" style={{ transform: "translateX(-50%)", top: 0, height: "0%", boxShadow: "0 0 10px rgba(255,106,0,0.5)" }} />
                  </div>
                </div>

                <div className="space-y-6 lg:space-y-16 lg:pl-16">
                  {useCases.map((useCase, idx) => (
                    <div
                      key={idx}
                    ref={(el) => { panelsRef.current[idx] = el; }}

                      className="min-h-[36vh] sm:min-h-[40vh] md:min-h-[55vh] lg:min-h-[70vh] flex items-start panel-with-node"
                    >
                      <div className="panel-node-wrapper" ref={(el) => { stepNodeRefs.current[idx] = el; }}
 aria-hidden>
                        <div className="step-node-circle">{steps[idx]}</div>
                      </div>

                      <div className="w-full max-w-2xl bg-gradient-to-br from-[#1a2332]/95 to-[#0f1419]/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-700/30 shadow-2xl">
                        {/* MOBILE: image sits inside panel on small screens, it has padding (px) so it doesn't attach */}
                        <div className="lg:hidden relative mb-6 px-4">
                          <img
                          ref={(el) => { mobileImageRefs.current[idx] = el; }}

                            src={typeof images[idx] === "string" ? images[idx] : (images[idx] as any).default ?? (images[idx] as any)}
                            alt={`step-${idx}-mobile`}
                            className={`mobile-image ${idx === 3 ? "object-contain" : ""}`}
                          />
                          <div ref={(el) => { mobileStepRefs.current[idx] = el; }}
className="mobile-step absolute left-6 top-6" aria-hidden>
                            <span style={{ fontSize: 15, lineHeight: 1 }}>{steps[idx]}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span className="panel-badge">{useCase.badge}</span>
                        </div>

                        <ul className="space-y-4">
                          {useCase.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-100">
                              <span className="text-orange-500 text-xl flex-shrink-0 mt-0.5">•</span>
                              <span className="text-sm sm:text-base md:text-base leading-relaxed font-light">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default BusinessHowItWorks;
