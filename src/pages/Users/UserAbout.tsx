import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Shield, Eye, Zap, UserCheck, Lock } from "lucide-react";
import zkImage from "../../assets/images/zeroknowldge.png";
import valuesImage from "../../assets/images/ourvalues.jpg";

const UserAbout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(to_bottom_right,#eee6ff,#ffffff,#ffe9d6)]">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative text-center py-20 md:py-24 px-6">
        <Badge className="mb-6 px-4 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border-none">
          About youID
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Reimagining Digital Identity
        </h1>

        <p className="text-lg text-black/80 max-w-3xl mx-auto leading-relaxed mb-8">
          We’re building a world where identity verification is instant,
          secure, and privacy-preserving — putting you in full control.
        </p>

        <button className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition">
          Get Started
        </button>

        {/* LEFT CARD */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 ml-4 lg:ml-10 hidden md:block">
          <Card className="shadow-md border-none p-4 rounded-2xl bg-[#EDEAFF] text-center w-32 lg:w-36">
            <h2 className="text-xl lg:text-2xl font-bold text-primary">2000+</h2>
            <p className="text-black/60 text-sm">Users Verified</p>
          </Card>
        </div>

        {/* RIGHT CARD */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 mr-4 lg:mr-10 hidden md:block">
          <Card className="shadow-md border-none p-4 rounded-2xl bg-[#FFE4E9] text-center w-32 lg:w-36">
            <h2 className="text-xl lg:text-2xl font-bold text-primary">1500+</h2>
            <p className="text-black/60 text-sm">Active Businesses</p>
          </Card>
        </div>
      </section>

      {/* MISSION / VISION / PROBLEM */}
      <section className="py-14 md:py-16 px-6 md:px-14 lg:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">

          <Card className="shadow-sm border-none rounded-3xl bg-[#EDEAFF]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
              <p className="text-black/80 leading-relaxed">
                Empower individuals to control their identity while enabling
                businesses to verify securely without storing data.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-none rounded-3xl bg-[#FFE4E9] text-black">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="leading-relaxed">
                One identity setup — usable everywhere. Privacy guaranteed.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-none rounded-3xl bg-[#FFF9E6]">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">The Problem</h3>
              <p className="text-black/80 leading-relaxed">
                Traditional systems expose your documents repeatedly.
                youID eliminates this risk.
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
            youID verifies your identity without ever seeing your documents —
            powered by Zero-Knowledge proofs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-[#EDEAFF] border-none">
            <img src={zkImage} alt="Zero Knowledge Security" className="w-full" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Your Data Encrypted. Identity Unexposed.
            </h3>

            <p className="text-black/70 leading-relaxed mb-8 text-lg">
              Only you hold your documents — always encrypted, always local.
            </p>

            <ul className="space-y-5 text-black/80">
              <li className="flex gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <p><strong>No data sharing:</strong> Businesses verify without accessing your ID.</p>
              </li>
              <li className="flex gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <p><strong>Local-first:</strong> Your passport never leaves your phone.</p>
              </li>
              <li className="flex gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <p><strong>Biometric approval:</strong> Only you can approve requests.</p>
              </li>
              <li className="flex gap-3">
                <span className="w-3 h-3 bg-primary rounded-full mt-2"></span>
                <p><strong>End-to-end encrypted:</strong> Nobody — not even us — can read it.</p>
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
            Five core principles define our product and infrastructure.
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
              { icon: Shield, title: "Privacy First", desc: "We never store your documents." },
              { icon: UserCheck, title: "User Control", desc: "You approve everything with biometrics." },
              { icon: Eye, title: "Transparency", desc: "No hidden syncing or sharing." },
              { icon: Lock, title: "Security by Design", desc: "Encryption everywhere." }
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
                Identity verification should feel effortless — one tap, zero friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="text-center py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          Get Involved
        </h2>

        <p className="text-black/70 max-w-2xl mx-auto mb-8">
          Join us in building a privacy-first digital world.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-full text-sm hover:bg-primary/90">
            I’m a User
          </button>
          <button className="text-primary border-none px-6 py-3 rounded-full text-sm hover:bg-primary/10">
            I’m a Business
          </button>
          <button className="text-black border-none px-6 py-3 rounded-full text-sm hover:bg-gray-100">
            Developer Access
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserAbout;
