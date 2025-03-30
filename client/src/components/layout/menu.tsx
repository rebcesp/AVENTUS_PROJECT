import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface MenuProps {
  closeMenu: () => void;
}

const Menu: FC<MenuProps> = ({ closeMenu }) => {
  const mainLinks = [
    { href: "/", label: "Inicio" },
    { href: "/bienes-raices", label: "Bienes Raices" },
    { href: "/empresarial", label: "Empresarial" },
    { href: "/inversiones", label: "Inversiones" },
    { href: "/contactanos", label: "Contactanos" },
  ];

  const associateLinks = [
    { href: "/asociados", label: "Asociados & Proveedores" },
  ];

  const socialLinks = [
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://tiktok.com", label: "Tiktok" },
  ];

  return (
    <motion.div 
      className="fixed inset-0 bg-white z-10 flex flex-col p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-end mb-6">
        <button 
          onClick={closeMenu}
          className="focus:outline-none"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <nav className="flex flex-col space-y-5 mt-4">
        {/* Main navigation links */}
        <div className="space-y-4">
          {mainLinks.map((link) => (
            <div key={link.href} className="block">
              <Link 
                href={link.href} 
                onClick={closeMenu}
                className="text-xl font-medium hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        
        {/* Associates section */}
        <div className="space-y-2 pt-6">
          <p className="text-xs text-gray-500">Únete a Aventus</p>
          {associateLinks.map((link) => (
            <div key={link.href} className="block">
              <Link 
                href={link.href} 
                onClick={closeMenu}
                className="text-xl font-medium hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        
        {/* Social links */}
        <div className="space-y-4 pt-6 mt-auto">
          {socialLinks.map((link) => (
            <div key={link.href} className="block">
              <Link 
                href={link.href} 
                onClick={closeMenu}
                className="text-xl font-medium hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>
      
      {/* Floating button */}
      <div className="fixed bottom-6 right-6">
        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
          W
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
