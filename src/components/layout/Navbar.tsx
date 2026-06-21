import { useState } from "react";
import Button from "../ui/Button";
import { navLinks } from "../../data/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black backdrop-blur-md border-b border-black">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white font-bold">
            
          </div>
          
            <img
              src="/assets/images/Logo.png"
              alt="Your Logo"
              className="w-full h-auto object-contain"
            />
         
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-108">
          <ul className="flex gap-16 text-sm text-gray-300 ">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="hover:text-accent transition-colors cursor-pointer"
              >
                {link.label}
              </li>
            ))}
          </ul>
          <Button>Let's Talk</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <ul className="px-4 py-3 flex flex-col gap-3 text-gray-300">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="hover:text-accent transition-colors cursor-pointer py-1"
              >
                {link.label}
              </li>
            ))}
            <Button className="mt-2 w-full">Let's Talk</Button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
