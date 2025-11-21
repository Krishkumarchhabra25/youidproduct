import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Badge } from "@/Components/ui/badge";
import bankingImg from "../../assets/images/banking.png";
import ecommerceImg from "../../assets/images/ecommerce.png";
import healthcareImg from "../../assets/images/healthcare.jpg";
import travelImg from "../../assets/images/travel.jpg";

const BusinessUseCases = () => {
const useCases = [
  {
    id: 1,
    badge: "Banking & Finance",
    title: "Instant KYC & Fraud-Free Onboarding",
    description:
      "Verify customers in seconds with biometric-backed approval — no documents, no uploads, no friction.",
    points: [
      "Instant digital KYC",
      "Loan approvals in minutes, not days",
      "Eliminate document fraud completely",
      "100% paperless onboarding",
    ],
    image: bankingImg,
    reverse: false,
  },
  {
    id: 2,
    badge: "E-commerce",
    title: "Smarter Verification for Online Shopping",
    description:
      "Authenticate buyers and sellers instantly to reduce fraud and increase order success rates.",
    points: [
      "1-tap age & identity verification",
      "Reduce cart abandonment from 50% → under 5%",
      "Secure high-value orders",
      "Verified sellers & safer marketplaces",
    ],
    image: ecommerceImg,
    reverse: true,
  },
  {
    id: 3,
    badge: "Healthcare",
    title: "Trusted Patient Identity for Healthcare",
    description:
      "Secure identity approvals for clinics, pharmacies, insurance, and telemedicine — without storing any sensitive data.",
    points: [
      "Instant patient verification",
      "Full privacy-compliant workflow",
      "Prevent prescription fraud",
      "Accelerate claim approvals",
    ],
    image: healthcareImg,
    reverse: false,
  },
  {
    id: 4,
    badge: "Travel & Hospitality",
    title: "Frictionless Check-In for Travel & Stays",
    description:
      "Upgrade guest experience with fast, contactless identity verification for hotels, rentals, and airports.",
    points: [
      "Check-in completed in under 2 minutes",
      "Instant ID/license verification",
      "Verified guests for stays & rentals",
      "Privacy-first, no document storage",
    ],
    image: travelImg,
    reverse: true,
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
          From banks to hotels — youID works everywhere identity is required.
        </p>
      </section>

      {/* Sections */}
      {useCases.map((useCase) => (
        <section
          key={useCase.id}
          className={`flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-16 gap-12 ${useCase.reverse ? "md:flex-row-reverse" : ""}`}
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
