import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection: FC = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Construimos Sueños, Creamos Legados
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Tu tienes la visión, nosotros la hacemos realidad.
        </motion.p>
        
        <motion.button
          onClick={scrollToNextSection}
          className="flex items-center text-sm font-medium mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ y: 3 }}
        >
          <span className="mr-2">Descubre más</span>
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;