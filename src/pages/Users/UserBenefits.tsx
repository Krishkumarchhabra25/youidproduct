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

  {/* 1 — Privacy Protection (Tall Card) */}
  <div className="lg:col-span-4 lg:row-span-2">
    <Card className="h-full rounded-3xl bg-[#EDEAFF] shadow-md border-none">
      <CardContent className="p-7 space-y-3 text-left">
        <Shield className="h-9 w-9 text-gray-900" />
        <h3 className="text-xl font-semibold">Privacy Protection</h3>
        <p className="text-gray-800">
          Users never have to upload or share sensitive identity documents, reducing the risk of data 
          breaches or misuse.
        </p>
        <p className="text-gray-600 text-sm">Stay protected everywhere.</p>
      </CardContent>
    </Card>
  </div>

  {/* 2 — Faster Verification (Wide Card) */}
  <div className="lg:col-span-8">
    <Card className="rounded-3xl bg-[#FFE4E9] shadow-md border-none">
      <CardContent className="p-7 text-left space-y-3">
        <Zap className="h-9 w-9 text-gray-900" />
        <h3 className="text-xl font-semibold">Faster Verification</h3>
        <p className="text-gray-800">
          Instant identity checks without lengthy document submission processes, making onboarding 
          quick and hassle-free.
        </p>
        <p className="text-gray-600 text-sm">Verification in seconds.</p>
      </CardContent>
    </Card>
  </div>

  {/* 3 — Convenience */}
  <div className="lg:col-span-4">
    <Card className="rounded-3xl bg-[#FFF9E6] shadow-md border-none">
      <CardContent className="p-7 space-y-3 text-left">
        <Smile className="h-9 w-9 text-gray-900" />
        <h3 className="text-xl font-semibold">Convenience</h3>
        <p className="text-gray-800">
          No need to scan, upload, or email documents — verification happens seamlessly in the 
          background.
        </p>
        <p className="text-gray-600 text-sm">A smoother experience.</p>
      </CardContent>
    </Card>
  </div>

  {/* 4 — Greater Security */}
  <div className="lg:col-span-4">
    <Card className="rounded-3xl bg-[#F5F9EF] shadow-md border-none">
      <CardContent className="p-7 space-y-3 text-left">
        <Lock className="h-9 w-9 text-gray-900" />
        <h3 className="text-xl font-semibold">Greater Security</h3>
        <p className="text-gray-800">
          Eliminates exposure of personal documents to multiple businesses minimizing identity theft 
          risks.
        </p>
        <p className="text-gray-600 text-sm">Security-first identity.</p>
      </CardContent>
    </Card>
  </div>

  {/* 5 — Control Over Personal Data (Large Card) */}
  <div className="lg:col-span-8">
    <Card className="rounded-3xl bg-[#FFECDD] shadow-md border-none">
      <CardContent className="p-7 space-y-3 text-left">
        <Eye className="h-9 w-9 text-gray-900" />
        <h3 className="text-xl font-semibold">Control Over Personal Data</h3>
        <p className="text-gray-800">
          Users retain ownership of their identity information, ensuring compliance with privacy 
          standards like GDPR.
        </p>
        <p className="text-gray-600 text-sm">You own your identity.</p>
      </CardContent>
    </Card>
  </div>

  {/* 6 — Improved User Experience */}
  <div className="lg:col-span-4">
    <Card className="rounded-3xl bg-[#EEF1F8] shadow-md border-none">
      <CardContent className="p-7 space-y-3 text-left">
        <CheckCircle className="h-9 w-9 text-gray-900" />
        <h3 className="text-xl font-semibold">Improved User Experience</h3>
        <p className="text-gray-800">
          A frictionless process that avoids delays and enhances trust in the service.
        </p>
        <p className="text-gray-600 text-sm">Simple. Smooth. Reliable.</p>
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
