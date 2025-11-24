import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Card, CardContent } from "@/Components/ui/card";
import { 
  ShieldCheck,
  Lock,
  TrendingDown,
  Zap,
  HeartHandshake,
  Globe,
  TrendingUp
} from "lucide-react";

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
            youID gives businesses a safe, compliant, and document-free identity verification
            flow that strengthens security, reduces operational burden, and increases customer trust.
          </p>

          {/* GRID */}
          <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">

            {/* 1. Reduced Compliance Risk */}
            <div className="lg:col-span-4 flex">
              <Card className="rounded-3xl bg-[#EDEAFF] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <ShieldCheck className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Reduced Compliance Risk</h3>
                  <p className="text-gray-600 text-sm">Effortlessly meet global privacy and security standards.</p>
                  <p className="text-gray-800">
                    Businesses avoid storing sensitive identity documents, minimizing exposure 
                    to breaches and regulatory violations like GDPR.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 2. Enhanced Data Security */}
            <div className="lg:col-span-8 flex">
              <Card className="rounded-3xl bg-[#FFE4E9] shadow-md border-none flex-1">
                <CardContent className="p-7 text-left space-y-3">
                  <Lock className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Enhanced Data Security</h3>
                  <p className="text-gray-600 text-sm">Strong encryption and zero-document handling built in.</p>
                  <p className="text-gray-800">
                    Eliminates document handling, reducing risks of leaks, theft, or misuse 
                    of personal information.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 3. Lower Operational Costs */}
            <div className="lg:col-span-4 flex">
              <Card className="rounded-3xl bg-[#FFF9E6] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <TrendingDown className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Lower Operational Costs</h3>
                  <p className="text-gray-600 text-sm">Reduce manual reviews and document management expenses.</p>
                  <p className="text-gray-800">
                    No document systems, no secure storage, no manual checks — saving time, 
                    resources, and money.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 4. Faster Customer Onboarding */}
            <div className="lg:col-span-8 flex">
              <Card className="rounded-3xl bg-[#FFECDD] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <Zap className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Faster Customer Onboarding</h3>
                  <p className="text-gray-600 text-sm">Speed up sign-ups with a seamless and intuitive flow.</p>
                  <p className="text-gray-800">
                    Instant, upload-free verification improves user experience 
                    and increases conversion rates.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 5. Increased Customer Trust */}
            <div className="lg:col-span-4 flex">
              <Card className="rounded-3xl bg-[#F0F7FF] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <HeartHandshake className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Increased Customer Trust</h3>
                  <p className="text-gray-600 text-sm">A transparent process that boosts confidence.</p>
                  <p className="text-gray-800">
                    A privacy-first, secure process builds confidence and positively 
                    strengthens brand reputation.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 6. Scalability & Global Compliance */}
            <div className="lg:col-span-6 flex">
              <Card className="rounded-3xl bg-[#FFF3D9] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <Globe className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Scalability & Global Compliance</h3>
                  <p className="text-gray-600 text-sm">Easily expand your operations across borders.</p>
                  <p className="text-gray-800">
                    Designed to work across jurisdictions without document handling, 
                    simplifying global expansion.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 7. Competitive Advantage */}
            <div className="lg:col-span-6 flex">
              <Card className="rounded-3xl bg-[#E8FFF1] shadow-md border-none flex-1">
                <CardContent className="p-7 space-y-3 text-left">
                  <TrendingUp className="h-9 w-9 text-gray-900" />
                  <h3 className="text-xl font-semibold">Competitive Advantage</h3>
                  <p className="text-gray-600 text-sm">Offer a modern, frictionless verification experience.</p>
                  <p className="text-gray-800">
                    A frictionless, secure verification flow helps businesses stand apart 
                    in a crowded digital market.
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
