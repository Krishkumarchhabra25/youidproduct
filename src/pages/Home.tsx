import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import userMockup from "@/assets/images/youidproductmobilemokup.png";
import businessMockup from "@/assets/images/finalonedash.png";
import { Button } from "@/Components/ui/button";
import { ShieldCheck } from "lucide-react"; // security icon from lucide-react

const Home = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 125);
      mouseY.set(e.clientY - 125);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    },
  });

  const popupUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 120, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay, duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    },
  });

  const handleUserClick = () => {
    setIsTransitioning(true);
    setTimeout(() => navigate("/user"), 700);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f8f7fc] overflow-hidden">
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-gradient-radial from-white/70 via-white/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[250px] h-[250px] rounded-full blur-3xl opacity-30"
        style={{
          x: smoothX,
          y: smoothY,
          background:
            "radial-gradient(circle, rgba(180,180,255,0.25) 0%, rgba(230,230,255,0.1) 60%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={isTransitioning ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="fixed inset-0 bg-white z-[100]"
      />

      {/* --- Top header bar --- */}
      <div className="fixed top-0 left-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm z-40 flex justify-center items-center py-3">
        <div className="flex items-center gap-2 text-gray-900 font-semibold text-xl">
          <ShieldCheck className="w-6 h-6 text-indigo-500" />
          <span className="tracking-tight">YouID</span>
        </div>
      </div>

      {/* --- Fixed top buttons --- */}
      <div className="fixed top-16 left-4 z-50">
        <Button
          onClick={handleUserClick}
          size="lg"
          className="flex items-center gap-3 text-lg px-4 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-full shadow-sm"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            focusable="false"
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>I'm a User — Get Started</span>
        </Button>
      </div>

      <div className="fixed top-16 right-4 z-50">
        <Button
          onClick={() => navigate("/business")}
          size="lg"
          variant="outline"
          className="flex items-center gap-3 text-lg px-4 py-3 border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 rounded-full shadow-sm"
        >
          <span>I'm a Business — See Demo</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            focusable="false"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>

      {/* --- Main content --- */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x divide-gray-200 px-8 md:px-16 lg:px-24 mt-19"
      >
        {/* Left - User section */}
        <motion.div
          variants={fadeUp(0.2)}
          className="flex flex-col justify-start items-start py-12 md:py-11 pr-0 md:pr-16 relative min-h-[600px] md:min-h-[700px]"
        >
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-14 text-left md:text-left">
            Verify Your Identity Without Surrendering Control.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md mt-6">
           Empowering users to verify their identity without uploading or sharing their Identity documents.
          </p>

          <motion.img
            variants={popupUp(0.6)}
            src={userMockup}
            alt="User App Mockup"
            className="absolute bottom-[-4rem] md:bottom-[-4rem] right-1/2 md:right-auto md:right-0 transform -translate-x-1/2 md:translate-x-0 w-72 md:w-[20rem] lg:w-[23rem] drop-shadow-2xl"
          />
        </motion.div>

        {/* Right - Business section */}
        <motion.div
          variants={fadeUp(0.4)}
          className="flex flex-col justify-start items-start md:items-end py-12 md:py-20 pl-0 md:pl-20 relative min-h-[600px] md:min-h-[700px] mt-96 md:mt-0"
        >
          <h1 className="text-5xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-6 text-left md:text-right">
            Identity Verification without the risks and overheads.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md md:ml-auto text-left md:text-right mt-6">
            Empowering businesses to verify users securely without storing personal data reducing risk and ensuring compliance.
          </p>

          <motion.img
            variants={popupUp(0.8)}
            src={businessMockup}
            alt="Business Dashboard Mockup"
            className="absolute bottom-20 md:bottom-0 left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-0 w-72 md:w-[30rem] lg:w-[36rem] drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
