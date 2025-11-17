import { motion, useMotionValue, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import userMockup from "@/assets/images/usermokup1.png";
import userMockup2 from "@/assets/images/usermodkup2.png";

import businessMockup from "@/assets/images/finalonedash.png";
import { Button } from "@/Components/ui/button";
import { ShieldCheck } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 125);
      mouseY.set(e.clientY - 125);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.7 } },
  });

  const popupUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay, duration: 1 },
    },
  });

  return (
    <section
      className="
        relative 
        min-h-screen 
        bg-[#f8f7fc] 
        flex flex-col 
        overflow-visible
        md:h-screen
        md:overflow-hidden
      "
    >
      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm z-40 flex justify-center items-center py-3">
        <div className="flex items-center gap-2 text-gray-900 font-semibold text-xl">
          <ShieldCheck className="w-6 h-6 text-indigo-500" />
          <span>YouID</span>
        </div>
      </div>

      {/* TOP BUTTONS */}
      <div
        className="
          hidden md:flex 
          fixed top-[70px] left-0 w-full 
          z-30 
          justify-between items-center
          px-6
          md:translate-y-[-10px]
        "
      >
        <Button
          onClick={() => navigate("/user")}
          size="lg"
          className="rounded-full px-6 py-3 text-lg shadow-sm bg-white text-gray-900 hover:bg-gray-100"
        >
          I'm a User — Get Started
        </Button>

        <Button
          onClick={() => navigate("/business")}
          size="lg"
          variant="outline"
          className="rounded-full px-6 py-3 text-lg shadow-sm"
        >
          I'm a Business — See Demo
        </Button>
      </div>

      {/* CONTENT */}
      <div
        className="
          mt-24 
          px-6 md:px-0
          w-full 
          md:h-screen md:flex md:items-center
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-8 lg:gap-12 xl:gap-16 w-full">

          {/* USER SECTION */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="
              flex flex-col 
              items-center md:items-start
              text-center md:text-left
              md:pl-8 lg:pl-16 xl:pl-24 2xl:pl-32
              md:mb-20
            "
          >
            <div className="md:hidden mb-6">
              <Button
                onClick={() => navigate("/user")}
                className="rounded-full px-5 py-3 text-base shadow-sm"
              >
                I'm a User — Get Started
              </Button>
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight w-full md:mt-10 lg:mt-10 md:pl-0 md:self-start md:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]">
              Verify Your Identity <br />
              Without Surrendering Control.
            </h1>

            <p className="text-lg text-gray-600 max-w-md mt-4 md:pl-0 md:self-start md:max-w-[450px] xl:max-w-[480px] 2xl:max-w-[500px]">
              Empowering users to verify their identity without uploading or sharing their identity documents.
            </p>

            {/* UPDATED CENTERED MOCKUPS */}
            <div className="relative w-full flex items-center justify-center mt-12 md:mt-10 
              md:-translate-x-6 lg:-translate-x-8">

              {/* Glow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[65px]
                  rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.25),rgba(0,0,0,0))]
                  blur-xl z-0"
              />

              {/* LEFT tilted phone */}
              <div className="relative z-10 -rotate-[15deg] -translate-y-4 md:-translate-y-6 -mr-10 scale-[1.03]">
                <img
                  src={userMockup2}
                  alt="User Mockup Left"
                  className="w-[180px] sm:w-[180px] md:w-[250px] lg:w-[250px] drop-shadow-2xl"
                />
              </div>

              {/* RIGHT tilted phone */}
              <div className="relative z-20 rotate-[15deg] -translate-y-4 md:-translate-y-8">
                <img
                  src={userMockup}
                  alt="User Mockup Right"
                  className="w-[170px] sm:w-[180px] md:w-[260px] lg:w-[260px] drop-shadow-2xl"
                />
              </div>

            </div>

          </motion.div>

          {/* BUSINESS SECTION */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center md:items-end text-center md:text-right md:pr-8 lg:pr-16 xl:pr-24 2xl:pr-32"
          >
            <div className="md:hidden mb-6">
              <Button
                onClick={() => navigate("/business")}
                variant="outline"
                className="rounded-full px-5 py-3 text-base shadow-sm"
              >
                I'm a Business — See Demo
              </Button>
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight md:mt-10 lg:mt-10 md:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]">
              Identity Verification without the risks and overheads.
            </h1>

            <p className="text-lg text-gray-600 mt-4 md:max-w-[450px] xl:max-w-[480px] 2xl:max-w-[500px]">
              Empowering businesses to verify users securely without storing personal data, reducing risk and ensuring compliance.
            </p>

            <motion.img
              variants={popupUp(0.8)}
              src={businessMockup}
              alt="Business Dashboard"
              className="
                mt-10
                w-full 
                max-w-[420px] md:max-w-[480px] lg:max-w-[520px]
                mx-auto
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
