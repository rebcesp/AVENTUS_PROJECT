import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface MenuProps {
  closeMenu: () => void;
}

const Menu: FC<MenuProps> = ({ closeMenu }) => {
  const menuLinks = [
    { href: "#bienes-raices", label: "Bienes Raíces" },
    { href: "#empresarial", label: "Empresarial" },
    { href: "#inversiones", label: "Inversiones" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <motion.div 
      className="fixed inset-0 bg-white z-10 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-3xl font-bold mb-8">Menú</div>
      <nav className="flex flex-col space-y-4 text-xl">
        {menuLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            onClick={closeMenu}
            className="hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};

export default Menu;
