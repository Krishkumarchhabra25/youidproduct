import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";
import Navigation from "../Components/Navigation";
import { Badge } from "../Components/ui/badge";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/button";




const BusinessLanding = () => {
  // const companies = [
  //   { name: "Company A", logo: "/logos/company1.png" },
  //   { name: "Company B", logo: "/logos/company2.png" },
  //   { name: "Company C", logo: "/logos/company3.png" },
  //   { name: "Company D", logo: "/logos/company4.png" },
  //   { name: "Company E", logo: "/logos/company5.png" },
  //   { name: "Company F", logo: "/logos/company6.png" },
  // ];

  // const problems = [
  //   {
  //     title: "Identity theft and fraud:",
  //     description:
  //       "Criminals can use stolen identity documents (like passports, driver's licenses, or bank details) for fraudulent purposes.",
  //     icon: Lock,
  //   },
  //   {
  //     title: "Discrimination:",
  //     description:
  //       "If identity information falls into the wrong hands, it could be used to discriminate against individuals.",
  //     icon: Shield,
  //   },
  //   {
  //     title: "Data breaches:",
  //     description:
  //       "Accidental leaks, such as a document being left in a printer, or cyber-attacks can expose sensitive data.",
  //     icon: AlertImgIcon,
  //   },
  //   {
  //     title: "Non-compliance penalties:",
  //     description:
  //       "Businesses can face fines and other enforcement action from the ICO for failing to protect personal data.",
  //     icon: FileWarningIcon,
  //   },
  // ];

  // const features = [
  //   {
  //     icon: PlugZap,
  //     title: "Plug & Play Integration",
  //     points: [
  //       "REST APIs and SDKs for instant setup",
  //       "Works with your existing onboarding flow",
  //       "No major infrastructure changes",
  //     ],
  //   },
  //   {
  //     icon: Shield,
  //     title: "Privacy-First by Design",
  //     points: [
  //       "Zero document storage",
  //       "User data never leaves their device",
  //       "GDPR and ISO 27001 compliant",
  //     ],
  //   },
  //   {
  //     icon: Bell,
  //     title: "Instant Approvals",
  //     points: [
  //       "Real-time push notifications",
  //       "Biometric approval from the user's phone",
  //       "Verified within 10 seconds",
  //     ],
  //   },
  //   {
  //     icon: Eye,
  //     title: "Full Transparency",
  //     points: [
  //       "Audit trails for every request",
  //       "Dashboard for tracking verifications",
  //       "Role-based access controls",
  //     ],
  //   },
  // ];

  // const testimonials = [
  //   {
  //     quote:
  //       "Integrating youID took less than an hour — now our users verify in seconds, and we don't store a single document.",
  //     author: "Raj K.",
  //     role: "Fintech CEO",
  //   },
  //   {
  //     quote:
  //       "youID helped us eliminate compliance stress. No more data storage audits or manual verification queues.",
  //     author: "Lisa P.",
  //     role: "Operations Head, Digital Bank",
  //   },
  // ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        {/* Hero Section — FULL SCREEN WITH EXTRACTED GRADIENT */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#000000] to-[#1a0f00]"
        >
          {/* Floating dots exactly as before */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-10 left-1/4 w-3 h-3 bg-orange-200 rounded-full" />
            <div className="absolute top-40 right-1/4 w-2 h-2 bg-orange-300 rounded-full" />
            <div className="absolute bottom-32 left-10 w-4 h-4 bg-orange-100 rounded-full" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 ">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                Built for Modern Businesses
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Verify Customers Instantly.
                <br />
                Stay Compliant Effortlessly.
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                youID helps organizations onboard verified users in seconds —
                without collecting or storing personal documents. Reduce costs,
                remove liability, and build trust with every verification.
              </p>
              <Button size="lg" variant="secondary" className="mt-4">
                Request Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}

        {/*Problem */}
        <section className="py-28 px-6 md:px-12 lg:px-20 bg-[#000000] text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* LEFT — HUGE TITLE WITH GLOW */}
            <div>
              <h2 className="text-6xl md:text-7xl font-semibold leading-tight text-[#FF6B35] drop-shadow-[0_0_25px_#FF6B3555]">
                The Real<br />Problems
              </h2>
              <p className="mt-6 text-xl text-gray-400 max-w-sm">
                Verification today is broken — slow, costly, and insecure.
              </p>
            </div>

            {/* RIGHT — BIG TEXT + UNIQUE BULLET STYLE */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-semibold mb-3 text-white">
                  ▸ Identity theft & fraud
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Criminals use stolen documents (IDs, bank details, licenses)
                  to impersonate people and access services.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-3 text-white">
                  ▸ Discrimination from exposed PII
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Sensitive data falling into the wrong hands can be used to
                  bias, categorize, or discriminate against individuals.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-3 text-white">
                  ▸ Never-ending data breaches
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Companies are constantly attacked, and leaked user identity
                  data becomes permanently available online.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-3 text-white">
                  ▸ Compliance pressure & rising KYC costs
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Regulations demand tighter verification standards, increasing
                  cost, workload, and legal exposure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Business */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#000000] to-[#1a0f00] text-white">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
              Why Businesses<br /> Worry About{" "}
              <span className="text-[#FF6B35]">
                Storing<br />Customer PIDs
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
              Handling personal identifiable data exposes companies to legal,
              financial, and security risks. These challenges increase
              operational costs and reduce user trust.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CARD 1 */}
            <div className="p-8 rounded-2xl bg-[#0e1317] border border-white/10 shadow-lg shadow-orange-300/5 hover:shadow-orange-300/10 transition-all">
              <div className="h-12 w-12 bg-red-200/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">
                Legal and Regulatory Penalties
              </h3>
              <p className="text-sm text-gray-400">
                Mishandling PII exposes businesses to GDPR, DPDP, and
                industry-specific violations, resulting in severe fines and
                audits.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-8 rounded-2xl bg-[#0e1317] border border-white/10 shadow-lg shadow-orange-300/5 hover:shadow-orange-300/10 transition-all">
              <div className="h-12 w-12 bg-blue-200/20 rounded-xl flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">
                Financial and Operational Impacts
              </h3>
              <p className="text-sm text-gray-400">
                Securely storing PII demands audits, monitoring, backups,
                encryption, and dedicated teams — increasing yearly operational
                costs.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-8 rounded-2xl bg-[#0e1317] border border-white/10 shadow-lg shadow-orange-300/5 hover:shadow-orange-300/10 transition-all">
              <div className="h-12 w-12 bg-yellow-200/20 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">
                Reputational Damage and Loss of Trust
              </h3>
              <p className="text-sm text-gray-400">
                A single leak destroys trust—users stop sharing data, partners
                pull back, and long-term credibility collapses.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="p-8 rounded-2xl bg-[#0e1317] border border-white/10 shadow-lg shadow-orange-300/5 hover:shadow-orange-300/10 transition-all">
              <div className="h-12 w-12 bg-green-200/20 rounded-xl flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#FF6B35] mb-2">
                Inherent Risks of PII
              </h3>
              <p className="text-sm text-gray-400">
                Sensitive data exposes businesses to irreversible harm if
                misused, accessed improperly, or leaked.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#000000] text-white">
          {/* FULL WIDTH CONTAINER */}
          <div className="max-w-7xl mx-auto px-2">
            {/* FULL-WIDTH ORANGE BLOCK */}
            <div className="bg-[#FF6B35] w-full text-black rounded-3xl p-20 shadow-xl min-h-[600px]">
              {/* BIG TITLE */}
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-10">
                Why Businesses Choose{" "}
                <span className="text-[#000000]">youID</span>
              </h2>

              {/* DECISION POINTS */}
              <div className="space-y-12 text-lg">
                {/* 01 */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    <span className="text-[#000000] font-bold">&lt;01&gt;</span>{" "}
                    Instant Verification
                  </h3>
                  <p className="text-gray-900">
                    Skip manual document uploads — verify customers instantly
                    using zero-document identity checks.
                  </p>
                </div>

                {/* 02 */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    <span className="text-[#000000] font-bold">&lt;02&gt;</span>{" "}
                    Reduce Fraud & Identity Theft
                  </h3>
                  <p className="text-gray-900">
                    Stop fraudulent sign-ups with real-time verification powered
                    by decentralized identity.
                  </p>
                </div>

                {/* 03 */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    <span className="text-[#000000] font-bold">&lt;03&gt;</span>{" "}
                    Zero PII Storage
                  </h3>
                  <p className="text-gray-900">
                    youID never stores sensitive documents — eliminating data
                    breach risks and compliance pressure.
                  </p>
                </div>

                {/* 04 */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    <span className="text-[#000000] font-bold">&lt;04&gt;</span>{" "}
                    Faster Onboarding
                  </h3>
                  <p className="text-gray-900">
                    Convert more users with a frictionless onboarding flow that
                    improves drop-off rates by up to 60%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted by Growing Businesses
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <ThumbsUp className="h-8 w-8 text-success" />
                    <p className="text-muted-foreground italic">"{t.quote}"</p>
                    <div>
                      <div className="font-semibold text-foreground">
                        {t.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA */}
        {/* <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Start Verifying Smarter
            </h2>
            <p className="text-lg text-black/80 max-w-xl mx-auto mb-8">
              Join forward-thinking organizations who trust youID to deliver
              seamless, secure, and compliant identity verification.
            </p>
            <Button size="lg" variant="secondary">
              Request Demo
            </Button>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default BusinessLanding;