import { motion, useMotionValue, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import userMockup from "@/assets/images/homeherohone1.png";
import userMockup2 from "@/assets/images/homeheromobile2.png";
import businessMockup from "@/assets/images/finalonedash.png";
import youidLogo from "@/assets/images/logo1id.png";

// background image from your design
import heroBg from "@/assets/images/YouID 3.png";

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
        overflow-hidden
        bg-black
      "
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* subtle dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

     {/* YOUiD LOGO – static on mobile, absolute on desktop */}
<div
  className="
    z-40
    flex justify-center
    relative
    md:absolute md:left-1/2 md:-translate-x-1/2
  "
>
  <img
    src={youidLogo}
    alt="youID Logo"
    className="
      w-[150px] h-[120px]
      md:w-[198px] md:h-[170px]
      object-contain
      mt-1 md:mt-0
    "
  />
</div>


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

      {/* MAIN CONTENT */}
   {/* MAIN CONTENT */}
<div
  className="
    relative
    pt-14 md:pt-32        // ⬅️ was pt-24, now smaller on mobile
    px-5 md:px-0
    w-full 
    pb-10
    z-30
  "
>

        <div
          className="
            grid grid-cols-1 md:grid-cols-2 
            gap-14 md:gap-8 lg:gap-10 xl:gap-12 
            w-full
            md:min-h-[calc(100vh-200px)]
          "
        >
          {/* USER SECTION */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="
              flex flex-col 
              justify-start md:justify-center
              items-center
              text-center
              h-full
            "
          >
            {/* Phones on top */}
       {/* Phones on top */}
<div
  className="
    relative w-full flex items-center justify-center 
    mt-1 md:mt-0          // ⬅️ was mt-4
  "
>

              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2 
                  w-[220px] h-[50px]
                  md:w-[260px] md:h-[60px]
                  rounded-full 
                  bg-[radial-gradient(circle,rgba(0,0,0,0.25),rgba(0,0,0,0))]
                  blur-xl z-0
                "
              />

              <div className="relative z-10 -rotate-[15deg] -mr-4 md:-mr-6">
                <img
                  src={userMockup2}
                  alt="User Mockup Left"
                  className="w-[130px] md:w-[150px] drop-shadow-2xl"
                />
              </div>

              <div className="relative z-20 rotate-[15deg]">
                <img
                  src={userMockup}
                  alt="User Mockup Right"
                  className="w-[130px] md:w-[150px] drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Heading */}
<h1
  className="
    mt-8 md:mt-10
    font-heading font-extrabold text-white 
    leading-tight
    max-w-[310px] sm:max-w-[360px] md:max-w-full
    text-[26px] sm:text-[30px] md:text-[40px]
    tracking-[0.54px]
  "
>
  Verify Your <span className="text-[#FF6B35]">Identity</span>{" "}
  Without Surrendering{" "}
  <span className="text-[#FF6B35]">Control.</span>
</h1>


            {/* Subheading */}
            <p
              className="
                mt-6 md:mt-8
                font-body text-gray-300 
                max-w-[330px] md:max-w-[565px]
                text-[15px] sm:text-[16px] md:text-[20px]
                leading-snug
              "
            >
              Empowering users to verify their identity without <br />
              uploading or sharing their identity documents.
            </p>

            {/* Label + Button – centered under paragraph */}
            <div className="mt-8 md:mt-10 flex flex-col items-center gap-3">
              <p className="text-sm sm:text-base md:text-lg text-white font-body">
                I&apos;m a user
              </p>

              <Button
                onClick={() => navigate("/user")}
                size="lg"
                className="
                  rounded-md 
                  px-6 py-2.5 text-sm
                  md:px-8 md:py-3 md:text-base
                  shadow-lg 
                  text-white font-body
                  bg-[#FF6B35]
                  hover:bg-[#ff824d]
                "
              >
                Know more
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
              justify-start md:justify-center
              items-center
              text-center
              h-full
            "
          >
            {/* Laptop on top */}
            <motion.img
              variants={popupUp(0.8)}
              src={businessMockup}
              alt="Business Dashboard"
              className="
                mt-6 md:mt-0
                w-[230px] sm:w-[260px] md:w-[430px] lg:w-[493px]
                mx-auto
              "
            />

            {/* Heading */}
            <h1
              className="
                mt-8 md:mt-10
                font-heading font-extrabold text-white 
                leading-tight 
                max-w-[320px] md:max-w-full
                text-[26px] sm:text-[30px] md:text-[40px]
                tracking-[0.54px]
              "
            >
              Identity Verification without 
              the <span className="text-[#FF6B35]">risks</span> and
              <span className="text-[#FF6B35]"> overheads.</span>
            </h1>

            {/* Subheading */}
            <p
              className="
                mt-6 md:mt-8
                font-body text-gray-300 
                max-w-[340px] md:max-w-[640px]
                text-[15px] sm:text-[16px] md:text-[20px]
                leading-snug
              "
            >
              Empowering businesses to verify users securely <br />
              without storing personal data, reducing risk and ensuring
              compliance.
            </p>

            {/* Label + Button – centered */}
            <div className="mt-8 md:mt-6 flex flex-col items-center gap-3">
              <p className="text-sm sm:text-base md:text-lg text-white font-body">
                I&apos;m a business
              </p>

              <Button
                onClick={() => navigate("/business")}
                size="lg"
                className="
                  rounded-md 
                  px-6 py-2.5 text-sm
                  md:px-8 md:py-3 md:text-base
                  shadow-lg 
                  text-white font-body
                  bg-[#FF6B35]
                  hover:bg-[#ff824d]
                "
              >
                Know more
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
