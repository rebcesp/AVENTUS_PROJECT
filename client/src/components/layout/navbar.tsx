import { FC, useState } from "react";
import AventusLogo from "@/components/ui/logo";
import Menu from "@/components/layout/menu";
import { AnimatePresence } from "framer-motion";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header className="px-6 py-4 flex justify-between items-center relative z-50">
      <AventusLogo />
      
      <button 
        className="focus:outline-none z-20 relative"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {isMenuOpen && <Menu closeMenu={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = "auto";
        }} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
