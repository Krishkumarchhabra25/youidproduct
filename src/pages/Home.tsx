import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  // 🎯 Use Framer Motion values for smooth movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 🌀 Apply spring smoothing to the motion
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 125); // Center the circle (half of its size)
      mouseY.set(e.clientY - 125);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  });

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-white text-center overflow-hidden">
      {/* 🌌 Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-3xl opacity-60 animate-pulse delay-700" />
      </div>

      {/* 💠 Subtle grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03),transparent_80%)] pointer-events-none"></div>

      {/* 🌈 Smooth circular mouse-following glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[250px] h-[250px] rounded-full blur-3xl opacity-50"
        style={{
          x: smoothX,
          y: smoothY,
          background:
            "radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(50,50,50,0.1) 60%, transparent 100%)",
        }}
      />



      {/* 🪄 Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl space-y-8 px-6"
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp(0.2)}>
          <Badge variant="secondary" className="text-base md:text-lg px-4 py-1.5">
            One Platform • For Users & Businesses
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp(0.4)}
          className="text-5xl md:text-7xl font-extrabold leading-tight text-black tracking-tight"
        >
          Verify Identities Instantly. <br />
          <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
            Protect Privacy Completely.
          </span>
        </motion.h1>

<motion.p
  variants={fadeUp(0.6)}
  className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed"
>
  For users, youID is digital freedom a single identity that’s private, fast, and universally trusted.
  <br />
  For businesses, it’s a smarter, safer way to verify customers and build instant trust.
</motion.p>



        <motion.div
          variants={fadeUp(0.8)}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button
            onClick={() => navigate("/user")}
            size="lg"
            variant="secondary"
            className="text-lg px-10 py-6 shadow-sm hover:shadow-md transition-all hover:scale-105"
          >
            I’m a User  Get the App
          </Button>
          <Button
            onClick={() => navigate("/business")}
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6 bg-black/10 text-black border-black/20 hover:bg-black/20 hover:scale-105 transition-all"
          >
            I’m a Business  Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
