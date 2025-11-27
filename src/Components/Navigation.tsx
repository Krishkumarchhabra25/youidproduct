import { Link, useLocation, useNavigate } from "react-router-dom";
import {  Menu, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import youidLogo from "../assets/images/logo1id.png"
const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBusiness = location.pathname.startsWith("/business");
  const isUser = location.pathname.startsWith("/user");

  const navLinks = useMemo(() => {
    if (isBusiness) {
      return [
        { path: "/business", label: "Home" },
        { path: "/business/about", label: "About" },
        { path: "/business/how-it-works", label: "How It Works" },
        { path: "/business/usecases", label: "Use Cases" },
        { path: "/business/benefits", label: "Benefits" },
      ];
    } else if (isUser) {
      return [
        { path: "/user", label: "Home" },
        { path: "/user/about", label: "About" },
        { path: "/user/how-it-works", label: "How It Works" },
        { path: "/user/usecases", label: "Use Cases" },
        { path: "/user/benefits", label: "Benefits" },
      ];
    } else {
      return [
        { path: "/", label: "Home" },
        { path: "/pricing", label: "Pricing" },
        { path: "/about", label: "About" },
        { path: "/how-it-works", label: "How It Works" },
      ];
    }
  }, [isBusiness, isUser]);

  const isActive = (path: string) => location.pathname === path;

  // Desktop CTA
  const renderDesktopCTA = () => {
    if (isBusiness) {
      return (
        <Button
          size="sm"
          className="bg-[#FF6B35] hover:bg-[#e85c2e] text-white"
          onClick={() => navigate("/user")}
        >
          For Users
        </Button>
      );
    }

    if (isUser) {
      return (
        <Button
          size="sm"
          className="bg-[#FF6B35] hover:bg-[#e85c2e] text-white"
          onClick={() => navigate("/business")}
        >
          For Businesses
        </Button>
      );
    }

    return (
      <>
        <Button
          size="sm"
          className="bg-[#FF6B35] hover:bg-[#e85c2e] text-white"
          onClick={() => navigate("/user")}
        >
          Download App
        </Button>
      </>
    );
  };

  return (
<nav
  className="
    sticky top-0 z-50 w-full border-b border-[#1a1a1a]
    bg-[linear-gradient(to_right,#000000_0%,#000000_25%,#FF6B00_50%,#000000_75%,#000000_100%)]
    backdrop-blur
  "
>




      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo with proper aspect ratio */}
          <Link to="/" className="flex items-center">
            <div className="relative h-40 w-auto">
              <img
                src={youidLogo}
                alt="youID Logo"
                className="h-full w-auto object-contain"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-3 py-2 text-sm font-medium rounded-md transition-all
                  ${
                    isActive(link.path)
                      ? "text-[#FF6B35] bg-[#1a0f00] shadow-[0_0_8px_#FF6B35]"
                      : "text-gray-300 hover:text-white hover:bg-[#1a0f00]"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {renderDesktopCTA()}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-[#222]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  block px-3 py-2 text-base font-medium rounded-md
                  ${
                    isActive(link.path)
                      ? "text-[#FF6B35] bg-[#1a0f00] shadow-[0_0_8px_#FF6B35]"
                      : "text-gray-300 hover:text-white hover:bg-[#1a0f00]"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full text-white"
                onClick={() => {
                  navigate("/business");
                  setMobileMenuOpen(false);
                }}
              >
                For Businesses
              </Button>

              <Button
                className="w-full bg-[#FF6B35] hover:bg-[#e85c2e] text-white"
                onClick={() => {
                  navigate("/user");
                  setMobileMenuOpen(false);
                }}
              >
                Download App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
