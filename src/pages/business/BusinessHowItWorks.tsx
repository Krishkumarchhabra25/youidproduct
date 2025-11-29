// FullInteractiveFlowAutoComplete.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { UserCheck, Building2, FileText, CheckCircle2, Smartphone } from "lucide-react";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

const YOU_ID_LOGO_SRC = "/images/how-it-works/youid-logo.svg";

export default function HowItWorksPage() {
  const flowRef = useRef<HTMLDivElement | null>(null);

  // token refs
  const tokenUserToCenterRef = useRef<HTMLDivElement | null>(null);
  const tokenTopToCenterRef = useRef<HTMLDivElement | null>(null);
  const tokenCenterToPanelRef = useRef<HTMLDivElement | null>(null);
  const tokenPanelToCenterRef = useRef<HTMLDivElement | null>(null);

  // UI refs
  const youIdNotifRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const verificationRowsRef = useRef<HTMLDivElement[]>([]);
  const bizStatusRef = useRef<HTMLDivElement | null>(null);
  const userStatusRef = useRef<HTMLDivElement | null>(null);
  const bizVerifyBtnRef = useRef<HTMLButtonElement | null>(null);

  // state
  const [modalOpen, setModalOpen] = useState(false);
  const [authCode, setAuthCode] = useState<string | null>(null);
  const [selectedDoc, setSelectedDoc] = useState("Passport (UK)");
  const [autofilled, setAutofilled] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [, setResult] = useState<"idle" | "approved" | "rejected">("idle"); // only need setter

  // mobile detection (used to shorten durations + show mobile CTA)
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const onResize = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 768);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // scroll container ref (the element that actually scrolls on the page)
  const scrollContainerRef = useRef<Element | HTMLElement | Document | null>(null);
  useEffect(() => {
    // find the first ancestor of flowRef that scrolls (overflow-y: auto/scroll and scrollHeight > clientHeight)
    const findScrollContainer = () => {
      if (!flowRef.current) return document.scrollingElement || document.documentElement;
      let el: HTMLElement | null = flowRef.current;
      while (el && el !== document.body) {
        const style = getComputedStyle(el);
        const overflowY = style.overflowY;
        if ((overflowY === "auto" || overflowY === "scroll") && el.scrollHeight > el.clientHeight + 2) {
          return el;
        }
        el = el.parentElement;
      }
      // fallback to the scrollingElement (window document scroll)
      return document.scrollingElement || document.documentElement;
    };

    scrollContainerRef.current = findScrollContainer();
  }, []);

  const setRowRef = (i: number) => (el: HTMLDivElement | null) => {
    if (!el) return;
    verificationRowsRef.current[i] = el;
  };

  const genAuth = () => Math.floor(100000 + Math.random() * 900000).toString();

  // helper: scroll the detected scroll container to center an element (mobile only)
  // we wait a little after smooth scroll to let layout settle
  const scrollContainerToElement = async (targetEl: HTMLElement | null, center = true) => {
    if (!targetEl) return;
    const sc = scrollContainerRef.current;
    if (!sc) return;

    // If scroll container is the document (window-like)
    const isWindow = sc === document.scrollingElement || sc === document.documentElement || sc === document.body;

    if (isWindow) {
      // Use window scroll so page centers target
      const rect = targetEl.getBoundingClientRect();
      const viewportCenterY = window.innerHeight / 2;
      const targetCenterY = rect.top + rect.height / 2;
      const offset = center ? targetCenterY - viewportCenterY : rect.top;
      // compute absolute pageTop
      const pageTop = window.pageYOffset + offset;
      window.scrollTo({ top: pageTop, behavior: "smooth" });
      // wait a bit for scrolling
      await new Promise((r) => setTimeout(r, 420));
      return;
    }

    // sc is a scrollable element
    const container = sc as HTMLElement;
    const targetRect = targetEl.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // target top within container's content coordinates
    const topWithinContainer = targetRect.top - containerRect.top + container.scrollTop;
    const centerOffset = center ? topWithinContainer - container.clientHeight / 2 + targetRect.height / 2 : topWithinContainer;

    container.scrollTo({ top: centerOffset, behavior: "smooth" });
    // give the smooth scroll time to finish (tuned)
    await new Promise((r) => setTimeout(r, 420));
  };

  const tweenTokenTo = async (
    tokenEl: HTMLElement | null,
    fromEl: HTMLElement | null,
    toEl: HTMLElement | null,
    duration = 0.8
  ) => {
    if (!flowRef.current || !tokenEl || !fromEl || !toEl) return;

    // Important: on mobile we scroll the container to make both from/to visible and centered,
    // then recompute bounding rects (so animation coordinates are correct).
    if (isMobile && scrollContainerRef.current) {
      // scroll to midpoint between fromEl and toEl (try to show both)
      // Strategy: center the 'from' element first, then proceed to animate to 'to'.
      await scrollContainerToElement(fromEl, true);
      // slight pause to ensure layout stable
      await new Promise((r) => setTimeout(r, 120));
    }

    // compute coords relative to the flowRef container's top-left
    const flowRect = flowRef.current.getBoundingClientRect();
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    // We'll position tokens (absolute) inside the flowRef context using x/y from viewport coords
    // convert viewport coords to flowRef local coords:
    const startX = fromRect.left + fromRect.width / 2 - flowRect.left;
    const startY = fromRect.top + fromRect.height / 2 - flowRect.top;
    const endX = toRect.left + toRect.width / 2 - flowRect.left;
    const endY = toRect.top + toRect.height / 2 - flowRect.top;

    gsap.set(tokenEl, { position: "absolute", left: 0, top: 0, zIndex: 120, x: startX, y: startY, opacity: 1 });
    await gsap.to(tokenEl, { x: endX, y: endY, duration, ease: "power1.inOut" });
    await gsap.to(tokenEl, { opacity: 0, duration: 0.12 });
    gsap.set(tokenEl, { clearProps: "all" });
  };

  const animateRow = async (rowEl: HTMLElement | null) => {
    if (!rowEl) return;
    const d = isMobile ? 0.28 : 0.36;
    await gsap.fromTo(rowEl, { x: 14, opacity: 0, filter: "blur(5px)" }, { x: 0, opacity: 1, filter: "blur(0px)", duration: d, ease: "back.out(1.2)" });
    await gsap.to(rowEl, { boxShadow: "0 12px 30px rgba(0,0,0,0.5)", duration: 0.12 });
  };

  const openModalAnim = () => {
    setModalOpen(true);
    if (!modalRef.current) return;
    gsap.killTweensOf(modalRef.current);
    gsap.fromTo(modalRef.current, { scale: 0.985, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.28, ease: "back.out(1.2)" });
  };
  const closeModalAnim = () => {
    if (!modalRef.current) {
      setModalOpen(false);
      return;
    }
    gsap.killTweensOf(modalRef.current);
    gsap.to(modalRef.current, { scale: 0.985, opacity: 0, duration: 0.18, ease: "power2.in", onComplete: () => setModalOpen(false) });
  };

  const startVerification = async () => {
    if (verifying) return;
    setVerifying(true);

    const youIdTop = document.getElementById("youid-top");
    const bizCenter = document.getElementById("biz-center");
    const panelFirst = verificationRowsRef.current[0] || null;

    const code = genAuth();
    setAuthCode(code);
    if (youIdNotifRef.current) {
      youIdNotifRef.current.textContent = `Auth code: ${code}`;
      gsap.fromTo(youIdNotifRef.current, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: isMobile ? 0.28 : 0.36, ease: "back.out(1.4)" });
    }

    await new Promise((r) => setTimeout(r, isMobile ? 550 : 800));

    // modal open only here
    openModalAnim();
    setSelectedDoc("Passport (UK)");
    setAutofilled(true);
    await new Promise((r) => setTimeout(r, isMobile ? 340 : 420));

    // on mobile, ensure bizCenter is visible before animating the token from youID to business
    if (isMobile && bizCenter) {
      await scrollContainerToElement(bizCenter, true);
      await new Promise((r) => setTimeout(r, 120));
    }

    if (tokenTopToCenterRef.current && youIdTop && bizCenter) {
      await tweenTokenTo(tokenTopToCenterRef.current, youIdTop, bizCenter, isMobile ? 0.55 : 0.68);
      gsap.fromTo(bizCenter, { scale: 0.99 }, { scale: 1.02, duration: 0.22, yoyo: true, repeat: 1 });
    }

    if (tokenCenterToPanelRef.current && bizCenter && panelFirst) {
      // ensure panelFirst visible on mobile
      if (isMobile && panelFirst) {
        await scrollContainerToElement(panelFirst, true);
        await new Promise((r) => setTimeout(r, 120));
      }
      await tweenTokenTo(tokenCenterToPanelRef.current, bizCenter, panelFirst, isMobile ? 0.6 : 0.85);
    }

    // animate rows
    for (let i = 0; i < verificationRowsRef.current.length; i++) {
      // on mobile keep the row visible while animating
      if (isMobile && verificationRowsRef.current[i]) {
        await scrollContainerToElement(verificationRowsRef.current[i], true);
      }
      await animateRow(verificationRowsRef.current[i]);
      await new Promise((r) => setTimeout(r, isMobile ? 160 : 200));
    }

    // panel -> business result token
    const panelLast = verificationRowsRef.current[verificationRowsRef.current.length - 1] || null;
    if (tokenPanelToCenterRef.current && panelLast && bizCenter) {
      // make sure bizCenter visible before final token arrives
      if (isMobile && bizCenter) {
        await scrollContainerToElement(bizCenter, true);
      }
      await tweenTokenTo(tokenPanelToCenterRef.current, panelLast, bizCenter, isMobile ? 0.6 : 0.85);
    }

    setResult("approved");
    if (bizStatusRef.current) gsap.fromTo(bizStatusRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.36, ease: "back.out(1.4)" });
    if (youIdNotifRef.current) {
      youIdNotifRef.current.textContent = `Verification approved — request id ${Math.floor(Math.random() * 90000) + 10000} — ${selectedDoc}`;
      gsap.fromTo(youIdNotifRef.current, { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.36 });
    }
    if (userStatusRef.current) gsap.fromTo(userStatusRef.current, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.36 });

    await new Promise((r) => setTimeout(r, isMobile ? 340 : 420));
    closeModalAnim();

    setVerifying(false);
  };

  const autoFlow = async () => {
    if (verifying) return;
    await new Promise((r) => setTimeout(r, isMobile ? 220 : 320));

    const userLeft = document.getElementById("user-left");
    const bizCenter = document.getElementById("biz-center");

    // On mobile: scroll to user-left first to show where the token comes from
    if (isMobile && userLeft) {
      await scrollContainerToElement(userLeft, true);
      await new Promise((r) => setTimeout(r, 120));
    }

    if (tokenUserToCenterRef.current && userLeft && bizCenter) {
      await tweenTokenTo(tokenUserToCenterRef.current, userLeft, bizCenter, isMobile ? 0.6 : 0.9);

      if (bizVerifyBtnRef.current) {
        gsap.fromTo(bizVerifyBtnRef.current, { scale: 0.98 }, { scale: 1.04, duration: isMobile ? 0.12 : 0.16, yoyo: true, repeat: 2, ease: "power1.inOut" });
        await new Promise((r) => setTimeout(r, isMobile ? 260 : 340));
      }

      await startVerification();
    } else {
      await startVerification();
    }
  };

  useEffect(() => {
    const t = setTimeout(() => {
      autoFlow().catch(console.error);
    }, 620);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ============================================================================ */
  return (
    <div style={{ ["--brand" as any]: "#ff6a00", ["--accent" as any]: "#25b36f", ["--muted" as any]: "#bfc9c1" }}>
      <Navigation />

      {/* BIG GRAINED HERO that now contains the title + the full flow */}
      <header className="w-full bg-[radial-gradient(circle_at_top_left,#ff6a00_0%,#220e00_40%,#050100_85%)] shadow-[0_0_120px_rgba(255,106,0,0.22)] relative">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-20">
          {/* Title + subtitle */}
          <div className="mb-6 md:mb-12 flex items-start justify-between">
            <div className="w-full md:w-auto">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.45)]">
                How Verification Works
              </h1>
              <p className="mt-3 font-body text-base sm:text-lg md:text-2xl text-white leading-relaxed max-w-2xl">
                Watch the complete identity flow — fully automatic, from user to business.
              </p>

              {/* MOBILE FULL-WIDTH CTA: visible on small screens only */}
              <div className="mt-5 md:hidden">
                <button
                  onClick={() => {
                    if (!verifying) autoFlow().catch(console.error);
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--brand)] text-black font-heading text-lg shadow-md"
                  aria-label="See verification flow"
                >
                  See verification flow
                </button>
              </div>
            </div>

            {/* RIGHT-SIDE LARGE CALLOUT (desktop/tablet) */}
            <div className="ml-4 hidden md:flex items-center">
              <button
                onClick={() => {
                  if (!verifying) autoFlow().catch(console.error);
                }}
                aria-label="See verification flow"
                className="px-6 py-4 rounded-2xl bg-[rgba(0,0,0,0.36)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(0,0,0,0.45)] transition"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <div className="text-right">
                  <div className="font-heading text-2xl md:text-3xl text-white leading-tight">Click here to</div>
                  <div className="font-heading text-3xl md:text-4xl text-white font-bold -mt-1">see verification flow</div>
                </div>
              </button>
            </div>
          </div>

          {/* --- THE INTERACTIVE FLOW LIVES INSIDE THE HERO --- */}
          <div ref={flowRef} className="bg-transparent relative mt-6">
            <div className="max-w-7xl mx-auto">
              {/* youID top */}
              <div id="youid-top" className="w-full flex justify-center mb-6">
                <div className="bg-[linear-gradient(180deg,#1a0f00,rgba(43,18,0,0.5))] border border-[rgba(255,106,0,0.18)] rounded-2xl p-4 shadow-md w-full max-w-[520px] text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <img src={YOU_ID_LOGO_SRC} alt="youID" className="h-8 w-8" />
                    <div className="font-heading text-base text-white flex items-center gap-2">
                      youID App (user)
                      <Smartphone className="w-4 h-4 text-white/90" />
                    </div>
                  </div>
                  <div className="font-body text-base text-white mb-3">Receives auth push codes and final notifications.</div>
                  <div
                    ref={youIdNotifRef}
                    className="p-3 rounded border border-white/8 bg-[#071815] text-base sm:text-lg md:text-base text-white min-h-[52px] select-none"
                    aria-live="polite"
                  >
                    No notifications yet
                  </div>
                </div>
              </div>

              {/* grid row */}
              <div className="grid grid-cols-12 gap-6 items-start">
                {/* Left */}
                <div className="col-span-12 lg:col-span-3">
                  <div id="user-left" className="bg-black/60 border border-white/8 rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <UserCheck className="w-5 h-5 text-[#ffb57a]" />
                      <div className="font-heading text-sm text-white">User</div>
                    </div>
                    <div className="font-body text-base text-white">Represents user origin. Primary actor is the youID App above.</div>
                    <div className="mt-4">
                      <div className="inline-flex items-center gap-2 rounded px-3 py-2 bg-[#071815] border border-white/6 text-white text-base">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#25b36f">
                          <circle cx="12" cy="12" r="9" strokeWidth="1.2" />
                        </svg>
                        <span className="font-body text-base">Left user area</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center */}
                <div id="biz-center" className="col-span-12 lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-md">
                    <div className="bg-black/60 border border-white/8 rounded-2xl p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.6)]">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Building2 className="w-5 h-5 text-[#ffb57a]" />
                        <div className="font-heading text-sm text-white">Business</div>
                      </div>
                      <h3 className="font-heading text-2xl font-semibold mb-2 text-white">Automatic verification demo</h3>
                      <div className="font-body text-base text-white mb-4">Widget opens only when verification starts automatically.</div>

                      <div ref={bizStatusRef} className="mt-2 opacity-0 inline-flex items-center gap-2 rounded px-3 py-2 bg-[#071815] border border-[rgba(51,255,153,0.18)] text-[#b5ffe0] text-base mx-auto">
                        <CheckCircle2 className="w-4 h-4" /> <span className="font-body">Access granted</span>
                      </div>

                      <div className="mt-4">
                        <button
                          ref={bizVerifyBtnRef}
                          disabled
                          aria-disabled="true"
                          className="px-4 py-2 rounded-lg bg-[var(--accent)] text-black font-semibold shadow-sm opacity-90 cursor-not-allowed"
                          aria-label="Verify with youID (automatic)"
                        >
                          <span className="font-body text-base">Verify with youID</span>
                        </button>
                      </div>
                    </div>

                    {/* modal */}
                    <div className="mt-6 flex justify-center">
                      <div
                        ref={modalRef}
                        className={`w-full max-w-md rounded-2xl border p-4 shadow-lg ${modalOpen ? "bg-[#0f0f0f] border-white/12" : "bg-transparent border-white/6"} transition-all`}
                        aria-hidden={!modalOpen}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-heading text-base text-white">youID Widget</div>
                          <div className="text-sm text-white/80">In-site</div>
                        </div>

                        {!modalOpen && <div className="font-body text-base text-white">Widget closed — it opens during verification.</div>}

                        {modalOpen && (
                          <>
                            <div className="font-body text-base mb-2 text-white">Select document</div>
                            <select value={selectedDoc} onChange={(e) => setSelectedDoc(e.target.value)} className="w-full p-2 rounded bg-[#0b0b0b] border border-white/10 text-white mb-3 text-base">
                              <option>Passport (UK)</option>
                              <option>Driving Licence (UK)</option>
                              <option>ID Card (UK)</option>
                            </select>

                            <div className="font-body text-base mb-2 text-white">Auth code</div>
                            <div className="flex gap-2 items-center">
                              <input value={autofilled ? authCode ?? "" : ""} readOnly className="flex-1 p-2 rounded bg-[#0b0b0b] border border-white/10 text-base text-white" />
                              <button className="px-3 py-2 rounded bg-[var(--accent)] text-black font-semibold" disabled>
                                <span className="font-body text-base">Auto</span>
                              </button>
                            </div>

                            <div className="mt-3 font-body text-base text-white">Processing will animate checks to the right.</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="col-span-12 lg:col-span-3">
                  <div className="rounded-2xl border border-white/8 bg-black/85 p-4 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#ffb57a]" />
                        <div className="font-heading text-sm text-white">Verification checks</div>
                      </div>
                      <div className="text-sm text-white/80">Secure</div>
                    </div>

                    <div className="space-y-3">
                      <div ref={setRowRef(0)} className="p-3 border rounded-md opacity-30 text-white text-base">Document verification</div>
                      <div ref={setRowRef(1)} className="p-3 border rounded-md opacity-30 text-white text-base">Identity validation</div>
                      <div ref={setRowRef(2)} className="p-3 border rounded-md opacity-30 text-white text-base">Age confirmation</div>
                      <div ref={setRowRef(3)} className="p-3 border rounded-md opacity-30 text-white text-base">Fraud checks</div>
                    </div>

                    <div className="text-base mt-3 text-white">Only the verification result is returned — no raw documents.</div>
                  </div>
                </div>
              </div>

              {/* absolute tokens - positioned relative to the flowRef container */}
              <div className="pointer-events-none">
                <div ref={tokenUserToCenterRef} className="absolute w-3 h-3 rounded-full bg-[#33c77e] shadow-md opacity-0" />
                <div ref={tokenTopToCenterRef} className="absolute w-3 h-3 rounded-full bg-[#ff6a00] shadow-md opacity-0" />
                <div ref={tokenCenterToPanelRef} className="absolute w-3 h-3 rounded-full bg-[#ffb57a] shadow-md opacity-0" />
                <div ref={tokenPanelToCenterRef} className="absolute w-3 h-3 rounded-full bg-[#ff6a00] shadow-md opacity-0" />
              </div>

              {/* bottom status */}
              <div className="mt-8 text-center">
                <div ref={userStatusRef} className="inline-flex items-center gap-2 rounded px-3 py-2 bg-[#071815] border border-[rgba(51,255,153,0.14)] text-[#b5ffe0] text-base opacity-0">
                  <CheckCircle2 className="w-4 h-4" /> <span className="font-body">Verified</span>
                </div>
              </div>
            </div>
          </div>
          {/* --- end interactive flow inside hero --- */}
        </div>
      </header>

      {/* rest of page */}
      <section className="bg-[#050100] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">{/* extra content */}</div>
      </section>

      <Footer />
    </div>
  );
}
