import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Card, CardContent } from "@/Components/ui/card";
import { Lock, Smile, Zap, CheckCircle, Eye, Shield } from "lucide-react";

const UserBenefits = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7]">
      <Navigation />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            The Benefits of Using youID
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            youID isn’t just about faster verification — it’s about empowering
            you with ownership, safety, and simplicity in every digital
            interaction.
          </p>

          {/* RESPONSIVE GRID */}
          <div
            className="
              grid gap-6 max-w-6xl mx-auto
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-12
            "
          >
            {/* TALL CARD (LEFT) */}
            <div className="lg:col-span-4 lg:row-span-2">
              <Card className="h-full bg-[#EDEAFF] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3">
                  <Shield className="h-9 w-9 text-gray-800" />
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    Your Privacy, Always Protected
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    youID never uploads or stores your documents. Your data 
                    stays encrypted on your device — under your control.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* WIDE CARD */}
            <div className="lg:col-span-8">
              <Card className="h-[200px] sm:h-[220px] bg-[#FFE4E9] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3">
                  <Zap className="h-9 w-9 text-gray-800" />
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    Lightning-Fast Verification
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    Verify your identity anywhere in just seconds. No waiting 
                    for manual checks or re-uploads.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* SMALL CARD 1 */}
            <div className="lg:col-span-4">
              <Card className="h-[200px] bg-[#FFF9E6] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3">
                  <Eye className="h-9 w-9 text-gray-800" />
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    Transparent Access Control
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    Track every verification request, know who accessed your 
                    data, and revoke access anytime.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* SMALL CARD 2 */}
            <div className="lg:col-span-4">
              <Card className="h-[200px] bg-[#F5F9EF] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3">
                  <Lock className="h-9 w-9 text-gray-800" />
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    End-to-End Encryption
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    Every interaction is protected by industry-leading 
                    encryption standards.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* LARGE CARD LEFT */}
            <div className="lg:col-span-8">
              <Card className="h-[260px] bg-[#FFECDD] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3">
                  <Smile className="h-9 w-9 text-gray-800" />
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    Frictionless Experience
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    A single tap to verify — no forms, no scans, no repetition. 
                    Identity made truly effortless.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* LARGE CARD RIGHT */}
            <div className="lg:col-span-4">
              <Card className="h-[260px] bg-[#EEF1F8] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3">
                  <CheckCircle className="h-9 w-9 text-gray-800" />
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    Total Ownership
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    youID redefines identity — giving control back to you, not 
                    centralized servers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserBenefits;
