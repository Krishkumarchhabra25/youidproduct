import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Shield, Eye, Zap, UserCheck, Lock } from "lucide-react";
import zkImage from "../../assets/images/zeroknowldge.png";
import valuesImage from "../../assets/images/ourvalues.jpg";

const BusinessAbout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(to_bottom_right,#eee6ff,#ffffff,#ffe9d6)]">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative text-center py-20 md:py-24 px-6">
        <Badge className="mb-6 px-4 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border-none">
          About youID for Business
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Identity Verification Built for Modern Businesses
        </h1>

        <p className="text-lg text-black/80 max-w-3xl mx-auto leading-relaxed mb-8">
          youID helps businesses verify users instantly — without storing documents,
          reducing compliance risk, and improving conversion with seamless onboarding.
        </p>

        <button className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition">
          Start Verification
        </button>

   
      </section>

      {/* MISSION / VISION / PROBLEM */}
      <section className="py-14 md:py-16 px-6 md:px-14 lg:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">

          <Card className="shadow-sm border-none rounded-3xl bg-[#EDEAFF]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
              <p className="text-black/80 leading-relaxed">
                Enable businesses to verify identity in seconds — without storing or managing
                sensitive documents, reducing compliance risk while keeping users in control.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-none rounded-3xl bg-[#FFE4E9] text-black">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="leading-relaxed">
                A frictionless verification ecosystem where businesses operate confidently,
                users maintain full data ownership, and verification simply works everywhere.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-none rounded-3xl bg-[#FFF9E6]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">The Problem</h3>
              <p className="text-black/80 leading-relaxed">
                Traditional verification requires storing documents, creating liability, manual reviews,
                and high compliance cost. youID eliminates these burdens entirely.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* ZERO KNOWLEDGE */}
      <section className="py-20 md:py-24 px-6 md:px-14 lg:px-20">
        <div className="text-center mb-14">
          <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary rounded-full border-none">
            Our Solution
          </Badge>

          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Zero-Knowledge Verification
          </h2>

          <p className="text-black/70 max-w-3xl mx-auto text-lg leading-relaxed">
            youID enables businesses to verify identity without ever accessing or storing
            documents — powered by Zero-Knowledge Proof technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-[#EDEAFF] border-none">
            <img src={zkImage} alt="Zero Knowledge Security" className="w-full" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Enterprise Security. Zero Data Liability.
            </h3>

            <p className="text-black/70 leading-relaxed mb-8 text-lg">
              youID ensures your business doesn't handle or store any personal documentation,
              eliminating compliance overhead and breach risk.
            </p>

            <ul className="space-y-5 text-black/80">
              <li className="flex gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <p><strong>No document storage:</strong> You never hold IDs or sensitive data.</p>
              </li>

              <li className="flex gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <p><strong>Local device verification:</strong> Documents never leave the user's phone.</p>
              </li>

              <li className="flex gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <p><strong>Biometric approval:</strong> Every verification must be approved by the user.</p>
              </li>

              <li className="flex gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <p><strong>Encrypted end-to-end:</strong> Only verification results are shared, nothing else.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-24 px-6 md:px-14 lg:px-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary rounded-full border-none">
            Our Values
          </Badge>

          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            What Drives Everything We Build
          </h2>

          <p className="text-black/60 max-w-3xl mx-auto mt-4 leading-relaxed">
            We prioritize trust, transparency, and security in every part of our infrastructure.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-xl bg-[#EDEAFF] border-none">
            <img src={valuesImage} alt="Our Values" className="w-full" />
          </div>

          {/* VALUE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: "Privacy First", desc: "Businesses never store or access user documents." },
              { icon: UserCheck, title: "User Consent", desc: "Verification happens only with biometric approval." },
              { icon: Eye, title: "Transparency", desc: "Clear processes and auditable verification logs." },
              { icon: Lock, title: "Security by Design", desc: "Zero-knowledge architecture and encryption everywhere." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FFF9E6] shadow-md border-none"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-full w-fit mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-black mb-2">{item.title}</h3>
                <p className="text-black/60 text-sm">{item.desc}</p>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-[#FFE4E9] shadow-md sm:col-span-2 border-none">
              <div className="p-3 bg-primary/10 text-primary rounded-full w-fit mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-black mb-2">Simplicity</h3>
              <p className="text-black/60 text-sm">
                One tap for users. Zero complexity for businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="text-center py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          Work With youID
        </h2>

        <p className="text-black/70 max-w-2xl mx-auto mb-8">
          Join the growing ecosystem of businesses adopting document-free,
          zero-liability verification.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-full text-sm hover:bg-primary/90">
            I’m a Business
          </button>
          <button className="text-primary border-none px-6 py-3 rounded-full text-sm hover:bg-primary/10">
            Developer Access
          </button>
          <button className="text-black border-none px-6 py-3 rounded-full text-sm hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAbout;
