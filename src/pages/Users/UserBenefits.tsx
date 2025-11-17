import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Card, CardContent } from "@/Components/ui/card";
import { Lock, Smile, Zap, CheckCircle, Eye, Shield } from "lucide-react";

const UserBenefits = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(to_bottom_right,#eee6ff,#ffffff,#ffe9d6)]">
      <Navigation />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            The Benefits of Using youID
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            youID isn’t just about faster verification — it’s about empowering
            you with ownership, safety, and simplicity in every digital
            interaction.
          </p>

          {/* GRID */}
          <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">

            {/* Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2">
              <Card className="h-full rounded-3xl bg-[#EDEAFF] shadow-md border-none">
                <CardContent className="p-7 space-y-3 text-left">
                  <Shield className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Your Privacy, Always Protected</h3>
                  <p className="text-gray-800">
                    youID never uploads or stores your documents. Your data
                    stays encrypted on your device.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Wide */}
            <div className="lg:col-span-8">
              <Card className="h-[220px] rounded-3xl bg-[#FFE4E9] shadow-md border-none">
                <CardContent className="p-7 text-left space-y-3">
                  <Zap className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Lightning-Fast Verification</h3>
                  <p className="text-gray-800">
                    No waiting or re-uploading. Instant identity checks.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Small Cards */}
            <div className="lg:col-span-4">
              <Card className="h-[200px] rounded-3xl bg-[#FFF9E6] shadow-md border-none">
                <CardContent className="p-7 space-y-3 text-left">
                  <Eye className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Transparent Access Control</h3>
                  <p className="text-gray-800">
                    Track every verification request. Revoke anytime.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4">
              <Card className="h-[200px] rounded-3xl bg-[#F5F9EF] shadow-md border-none">
                <CardContent className="p-7 space-y-3 text-left">
                  <Lock className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">End-to-End Encryption</h3>
                  <p className="text-gray-800">
                    Industry-leading protection for every action.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Large Cards */}
            <div className="lg:col-span-8">
              <Card className="h-[260px] rounded-3xl bg-[#FFECDD] shadow-md border-none">
                <CardContent className="p-7 space-y-3 text-left">
                  <Smile className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Frictionless Experience</h3>
                  <p className="text-gray-800">
                    One tap to verify. No repetition. No friction.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4">
              <Card className="h-[260px] rounded-3xl bg-[#EEF1F8] shadow-md border-none">
                <CardContent className="p-7 space-y-3 text-left">
                  <CheckCircle className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Total Ownership</h3>
                  <p className="text-gray-800">
                    Verification belongs to you — not centralized servers.
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
