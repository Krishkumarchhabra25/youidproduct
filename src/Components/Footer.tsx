import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import footerBg from "@/assets/images/YouID 3.png"; // ✅ make sure this path is correct

const Footer = () => {
  return (
    <footer
      className="relative border-t border-[#1a1a1a] text-white"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo + Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-[#FF6B35]" />
              <span className="text-xl font-bold">youID</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm">
              The privacy-first identity verification platform that puts you in control.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-sm text-gray-400 hover:text-[#FF6B35]">How It Works</Link></li>
              <li><Link to="/features" className="text-sm text-gray-400 hover:text-[#FF6B35]">Features</Link></li>
              <li><Link to="/use-cases" className="text-sm text-gray-400 hover:text-[#FF6B35]">Use Cases</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-400 hover:text-[#FF6B35]">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-[#FF6B35]">About Us</Link></li>
              <li><a className="text-sm text-gray-400 hover:text-[#FF6B35]" href="#">Careers</a></li>
              <li><a className="text-sm text-gray-400 hover:text-[#FF6B35]" href="#">Press Kit</a></li>
              <li><a className="text-sm text-gray-400 hover:text-[#FF6B35]" href="#">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a className="text-sm text-gray-400 hover:text-[#FF6B35]" href="#">Privacy Policy</a></li>
              <li><a className="text-sm text-gray-400 hover:text-[#FF6B35]" href="#">Terms of Service</a></li>
              <li><a className="text-sm text-gray-400 hover:text-[#FF6B35]" href="#">Security</a></li>
              <li><a className="text-sm text-gray-400 hover:text-[#FF6B35]" href="#">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} youID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
