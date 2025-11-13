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
    badge: "Banking & Finance",
    title: "Instant KYC for Financial Services",
    description:
      "From opening bank accounts to processing loans, youID transforms traditional verification into instant, secure digital trust.",
    points: [
      "Instant digital account opening with real-time verification",
      "Faster loan approvals — from 2 days to 2 hours",
      "Reduce fraud in high-value transactions by up to 60%",
      "Instant credit card approvals with zero paperwork",
    ],
    image: bankingImg,
    reverse: false,
  },
  {
    id: 2,
    badge: "E-commerce",
    title: "Seamless Verification for Online Shopping",
    description:
      "Empower your online store with instant identity and age verification — secure, simple, and frictionless for every user.",
    points: [
      "One-tap age verification for restricted items",
      "Reduce cart abandonment rates significantly — from 50% to as low as 5%",
      "Authenticate high-value purchases securely",
      "Verify seller identities for safer marketplaces",
    ],
    image: ecommerceImg,
    reverse: true,
  },
  {
    id: 3,
    badge: "Healthcare",
    title: "Secure Patient Verification",
    description:
      "Ensure patient privacy and compliance with one-time verification that works across telemedicine, pharmacies, and insurance providers.",
    points: [
      "Instant verification for telemedicine appointments",
      "HIPAA-compliant identity management",
      "Reduce prescription and claim fraud by up to 55%",
      "Faster claim settlements with verified patient identities",
    ],
    image: healthcareImg,
    reverse: false,
  },
  {
    id: 4,
    badge: "Travel & Hospitality",
    title: "Contactless Check-in & Verification",
    description:
      "Reimagine your travel experience — from hotel stays to car rentals — with instant identity verification powered by youID.",
    points: [
      "Contactless hotel check-in in under 2 minutes",
      "Instant driver’s license verification for car rentals",
      "Verified guest check-ins for Airbnb hosts",
      "Enhance data privacy and guest satisfaction",
    ],
    image: travelImg,
    reverse: true,
  },
];


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
        >
          Use Cases Overview
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
          One Identity for Every Situation
        </h1>
        <p className="text-lg text-black/80 max-w-2xl mx-auto">
          From opening bank accounts to checking into hotels, youID works
          everywhere identity verification is needed.
        </p>
      </section>

      {/* Use Cases */}
      {useCases.map((useCase) => (
        <section
          key={useCase.id}
          className={`flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-16 ${
            useCase.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <Badge className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
              {useCase.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              {useCase.title}
            </h2>
            <p className="text-black/80 leading-relaxed">
              {useCase.description}
            </p>
            <ul className="space-y-2 text-black/80">
              {useCase.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={useCase.image}
              alt={useCase.title}
              className="w-[80%] rounded-2xl shadow-md"
            />
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default UserUseCases;
