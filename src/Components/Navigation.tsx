import { Link, useLocation, useNavigate } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine if we're on user or business routes
  const isBusiness = location.pathname.startsWith("/business");
  const isUser = location.pathname.startsWith("/user");

  // Dynamic navigation items based on route type
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
      // Default navigation (homepage / marketing)
      return [
        { path: "/", label: "Home" },
        { path: "/pricing", label: "Pricing" },
        { path: "/about", label: "About" },
        { path: "/how-it-works", label: "How It Works" },
      ];
    }
  }, [isBusiness, isUser]);

  // Mark active if the current path starts with the link path (so parent routes stay active)
  const isActive = (path: string) => {
    // exact root match special-case
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/") || location.pathname === path;
  };

  // Desktop CTA logic:
  // - On business routes -> show "For Users" (navigate to /user)
  // - On user routes -> show "For Businesses" (navigate to /business)
  // - Else (marketing) -> show Download App (navigate to /user)
  const renderDesktopCTA = () => {
    if (isBusiness) {
      return (
        <Button size="sm" onClick={() => navigate("/user")}>
          For Users
        </Button>
      );
    }

    if (isUser) {
      return (
        <Button size="sm" onClick={() => navigate("/business")}>
          For Businesses
        </Button>
      );
    }

    // default / marketing
    return (
      <>
        <Button size="sm" onClick={() => navigate("/user")}>
          Download App
        </Button>
        {/* optionally: uncomment to show For Businesses on desktop marketing */}
        {/* <Button variant="ghost" size="sm" onClick={() => navigate("/business")}>For Businesses</Button> */}
      </>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">youID</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.path)
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {renderDesktopCTA()}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive(link.path)
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 space-y-2">
              {/* Mobile keeps both quick CTAs */}
              <Button
                variant="ghost"
                className="w-full"
                size="sm"
                onClick={() => {
                  navigate("/business");
                  setMobileMenuOpen(false);
                }}
              >
                For Businesses
              </Button>
              <Button
                className="w-full"
                size="sm"
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
