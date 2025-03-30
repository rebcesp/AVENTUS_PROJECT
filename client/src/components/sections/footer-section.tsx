import { FC } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link } from "wouter";
import AventusLogo from "@/components/ui/logo";

const FooterSection: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <AventusLogo />
            </div>
            <p className="text-gray-700 text-sm">
              Construimos sueños y creamos legados desde 1995. 
              Tu socio estratégico en inversiones y desarrollos inmobiliarios.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4">Servicios</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/bienes-raices" className="hover:underline">
                  Bienes Raíces
                </Link>
              </li>
              <li>
                <Link href="/empresarial" className="hover:underline">
                  Empresarial
                </Link>
              </li>
              <li>
                <Link href="/inversiones" className="hover:underline">
                  Inversiones
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/nosotros" className="hover:underline">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:underline">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/asociados" className="hover:underline">
                  Conviértete en asociado
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <a href="mailto:contacto@aventus.mx" className="hover:underline">
                  contacto@aventus.mx
                </a>
              </li>
              <li>
                <a href="tel:+52 55 1234 5678" className="hover:underline">
                  +52 55 1234 5678
                </a>
              </li>
              <li>
                <p>Av. Paseo de la Reforma 296, Juárez, CDMX</p>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-gray-600 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {currentYear} Aventus. Todos los derechos reservados.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Facebook size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;