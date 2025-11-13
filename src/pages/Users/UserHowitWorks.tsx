import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import { Smartphone } from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";

const steps = [
  {
    id: 1,
    title: "Download the App",
    desc: "Visit Google Play Store, search for “youID”, and download the app. It’s free forever.",
  },
  {
    id: 2,
    title: "Register Your Account",
    desc: "Enter your mobile number, verify it with OTP, and get your unique youID (e.g., YUID-1234-5678).",
  },
  {
    id: 3,
    title: "Setup Biometric",
    desc: "Enable fingerprint or face unlock for secure approvals. No one can approve without you.",
  },
  {
    id: 4,
    title: "Add Your Documents",
    desc: "Scan passport or license, auto-extract details (OCR), and store securely on your phone.",
  },
  {
    id: 5,
    title: "Use Anywhere",
    desc: "Verify your identity instantly with one tap while keeping control of your data.",
  },
  {
    id: 6,
    title: "Stay in Control",
    desc: "View history, revoke access anytime, and manage your digital identity securely.",
  },
];

const UserHowitWorks = () => {
  return (
    <>
      <Navigation />

      <section className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          How it Works for <span className="text-blue-600">Users</span>
        </h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-20 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-center">
                  {/* Number circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-semibold w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10">
                    {step.id}
                  </div>

                  <div
                    className={`flex flex-col md:flex-row items-center w-full md:justify-between mt-10 md:mt-0 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Phone Image Placeholder */}
                    <div className="flex-1 flex justify-center">
                      <div className="w-48 h-96 bg-gray-100 rounded-3xl shadow-inner flex items-center justify-center">
                        <Smartphone className="w-12 h-12 text-gray-400" />
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 mt-10 md:mt-0">
                      <Card className="shadow-md border border-gray-200 rounded-2xl p-4 md:p-6 max-w-md mx-auto">
                        <CardContent className="p-0">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {step.desc}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UserHowitWorks;
