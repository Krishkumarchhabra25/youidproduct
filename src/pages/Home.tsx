import { motion, useMotionValue, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import userMockup from "@/assets/images/underverification-Photoroom.png";
import userMockup2 from "@/assets/images/verifiedones-Photoroom.png";
import businessMockup from "@/assets/images/finalonedash.png";
import youidLogo from "@/assets/images/logo1id.png";

import { Button } from "@/Components/ui/button";

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
  }, [mouseX, mouseY]);

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
        flex flex-col 
        overflow-visible
        bg-[linear-gradient(90deg,#7a2e00_0%,#000000_50%,#7a2e00_100%)]
      "
    >
      {/* CENTER DIVIDER (DESKTOP) */}
      <div
        className="
          hidden md:block 
          absolute left-1/2 top-[120px] bottom-[40px] 
          w-[2px]
          z-20 
          bg-gradient-to-b 
          from-transparent 
          via-white/25 
          to-transparent
        "
      />

      {/* TOP BAR WITH LOGO (CUSTOM NAV) */}
      <div
        style={{
          background:
            "linear-gradient(90deg, #7a2e00 0%, #000000 50%, #7a2e00 100%)",
        }}
        className="
          fixed top-0 left-0 w-full h-[60px]
          border-b border-white/10 
          backdrop-blur-md shadow-sm 
          z-40 
          flex justify-center items-center
        "
      >
        <div className="flex items-center gap-2 text-white">
          <div className="relative h-40 md:h-40 w-auto">
            <img
              src={youidLogo}
              alt="youID Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="
          mt-24 md:mt-14
          px-6 md:px-0
          w-full 
          pb-10
        "
      >
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 
            gap-24 md:gap-8 lg:gap-12 xl:gap-16 
            w-full
            md:min-h-[calc(100vh-220px)]
          "
        >
          {/* USER SECTION */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="
              flex flex-col 
              justify-center
              items-center md:items-start
              text-center md:text-left
              md:pl-8 lg:pl-16 xl:pl-24 2xl:pl-32
              h-full
            "
          >
            <h1
              className="
                text-4xl font-extrabold text-white leading-tight
                w-full md:pl-0 md:self-start 
                md:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]
                font-heading
              "
            >
              <span className="text-[#FF6B35]">Verify Your Identity</span> <br />
              Without Surrendering
              <span className="text-[#FF6B35]"> Control.</span>
            </h1>

            <p
              className="
                text-lg text-gray-300 mt-4 
                md:pl-0 md:self-start 
                md:max-w-[450px] xl:max-w-[480px] 2xl:max-w-[500px]
                font-body
              "
            >
              Empowering users to verify their identity without uploading or
              sharing their identity documents.
            </p>

            <div
              className="
                relative w-full flex items-center justify-center 
                mt-12 md:mt-10 
                md:-translate-x-6 lg:-translate-x-8
              "
            >
              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2 
                  w-[75%] h-[70px]
                  rounded-full 
                  bg-[radial-gradient(circle,rgba(0,0,0,0.25),rgba(0,0,0,0))]
                  blur-xl z-0
                "
              />

              <div className="relative z-10 -rotate-[15deg] -translate-y-4 md:-translate-y-6 -mr-10 scale-[1.05]">
                <img
                  src={userMockup2}
                  alt="User Mockup Left"
                  className="
                    w-[210px] sm:w-[230px] 
                    md:w-[260px] lg:w-[260px] 
                    drop-shadow-2xl
                  "
                />
              </div>

              <div className="relative z-20 rotate-[15deg] -translate-y-4 md:-translate-y-8 scale-[1.05]">
                <img
                  src={userMockup}
                  alt="User Mockup Right"
                  className="
                    w-[200px] sm:w-[230px] 
                    md:w-[220px] lg:w-[220px] 
                    drop-shadow-2xl
                  "
                />
              </div>
            </div>

            {/* MOBILE BUTTON – UNDER IMAGE (USER) */}
            <div className="mt-8 md:hidden flex justify-center">
              <Button
                onClick={() => navigate("/user")}
                size="lg"
                className="
                  rounded-full px-8 py-3 text-lg shadow-lg 
                  text-white font-body
                  border border-white/20
                  bg-[linear-gradient(to_right,#b45309_0%,#b45309_40%,#000000_70%)]
                  hover:brightness-110
                "
              >
                I’m an User – know more
              </Button>
            </div>
          </motion.div>

          {/* BUSINESS SECTION */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="
              flex flex-col 
              justify-center
              items-center md:items-end 
              text-center md:text-right 
              md:pr-8 lg:pr-16 xl:pr-24 2xl:pr-32
              h-full
            "
          >
            <h1
              className="
                text-4xl font-extrabold text-white leading-tight 
                md:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]
                font-heading mt-8
              "
            >
              <span className="text-[#FF6B35]">Identity Verification </span>
              without the
              <span className="text-[#FF6B35]"> risks </span>
              and
              <span className="text-[#FF6B35]"> overheads.</span>
            </h1>

            <p
              className="
                text-lg text-gray-300 mt-4 
                md:max-w-[450px] xl:max-w-[480px] 2xl:max-w-[500px]
                font-body
              "
            >
              Empowering businesses to verify users securely without storing
              personal data, reducing risk and ensuring compliance.
            </p>

            <motion.img
              variants={popupUp(0.8)}
              src={businessMockup}
              alt="Business Dashboard"
              className="
                mt-10
                w-full 
                max-w-[460px] md:max-w-[520px] lg:max-w-[580px] md:ml-20
                mx-auto
              "
            />

            {/* MOBILE BUTTON – UNDER IMAGE (BUSINESS) */}
            <div className="mt-8 md:hidden flex justify-center">
              <Button
                onClick={() => navigate("/business")}
                size="lg"
                className="
                  rounded-full px-8 py-3 text-lg shadow-lg 
                  text-white font-body
                  border border-white/20
                  bg-[linear-gradient(to_right,#000000_0%,#000000_60%,#b45309_100%)]
                  hover:brightness-110
                "
              >
                I’m a Business – know more 
              </Button>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP BUTTONS - SEPARATE & CENTERED IN EACH SIDE */}
        <div className="hidden md:block absolute bottom-8 left-0 w-full z-40">
          <div className="grid grid-cols-2 w-full">
            {/* LEFT SIDE BUTTON - USER */}
            <div className="flex justify-center">
              <Button
                onClick={() => navigate("/user")}
                size="lg"
                className="
                  rounded-full px-8 py-3 text-lg shadow-lg 
                  text-white font-body
                  border border-white/20
                  bg-[linear-gradient(to_right,#b45309_0%,#b45309_40%,#000000_70%)]
                  hover:brightness-110
                "
              >
               I’m an User – know more
              </Button>
            </div>

            {/* RIGHT SIDE BUTTON - BUSINESS */}
            <div className="flex justify-center">
              <Button
                onClick={() => navigate("/business")}
                size="lg"
                className="
                  rounded-full px-8 py-3 text-lg shadow-lg 
                  text-white font-body
                  border border-white/20
                  bg-[linear-gradient(to_right,#000000_0%,#000000_60%,#b45309_100%)]
                  hover:brightness-110
                "
              >
                I’m a Business – know more 
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
