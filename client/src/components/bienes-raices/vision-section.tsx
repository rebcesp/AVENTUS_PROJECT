import { FC } from "react";
import { motion } from "framer-motion";

const VisionSection: FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl font-bold mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Que nos impulsa?
        </motion.h2>
        
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-800 mb-6 leading-relaxed">
            "Transformamos vidas y comunidades a través de la creación de espacios únicos e innovadores que inspiran progreso y bienestar. Con excelencia, honestidad y compromiso, desarrollamos proyectos de alto valor diseñados para trascender, generar oportunidades y construir un legado de crecimiento y desarrollo sostenible para futuras generaciones.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">Vision</h3>
          
          <p className="text-gray-800 mb-4 leading-relaxed">
            "Construiremos un futuro donde cada espacio inspire progreso, cada comunidad refleje prosperidad y donde cada cliente encuentre en nosotros un aliado para alcanzar su máximo potencial.
          </p>
          
          <p className="text-gray-800 italic mb-4 leading-relaxed">
            "De la visión de hoy, creamos los legados de mañana".
          </p>
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold mb-4 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          "Desarrollamos proyectos inmobiliarios integrales aportando valor en cada proyecto con responsabilidad, dedicación y honestidad
        </motion.h3>
      </div>
    </section>
  );
};

export default VisionSection;