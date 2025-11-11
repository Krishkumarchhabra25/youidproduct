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

           { path: "/about", label: "About" },
        { path: "/how-it-works", label: "How It Works" },
        { path: "/usecases", label: "Use Cases" },
        { path: "/benefits", label: "Benefits" },
      ];
    } else if (isUser) {
      return [
        { path: "/user", label: "Home" },
           { path: "/about", label: "About" },
        { path: "/how-it-works", label: "How It Works" },
  { path: "/user/benefits", label: "Benefits" },
        { path: "/user/usecases", label: "Use Cases" },
       
      ];
    } else {
      // Default navigation (homepage / marketing)
      return [
        { path: "/", label: "Home" },
     
        { path: "/pricing", label: "Pricing" },
      ];
    }
  }, [isBusiness, isUser]);

  const isActive = (path:any) => location.pathname === path;

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
         
            <Button size="sm" onClick={() => navigate("/user")}>
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
