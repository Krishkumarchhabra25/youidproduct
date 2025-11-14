import { motion, useMotionValue, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import userMockup from "@/assets/images/youidproductmobilemokup.png";
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

{/* TOP BUTTONS — FIXED PROPERLY LEFT & RIGHT */}
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
    I’m a User — Get Started
  </Button>

  <Button
    onClick={() => navigate("/business")}
    size="lg"
    variant="outline"
    className="rounded-full px-6 py-3 text-lg shadow-sm"
  >
    I’m a Business — See Demo
  </Button>
</div>


      {/* CONTENT */}
      <div
        className="
        mt-24 
        px-6 md:px-16 lg:px-24 
        max-w-7xl mx-auto w-full 
        md:h-screen md:flex md:items-center
      "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-0">
{/* USER SECTION */}
<motion.div
  variants={fadeUp(0.2)}
  initial="hidden"
  animate="visible"
  className="
    flex flex-col 
    items-center md:items-start
    text-center md:text-left
    md:pl-0 md:ml-0
  "
>
  <div className="md:hidden mb-6">
    <Button
      onClick={() => navigate("/user")}
      className="rounded-full px-5 py-3 text-base shadow-sm"
    >
      I’m a User — Get Started
    </Button>
  </div>

  <h1 className="text-4xl font-extrabold text-gray-900 leading-tight w-full md:pl-0 md:self-start">
    Verify Your Identity <br />
    Without Surrendering Control.
  </h1>

  <p className="text-lg text-gray-600 max-w-md mt-4 md:pl-0 md:self-start">
    Empowering users to verify their identity without uploading or sharing their Identity documents.
  </p>

  <motion.img
    variants={popupUp(0.6)}
    src={userMockup}
    alt="User App"
    className="
      mt-10 
      w-[70%] max-w-[260px]
      md:w-[55%] md:max-w-[360px]
      mx-auto
    "
  />
</motion.div>




          {/* BUSINESS SECTION */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center md:items-end text-center md:text-right lg:ml-20"
          >
            <div className="md:hidden mb-6">
              <Button
                onClick={() => navigate("/business")}
                variant="outline"
                className="rounded-full px-5 py-3 text-base shadow-sm"
              >
                I’m a Business — See Demo
              </Button>
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight ">
              Identity Verification   without the risks and overheads.
            </h1>

            <p className="text-lg text-gray-600 max-w-md mt-4 md:ml-auto">
              Empowering businesses to verify users securely without storing personal data, reducing risk and ensuring compliance.
            </p>

            <motion.img
              variants={popupUp(0.8)}
              src={businessMockup}
              alt="Business Dashboard"
              className="
                mt-10 
                w-[80%] max-w-[320px]
                md:w-[30rem] lg:w-[36rem]
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
