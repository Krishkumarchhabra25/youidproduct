import { useEffect, useRef } from "react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  Zap,
  Smartphone,
  Shield,
  Building2,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

// replace with your actual asset paths
const PHONE_IMAGE_SRC = "/images/how-it-works/phone.png";
const YOU_ID_LOGO_SRC = "/images/how-it-works/youid-logo.svg";
const ORG_LOGO_SRC = "/images/how-it-works/org-logo.svg";

export const HowItWorksPage = () => {
  const flowSectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const arrowRefs = useRef<HTMLDivElement[]>([]);
  const tokenRefs = useRef<HTMLDivElement[]>([]);
  const userStatusRef = useRef<HTMLDivElement | null>(null);
  const businessStatusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!flowSectionRef.current) return;

    const ctx = gsap.context(() => {
      // Intro: fade in cards
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
      });

      const baseShadow = "0 22px 80px rgba(0,0,0,0.9)";
      const middleShadow = "0 26px 90px rgba(0,0,0,0.95)";
      const highlightShadow =
        "0 0 40px rgba(255,122,63,0.6), 0 0 90px rgba(0,0,0,0.9)";

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2,
      });

      tl.timeScale(0.55);

      // STEP 1 – User card highlight
      if (cardRefs.current[0]) {
        tl.to(cardRefs.current[0], {
          scale: 1.03,
          boxShadow: highlightShadow,
          duration: 0.45,
          ease: "power2.out",
        }).to(cardRefs.current[0], {
          scale: 1,
          boxShadow: baseShadow,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }

      // Arrow 1: pulse + moving token
      if (arrowRefs.current[0] && tokenRefs.current[0]) {
        tl.fromTo(
          arrowRefs.current[0],
          { opacity: 0.3 },
          { opacity: 1, duration: 0.3, ease: "power1.out" }
        );
        tl.fromTo(
          tokenRefs.current[0],
          { x: "-40%", opacity: 0 },
          {
            x: "40%",
            opacity: 1,
            duration: 0.7,
            ease: "power1.inOut",
          },
          "<"
        ).to(tokenRefs.current[0], {
          opacity: 0,
          duration: 0.2,
          ease: "power1.in",
        });
      }

      // STEP 2 – youID card highlight
      if (cardRefs.current[1]) {
        tl.to(cardRefs.current[1], {
          scale: 1.03,
          boxShadow: highlightShadow,
          duration: 0.45,
          ease: "power2.out",
        }).to(cardRefs.current[1], {
          scale: 1,
          boxShadow: middleShadow,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }

      // Arrow 2: pulse + moving token
      if (arrowRefs.current[1] && tokenRefs.current[1]) {
        tl.fromTo(
          arrowRefs.current[1],
          { opacity: 0.3 },
          { opacity: 1, duration: 0.3, ease: "power1.out" }
        );
        tl.fromTo(
          tokenRefs.current[1],
          { x: "-40%", opacity: 0 },
          {
            x: "40%",
            opacity: 1,
            duration: 0.7,
            ease: "power1.inOut",
          },
          "<"
        ).to(tokenRefs.current[1], {
          opacity: 0,
          duration: 0.2,
          ease: "power1.in",
        });
      }

      // STEP 3 – Org card highlight + status chips
      if (cardRefs.current[2]) {
        tl.to(cardRefs.current[2], {
          scale: 1.03,
          boxShadow: highlightShadow,
          duration: 0.45,
          ease: "power2.out",
        }).to(cardRefs.current[2], {
          scale: 1,
          boxShadow: baseShadow,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }

      if (businessStatusRef.current && userStatusRef.current) {
        tl.fromTo(
          businessStatusRef.current,
          { opacity: 0, y: 6, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.6)",
          }
        );
        tl.fromTo(
          userStatusRef.current,
          { opacity: 0, y: 6, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.6)",
          },
          "-=0.2"
        );
        tl.to(
          [businessStatusRef.current, userStatusRef.current],
          {
            opacity: 0,
            duration: 0.4,
            ease: "power1.in",
          },
          "+=0.6"
        );
      }
    }, flowSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="
        min-h-screen
        bg-[#050100]
        bg-[radial-gradient(circle_at_top_left,#ff6a00_0%,#1a0a00_20%,#050100_55%,#000000_100%)]
        text-white
        font-body
        px-4
      "
    >
      <div className="max-w-7xl mx-auto py-16 sm:py-24">
        {/* HERO */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6a00]/10 text-[#ffb57a] text-xs font-medium border border-[#ff6a00]/40">
            <Zap className="w-3 h-3" />
            <span className="tracking-[0.18em] uppercase">How it works</span>
          </div>

          <h1 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.6rem] leading-tight tracking-[0.05em] text-white">
            User → youID → Business
          </h1>
          <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto text-white/80">
            A simple, visual flow of how a verification request travels from the
            user, through youID, to your organization.
          </p>
        </motion.div>

        {/* FLOWCHART ROW */}
        <motion.div
          ref={flowSectionRef}
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="hidden md:flex items-center justify-center gap-10 lg:gap-14 xl:gap-16">
            {/* USER NODE */}
            <div
ref={(el) => { if (el) cardRefs.current[0] = el; }}
              className="relative"
            >
              <div className="absolute -left-16 -bottom-10 hidden lg:block pointer-events-none">
                <img
                  src={PHONE_IMAGE_SRC}
                  alt="User phone"
                  className="w-40 xl:w-48 drop-shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
                />
              </div>

              <Card className="w-64 bg-black/75 border border-white/15 rounded-3xl shadow-[0_22px_80px_rgba(0,0,0,0.9)] relative z-10">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <Smartphone className="w-5 h-5 text-[#ffb57a]" />
                    <span>User</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="font-heading text-lg mb-3">
                    Start
                  </CardTitle>
                  <div className="space-y-2 text-[11px] uppercase tracking-wide text-white/70">
                    <div className="inline-flex items-center rounded-full border border-white/15 px-3 py-1">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
                      Clicks “Verify with youID”
                    </div>
                    <div
                      ref={userStatusRef}
                      className="inline-flex items-center gap-1 mt-1 rounded-full border border-[#33ff99]/60 bg-[#0b1b13] px-3 py-1 text-[11px] font-medium text-[#b5ffe0] opacity-0"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified profile</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ARROW 1 GROUP */}
            <div
ref={(el) => { if (el) arrowRefs.current[0] = el; }}
              className="relative flex items-center justify-center w-24"
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-white/0 via-white/70 to-white/0 opacity-60" />
              <div
ref={(el) => { if (el) tokenRefs.current[0] = el; }}
                className="absolute h-3 w-3 rounded-full bg-[#ff6a00] shadow-[0_0_10px_rgba(255,106,0,0.8)]"
              />
              <ArrowRight className="absolute right-0 w-5 h-5 text-white/80" />
            </div>

            {/* youID NODE */}
            <div
ref={(el) => { if (el) cardRefs.current[1] = el; }}
              className="relative"
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                <div className="rounded-2xl bg-black/80 border border-[#ff6a00]/70 backdrop-blur-md px-6 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
                  <img
                    src={YOU_ID_LOGO_SRC}
                    alt="youID"
                    className="h-7 xl:h-8"
                  />
                </div>
              </div>

              <Card className="w-72 bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f] border border-[#ff6a00]/50 rounded-3xl shadow-[0_26px_90px_rgba(0,0,0,0.95)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_60%)]" />
                <div className="relative">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <Shield className="w-5 h-5" />
                      <span>youID</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardTitle className="font-heading text-lg mb-3">
                      Verify
                    </CardTitle>
                    <div className="space-y-2 text-[11px] uppercase tracking-wide text-white/80">
                      <div className="inline-flex items-center rounded-full border border-white/25 px-3 py-1">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white" />
                        Alert in youID app
                      </div>
                      <div className="inline-flex items-center rounded-full border border-white/25 px-3 py-1">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white" />
                        Approve / Reject request
                      </div>
                      <div className="inline-flex items-center rounded-full border border-white/25 px-3 py-1">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white" />
                        Document &amp; age checks
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* ARROW 2 GROUP */}
            <div
ref={(el) => { if (el) arrowRefs.current[1] = el; }}
              className="relative flex items-center justify-center w-24"
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-white/0 via-white/70 to-white/0 opacity-60" />
              <div
ref={(el) => { if (el) tokenRefs.current[1] = el; }}
                className="absolute h-3 w-3 rounded-full bg-[#ff6a00] shadow-[0_0_10px_rgba(255,106,0,0.8)]"
              />
              <ArrowRight className="absolute right-0 w-5 h-5 text-white/80" />
            </div>

            {/* ORG NODE */}
            <div
ref={(el) => { if (el) cardRefs.current[2] = el; }}
              className="relative"
            >
              <div className="absolute -top-14 right-0 left-0 mx-auto hidden lg:flex justify-center">
                <div className="rounded-2xl bg-black/80 border border-white/40 backdrop-blur-md px-6 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
                  <img
                    src={ORG_LOGO_SRC}
                    alt="Organization"
                    className="h-7 xl:h-8"
                  />
                </div>
              </div>

              <Card className="w-64 bg-black/75 border border-white/15 rounded-3xl shadow-[0_22px_80px_rgba(0,0,0,0.9)]">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <Building2 className="w-5 h-5 text-[#ffb57a]" />
                    <span>Business</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="font-heading text-lg mb-3">
                    Result
                  </CardTitle>
                  <div className="space-y-2 text-[11px] uppercase tracking-wide text-white/70">
                    <div className="inline-flex items-center rounded-full border border-white/15 px-3 py-1">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white" />
                      Receives Pass / Fail
                    </div>
                    <div
                      ref={businessStatusRef}
                      className="inline-flex items-center gap-1 mt-1 rounded-full border border-[#33ff99]/60 bg-[#0b1b13] px-3 py-1 text-[11px] font-medium text-[#b5ffe0] opacity-0"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Access granted</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* MOBILE: condensed vertical flowchart */}
          <div className="md:hidden space-y-6">
            <Card className="bg-black/75 border border-white/15 rounded-3xl">
              <CardHeader className="pb-2">
                <div className="flex items-center gap- text-sm font-medium text-white">
                  <Smartphone className="w-5 h-5 text-[#ffb57a]" />
                  <span>User</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <CardTitle className="font-heading text-lg mb-2">
                  Start
                </CardTitle>
                <p className="text-xs text-white/75">
                  Clicks “Verify with youID”.
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowDown className="w-7 h-7 text-white/70" />
            </div>

            <Card className="bg-gradient-to-br from-[#1a0f00] via-[#2b1200] to-[#ff7a3f] border border-[#ff6a00]/50 rounded-3xl">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Shield className="w-5 h-5" />
                  <span>youID</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <CardTitle className="font-heading text-lg mb-2">
                  Verify
                </CardTitle>
                <p className="text-xs text-white/80">
                  App alert → approve / reject → checks.
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowDown className="w-7 h-7 text-white/70" />
            </div>

            <Card className="bg-black/75 border border-white/15 rounded-3xl">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Building2 className="w-5 h-5 text-[#ffb57a]" />
                  <span>Business</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <CardTitle className="font-heading text-lg mb-2">
                  Result
                </CardTitle>
                <p className="text-xs text-white/80">
                  Gets Pass / Fail and grants access.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="
              inline-flex items-center gap-2
              rounded-full px-10 py-3.5
              bg-gradient-to-r from-[#ff6a00] via-[#ff914d] to-[#ff6a00]
              text-black font-heading font-semibold
              shadow-[0_20px_60px_rgba(0,0,0,0.9)]
              hover:brightness-110
              border border-black/40
            "
          >
            Start using this flow
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
