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
  <svg width="90" height="30" viewBox="0 0 120 40">
    <path d="M0 20 H110" stroke="#60A5FA" strokeWidth="3" strokeDasharray="6 6" />
    <path d="M110 20 L100 10 M110 20 L100 30" stroke="#3B82F6" strokeWidth="3" />
  </svg>
);

const UserHowitWorks = () => {
  return (
    <>
      <Navigation />

      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">How it Works</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            Your complete journey through the youID app — from installation to verification.
          </p>

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.slice(0, 3).map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="w-56 md:w-60 h-[450px] md:h-[480px] rounded-3xl shadow-2xl overflow-hidden border bg-white">
                  <img src={step.image} className="w-full h-full object-cover" />
                </div>

                <h3 className="mt-5 font-semibold text-gray-900 text-lg text-center">{step.title}</h3>
                <p className="text-gray-600 text-center mt-2 max-w-xs">{step.desc}</p>

                {/* Arrow INSIDE grid cell */}
                {index < 2 && (
                  <div className="flex justify-center w-full mt-6 hidden md:block">
                    <Arrow />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* SPACING */}
          <div className="my-20"></div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.slice(3, 6).map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="w-56 md:w-60 h-[450px] md:h-[480px] rounded-3xl shadow-2xl overflow-hidden border bg-white">
                  <img src={step.image} className="w-full h-full object-cover" />
                </div>

                <h3 className="mt-5 font-semibold text-gray-900 text-lg text-center">{step.title}</h3>
                <p className="text-gray-600 text-center mt-2 max-w-xs">{step.desc}</p>

                {index < 2 && (
                  <div className="flex justify-center w-full mt-6 hidden md:block">
                    <Arrow />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default UserHowitWorks;
