import { FC } from "react";
import { motion } from "framer-motion";

const SomosAventusSection: FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl font-bold mb-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Somos Aventus
        </motion.h2>
        
        <motion.p 
          className="text-xl font-medium mb-5 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Nuestra esencia: Construir, desarrollar y expandir
        </motion.p>
      </div>
    </section>
  );
};

export default SomosAventusSection;