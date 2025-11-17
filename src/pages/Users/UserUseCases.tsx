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
        "Transform banking verification with instant digital trust.",
      points: [
        "Instant account opening",
        "Loan approvals in hours, not days",
        "60% fraud reduction",
        "Zero paperwork",
      ],
      image: bankingImg,
      reverse: false,
    },
    {
      id: 2,
      badge: "E-commerce",
      title: "Frictionless Verification for Online Shopping",
      description:
        "Instant, secure verification for safe digital commerce.",
      points: [
        "One-tap age verification",
        "Reduce cart abandonment from 50% → 5%",
        "Authenticate high-value orders",
        "Verify seller identities",
      ],
      image: ecommerceImg,
      reverse: true,
    },
    {
      id: 3,
      badge: "Healthcare",
      title: "Secure Patient Verification",
      description:
        "HIPAA-compliant identity for clinics, telemedicine & insurance.",
      points: [
        "Instant telemedicine verification",
        "HIPAA-compliant storage",
        "Reduce prescription fraud 55%",
        "Faster claim approvals",
      ],
      image: healthcareImg,
      reverse: false,
    },
    {
      id: 4,
      badge: "Travel & Hospitality",
      title: "Contactless Check-in Everywhere",
      description: "Transform hotels, rentals, and travel experiences.",
      points: [
        "2-minute hotel check-in",
        "Instant license verification",
        "Verified Airbnb guests",
        "Higher guest privacy",
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

export default UserUseCases;
