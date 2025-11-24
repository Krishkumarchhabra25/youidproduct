import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Badge } from "@/Components/ui/badge";

import adultImg from "../../assets/images/banking.png"; 
import datingImg from "../../assets/images/ecommerce.png";
import socialImg from "../../assets/images/healthcare.jpg";

const BusinessUseCases = () => {
  const useCases = [
    {
      id: 1,
      badge: "Adult Sites",
      title: "Anonymous Age Verification",
      description:
        "Users verify their age instantly without disclosing their actual identity or uploading any documents.",
      points: [
        "Zero document uploads required",
        "Anonymous age confirmation",
        "Prevents minors from accessing adult content",
        "Fully privacy-first & compliant",
      ],
      image: adultImg,
      reverse: false,
    },

    {
      id: 2,
      badge: "Dating Platforms",
      title: "Proof of Identity Without Uploads",
      description:
        "Authenticate users without collecting passports, IDs or any sensitive documents.",
      points: [
        "Instant identity verification",
        "No driving license or passport required",
        "Reduce fake profiles & catfishing",
        "Boost trust and user safety",
      ],
      image: datingImg,
      reverse: true,
    },

    {
      id: 3,
      badge: "Social Media",
      title: "Frictionless Profile Verification",
      description:
        "Protect your community by ensuring authentic users without compromising their privacy.",
      points: [
        "Verify users without storing documents",
        "Stop impersonation & fake accounts",
        "Improve platform trust & credibility",
        "Simple API that works globally",
      ],
      image: socialImg,
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(to_bottom_right,#eee6ff,#ffffff,#ffe9d6)]">
      <Navigation />

      {/* Hero */}
      <section className="text-center py-20 px-4">
        <Badge className="mb-6 px-4 py-1 text-sm font-medium bg-primary/10 text-primary border-none">
          Use Cases Overview
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
          One Identity for Every Situation
        </h1>

        <p className="text-lg text-black/75 max-w-2xl mx-auto">
          Identity, Age, and Address Verification — suited for modern digital platforms.
        </p>
      </section>

      {/* Sections */}
      {useCases.map((useCase) => (
        <section
          key={useCase.id}
          className={`flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-16 gap-12 ${
            useCase.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <Badge className="px-3 py-1 text-xs bg-primary/10 text-primary border-none rounded-full">
              {useCase.badge}
            </Badge>

            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              {useCase.title}
            </h2>

            <p className="text-black/75">{useCase.description}</p>

            <ul className="space-y-2 text-black/80">
              {useCase.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✔</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={useCase.image}
              alt={useCase.title}
              className="w-[80%] rounded-3xl shadow-xl border-none"
            />
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default BusinessUseCases;
