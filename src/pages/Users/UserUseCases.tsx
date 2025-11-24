import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Badge } from "@/Components/ui/badge";

import bankingImg from "../../assets/images/banking.png";
import ecommerceImg from "../../assets/images/ecommerce.png";
import healthcareImg from "../../assets/images/healthcare.jpg";
import travelImg from "../../assets/images/travel.jpg";

const UserUseCases = () => {
  const useCases = [
    {
      id: 1,
      badge: "Identity Verification",
      title: "Verify Identity Instantly",
      description:
        "A universal identity layer that works across platforms without uploading any documents.",
      points: [
        "No need to upload Aadhaar, PAN, Passport, or License",
        "Zero document storage required",
        "Instant verification within seconds",
        "Ideal for platforms that require identity trust",
      ],
      image: "/assets/identity.png",
      reverse: false,
    },

    {
      id: 2,
      badge: "Age Verification",
      title: "Anonymous Age Verification",
      description:
        "Prove your age without revealing your identity or sharing any government ID documents.",
      points: [
        "Perfect for adult-content platforms",
        "Anonymous verification without ID exposure",
        "Zero document uploads required",
        "Eliminates risks of identity theft",
      ],
      image: bankingImg,
      reverse: true,
    },

    {
      id: 3,
      badge: "Proof of Address",
      title: "Address Verification Without Documents",
      description:
        "Verify your address without uploading bills, ID proofs, or utility documents.",
      points: [
        "No need to upload passports or driving licenses",
        "Instant digital address verification",
        "Improves onboarding speed by 10×",
        "Reduces fraud using decentralized validation",
      ],
      image: ecommerceImg,
      reverse: false,
    },

    {
      id: 4,
      badge: "Adult Sites",
      title: "Anonymous Age Checks for Adult Platforms",
      description:
        "Users can verify they’re 18+ without sharing sensitive personal information.",
      points: [
        "No ID upload required",
        "Prevents underage access",
        "Anonymous age confirmation",
        "Protects user privacy",
      ],
      image: healthcareImg,
      reverse: true,
    },

    {
      id: 5,
      badge: "Dating Sites",
      title: "Safer & Verified Dating Profiles",
      description:
        "Users can prove authenticity without sharing passports, licenses, or personal documents.",
      points: [
        "Instant document-free verification",
        "Reduce fake profiles & scams",
        "No passport/ID uploads",
        "Higher trust and safety",
      ],
      image: travelImg,
      reverse: false,
    },

    {
      id: 6,
      badge: "Social Media",
      title: "Verified Social Accounts Without Uploading IDs",
      description:
        "Get verified without uploading your government identity documents.",
      points: [
        "No document upload required",
        "Protects privacy from platforms",
        "Eliminates risk of data leaks",
        "Reduce impersonation & fake accounts",
      ],
      image: healthcareImg,
      reverse: true,
    },
  ];

  return (
    <div
      className="
        min-h-screen flex flex-col 
        bg-[linear-gradient(to_bottom,#000000,#120a00,#1a0f00)]
      "
    >
      <Navigation />

      {/* Hero */}
      <section className="text-center py-20 px-4">
        <Badge
          className="
            mb-6 px-4 py-1 text-sm font-medium
            bg-[#FF6B35]/20 text-[#FF6B35] border-none
          "
        >
          Use Cases Overview
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          One Identity for Every Situation
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          From banks to hotels — youID works everywhere identity is required.
        </p>
      </section>

      {/* Use Case Sections */}
      {useCases.map((useCase) => (
        <section
          key={useCase.id}
          className={`
            flex flex-col md:flex-row items-center justify-between 
            py-20 px-6 md:px-16 gap-12 
            ${useCase.reverse ? "md:flex-row-reverse" : ""}
          `}
        >
          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <Badge
              className="
                px-3 py-1 text-xs 
                bg-[#FF6B35]/20 text-[#FF6B35] border-none 
                rounded-full
              "
            >
              {useCase.badge}
            </Badge>

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              {useCase.title}
            </h2>

            <p className="text-gray-300">{useCase.description}</p>

            <ul className="space-y-2 text-gray-300">
              {useCase.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">✔</span>
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
              className="
                w-[80%] rounded-3xl 
                shadow-[0_0_20px_#FF6B35]
              "
            />
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default UserUseCases;
