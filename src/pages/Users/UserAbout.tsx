import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Shield, Eye, Zap, UserCheck, Lock } from "lucide-react";

const UserAbout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
     {/* Hero Section */}
      <section className="relative text-center py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
        >
          About youID
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
          Reimagining Digital Identity
        </h1>

        <p className="text-lg text-black/80 max-w-3xl mx-auto leading-relaxed mb-8">
          We’re building a world where identity verification is instant, secure, and
          privacy-preserving — giving you full control over your digital identity.
        </p>

        <button className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition">
          Get Started
        </button>

        {/* Stat Cards */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-10 hidden md:block">
          <Card className="shadow-md border border-gray-100 p-4 rounded-2xl bg-white text-center w-36">
            <h2 className="text-2xl font-bold text-primary">2000+</h2>
            <p className="text-black/60 text-sm">Users Verified</p>
          </Card>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-10 hidden md:block">
          <Card className="shadow-md border border-gray-100 p-4 rounded-2xl bg-white text-center w-36">
            <h2 className="text-2xl font-bold text-primary">1500+</h2>
            <p className="text-black/60 text-sm">Active Businesses</p>
          </Card>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="shadow-sm border border-gray-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
              <p className="text-black/80 leading-relaxed">
                Empower individuals with complete control over their digital identity,
                while helping businesses verify users securely — without storing
                sensitive data.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border border-gray-100 bg-primary text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="leading-relaxed">
                A world where you set up your identity once and use it everywhere —
                without ever compromising your privacy or security.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border border-gray-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                The Problem We’re Solving
              </h3>
              <p className="text-black/80 leading-relaxed">
                Today’s verification systems expose your data across multiple servers,
                leading to privacy risks, breaches, and loss of control. youID changes
                that.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
        >
          Our Solution
        </Badge>
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          Zero-Knowledge Verification
        </h2>
        <p className="text-black/70 max-w-3xl mx-auto mb-12">
          youID introduces a revolutionary approach where companies verify your identity
          without ever seeing or storing your documents — ensuring privacy, security,
          and full user control.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-3 text-primary">
                Privacy & Control
              </h4>
              <p className="text-black/80">
                Your documents never leave your phone. Every verification requires your
                approval, keeping you in control of your data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-3 text-primary">Speed</h4>
              <p className="text-black/80">
                Complete identity verification in just 10 seconds — without forms or
                uploads.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-3 text-primary">Security</h4>
              <p className="text-black/80">
                Protected by AES-256 encryption, biometric authentication, and
                hardware-backed security.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-12">
          Our Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Shield />, title: "Privacy First", desc: "Your data stays yours — always." },
            { icon: <UserCheck />, title: "User Control", desc: "You decide who accesses your info." },
            { icon: <Eye />, title: "Transparency", desc: "No hidden data sharing, ever." },
            { icon: <Lock />, title: "Security by Design", desc: "Protection built into every layer." },
            { icon: <Zap />, title: "Simplicity", desc: "Verification as easy as a single tap." },
          ].map((val, i) => (
            <Card key={i} className="shadow-sm border border-gray-100 text-center">
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">{val.icon}</div>
                <h4 className="font-semibold text-lg text-black">{val.title}</h4>
                <p className="text-black/70">{val.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section className="text-center py-20 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          Get Involved
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto mb-8">
          Join us in shaping a privacy-first digital world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90">
            I’m a User
          </button>
          <button className="border border-primary text-primary px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/10">
            I’m a Business
          </button>
          <button className="border border-gray-300 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100">
            Developer Access
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserAbout;
