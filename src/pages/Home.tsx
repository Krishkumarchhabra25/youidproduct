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
        flex flex-col 
        overflow-visible
        md:h-screen
        md:overflow-hidden

        bg-[linear-gradient(to_top,#000000_0%,#000000_25%,#1a0f00_60%,#261500_80%,#331a00_100%)]
      "
    >

      {/* CENTER DIVIDER (DESKTOP) */}
      <div className=" hidden md:block 
    absolute left-1/2 top-[120px] bottom-[40px] 
    w-[2px]
    z-20 
    bg-gradient-to-b 
    from-transparent 
    via-white/25 
    to-transparent"></div>

{/* NAVBAR */}
<div
  style={{
    background:
      "linear-gradient(90deg, #000000 0%, #120800 20%, #b45309 45%, #e85c2e 50%, #b45309 55%, #120800 80%, #000000 100%)",
  }}
  className="
    fixed top-0 left-0 w-full h-[60px]
    border-b border-white/10 
    backdrop-blur-md shadow-sm 
    z-40 
    flex justify-center items-center
  "
>
  <div className="flex items-center gap-2 text-white font-semibold text-3xl">
    <ShieldCheck className="w-6 h-6 text-white" />
    <span>YouID</span>
  </div>
</div>



      {/* TOP BUTTONS (DESKTOP) */}
      <div
        className="
          hidden md:flex 
          fixed top-[70px] left-0 w-full 
          z-30 
          justify-between items-center
          px-6
        "
      >
<Button
  onClick={() => navigate('/user')}
  size="lg"
  className="
    rounded-full px-6 py-3 text-lg shadow-sm 
    text-white 
    border border-white/20
    bg-[linear-gradient(to_right,#b45309_0%,#b45309_40%,#000000_70%)]
    hover:brightness-110
  "
>
  I'm a User — Get Started
</Button>



 <Button
  onClick={() => navigate('/business')}
  size="lg"
  className="
    rounded-full px-6 py-3 text-lg shadow-sm 
    text-white 
    border border-white/20
    bg-[linear-gradient(to_right,#000000_0%,#000000_60%,#b45309_100%)]
    hover:brightness-110
  "
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
<h1 className="text-4xl font-extrabold text-white leading-tight w-full md:mt-10 lg:mt-10 md:pl-0 md:self-start md:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]">

  <span className="text-[#FF6B35]">Verify Your Identity</span> <br />

  Without Surrendering 
  <span className="text-[#FF6B35]"> Control.</span>

</h1>


            <p className="text-lg text-gray-300 max-w-md mt-4 md:pl-0 md:self-start md:max-w-[450px] xl:max-w-[480px] 2xl:max-w-[500px]">
              Empowering users to verify their identity without uploading or sharing their identity documents.
            </p>

            {/* USER MOCKUPS */}
            <div className="relative w-full flex items-center justify-center mt-12 md:mt-10 
              md:-translate-x-6 lg:-translate-x-8">

              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[65px]
                rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.25),rgba(0,0,0,0))]
                blur-xl z-0"
              />

              <div className="relative z-10 -rotate-[15deg] -translate-y-4 md:-translate-y-6 -mr-10 scale-[1.03]">
                <img
                  src={userMockup2}
                  alt="User Mockup Left"
                  className="w-[180px] sm:w-[180px] md:w-[250px] lg:w-[250px] drop-shadow-2xl"
                />
              </div>

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
            className="
              flex flex-col 
              items-center md:items-end 
              text-center md:text-right 
              md:pr-8 lg:pr-16 xl:pr-24 2xl:pr-32
            "
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

      <h1 className="text-4xl font-extrabold text-white leading-tight md:mt-10 lg:mt-10 md:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]">

  <span className="text-[#FF6B35]">Identity Verification </span>  
   without the 
  <span className="text-[#FF6B35]"> risks </span> 
  and 
  <span className="text-[#FF6B35]"> overheads.</span>

</h1>


            <p className="text-lg text-gray-300 mt-4 md:max-w-[450px] xl:max-w-[480px] 2xl:max-w-[500px]">
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
