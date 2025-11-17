import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

import step1Img from "../../assets/images/Image (1).jpg";
import step2Img from "../../assets/images/Image (2).jpg";
import step3Img from "../../assets/images/Image (3).jpg";
import step4Img from "../../assets/images/Image (4).jpg";
import step5Img from "../../assets/images/Image (5).jpg";
import step6Img from "../../assets/images/Image (6).jpg";

const steps = [
  { id: 1, title: "Download the App", desc: "Get youID from Play Store or App Store.", image: step1Img },
  { id: 2, title: "Sign In / Create Account", desc: "Log in or create an account instantly.", image: step2Img },
  { id: 3, title: "Documents Dashboard", desc: "View verified, rejected & pending docs.", image: step3Img },
  { id: 4, title: "Upload Document", desc: "Choose a document & upload it for verification.", image: step4Img },
  { id: 5, title: "Profile & Security", desc: "Manage security, biometrics & history.", image: step5Img },
  { id: 6, title: "Verification Complete", desc: "Approve quickly with biometric verification.", image: step6Img },
];

const Arrow = () => (
  <svg width="120" height="40" className="hidden md:block">
    <path d="M0 20 H110" stroke="#60A5FA" strokeWidth="3" strokeDasharray="6 6" />
    <path d="M110 20 L100 10 M110 20 L100 30" stroke="#3B82F6" strokeWidth="3" />
  </svg>
);

const UserHowitWorks = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom_right,#eee6ff,#ffffff,#ffe9d6)]">
      <Navigation />

      <section className="w-full py-24 px-6 md:px-10 overflow-hidden">

        {/* Page Title */}
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-6">
          How It Works
        </h2>

        <p className="text-black/70 text-center max-w-2xl mx-auto mb-16 text-lg">
          Your complete journey through the youID app — from installation to verification.
        </p>

        {/* ------------------ ROW 1 ------------------ */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">

          {steps.slice(0, 3).map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative">

              {/* Mobile UI Frame */}
              <div className="w-64 h-[430px] rounded-[32px] overflow-hidden shadow-xl bg-white">
                <img src={step.image} className="w-full h-full object-cover" alt={step.title} />
              </div>

              <h3 className="text-black text-lg font-semibold mt-4 text-center">
                {step.title}
              </h3>

              <p className="text-black/70 text-sm mt-1 max-w-xs text-center">
                {step.desc}
              </p>

              {index < 2 && (
                <div className="absolute right-[-90px] top-[170px]">
                  <Arrow />
                </div>
              )}
            </div>
          ))}

        </div>

        <div className="my-24"></div>

        {/* ------------------ ROW 2 ------------------ */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">

          {steps.slice(3, 6).map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative">

              <div className="w-64 h-[430px] rounded-[32px] overflow-hidden shadow-xl bg-white">
                <img src={step.image} className="w-full h-full object-cover" alt={step.title} />
              </div>

              <h3 className="text-black text-lg font-semibold mt-4 text-center">
                {step.title}
              </h3>

              <p className="text-black/70 text-sm mt-1 max-w-xs text-center">
                {step.desc}
              </p>

              {index < 2 && (
                <div className="absolute right-[-90px] top-[170px]">
                  <Arrow />
                </div>
              )}
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </div>
  );
};

export default UserHowitWorks;
