import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Card, CardContent } from "@/Components/ui/card";
import { Lock, Smile, Zap, CheckCircle, Eye, Shield } from "lucide-react";

const BusinessBenefits = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(to_bottom_right,#eee6ff,#ffffff,#ffe9d6)]">
      <Navigation />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Why Businesses Trust youID
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            youID gives businesses a faster, safer, and fully compliant way to
            verify customers — without storing documents or taking security risks.
          </p>

          {/* GRID */}
          <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">

            {/* Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 flex">
              <Card className="rounded-3xl bg-[#EDEAFF] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <Shield className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Zero Data Liability</h3>
                  <p className="text-gray-800">
                    Businesses never store customer documents. This eliminates
                    breach risks, reduces compliance complexity, and ensures
                    instant trust with customers.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Wide */}
            <div className="lg:col-span-8 flex">
              <Card className="rounded-3xl bg-[#FFE4E9] shadow-md border-none flex-1">
                <CardContent className="p-7 text-left space-y-3">
                  <Zap className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">
                    Faster Customer Onboarding
                  </h3>
                  <p className="text-gray-800">
                    No uploads, no waiting. Customers verify instantly, reducing
                    drop-offs and accelerating conversions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Small Cards */}
            <div className="lg:col-span-4 flex">
              <Card className="rounded-3xl bg-[#FFF9E6] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <Eye className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Transparent Request Control</h3>
                  <p className="text-gray-800">
                    Customers see exactly what data is being requested, helping
                    businesses build trust and reduce verification rejection rates.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4 flex">
              <Card className="rounded-3xl bg-[#F5F9EF] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <Lock className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Secure & Compliant by Design</h3>
                  <p className="text-gray-800">
                    End-to-end encryption ensures your business meets data
                    protection requirements without needing extra infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Large Cards */}
            <div className="lg:col-span-8 flex">
              <Card className="rounded-3xl bg-[#FFECDD] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <Smile className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Frictionless Customer Experience</h3>
                  <p className="text-gray-800">
                    One-tap verification means less churn, higher satisfaction,
                    and smoother onboarding for every customer.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4 flex">
              <Card className="rounded-3xl bg-[#EEF1F8] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <CheckCircle className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Reduced Fraud & Manual Work</h3>
                  <p className="text-gray-800">
                    Automated verification reduces manual checks, lowers fraud
                    attempts, and cuts operational workload significantly.
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

export default BusinessBenefits;
