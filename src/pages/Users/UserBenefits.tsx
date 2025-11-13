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

          {/* ✅ Grid layout with uniform text alignment */}
          <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto">
            {/* Tall Card (left) */}
            <div className="col-span-4 row-span-2">
              <Card className="h-full bg-[#EDEAFF] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3">
                  <Shield className="h-9 w-9 text-gray-800" />
                  <h3 className="text-[1.25rem] font-semibold text-gray-900 leading-snug">
                    Your Privacy, Always Protected
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    youID never uploads or stores your documents. Your data stays
                    encrypted on your device — under your control.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Wide Card (top right) */}
            <div className="col-span-8">
              <Card className="h-[200px] bg-[#FFE4E9] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3 justify-start">
                  <Zap className="h-9 w-9 text-gray-800" />
                  <h3 className="text-[1.25rem] font-semibold text-gray-900 leading-snug">
                    Lightning-Fast Verification
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    Verify your identity anywhere in just seconds. No waiting for
                    manual checks or re-uploads.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Two Small Cards */}
            <div className="col-span-4">
              <Card className="h-[200px] bg-[#FFF9E6] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3 justify-start">
                  <Eye className="h-4 w-9 text-gray-800" />
                  <h3 className="text-[1.25rem] font-semibold text-gray-900 leading-snug">
                    Transparent Access Control
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    Track every verification request, know who accessed your data,
                    and revoke access anytime.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-4">
              <Card className="h-[200px] bg-[#F5F9EF] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3 justify-start">
                  <Lock className="h-5 w-9 text-gray-800" />
                  <h3 className="text-[1.25rem] font-semibold text-gray-900 leading-snug">
                    End-to-End Encryption
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    Every interaction between your device and a verifier is
                    protected by industry-leading encryption standards.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Row */}
            <div className="col-span-8">
              <Card className="h-[260px] bg-[#FFECDD] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3 justify-start">
                  <Smile className="h-9 w-9 text-gray-800" />
                  <h3 className="text-[1.25rem] font-semibold text-gray-900 leading-snug">
                    Frictionless Experience
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    A single tap to verify — no forms, no scans, no repetition.
                    Identity made truly effortless.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-4">
              <Card className="h-[260px] bg-[#EEF1F8] rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-7 text-left flex flex-col space-y-3 justify-start">
                  <CheckCircle className="h-9 w-9 text-gray-800" />
                  <h3 className="text-[1.25rem] font-semibold text-gray-900 leading-snug">
                    Total Ownership
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    youID redefines identity — giving control back to you, not
                    centralized servers or third parties.
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
