import { FC } from "react";
import { motion } from "framer-motion";

const AboutSection: FC = () => {
  return (
    <motion.section 
      className="py-12 border-t border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Desde 1995</h2>
          
          <p className="text-gray-800 mb-4 leading-relaxed">
            La filosofía de Aventus como una constructora nace con el firme compromiso de desarrollar proyectos excepcionales. 
            Con más de 30 años de experiencia en el sector, ha consolidado no solo su estructura, organización, calidad, 
            de servicio y la innovación se fusionan estratégicamente.
          </p>
          
          <p className="text-gray-800 mb-4 leading-relaxed">
            Hoy, se posiciona como el aliado clave de inversiones, 
            fondos de inversión y desarrollos inmobiliarios. 
            Acompañando a sus clientes en la materialización precisa 
            de sus objetivos a través de estrategias sólidas, 
            soluciones financieras, esquemas fiscales óptimos, 
            estructura, empuje desarrollo de alto valor y brinda 
            servicios diseñados para potenciar la creatividad y la 
            trascendencia de cada negocio.
          </p>
          
          <div className="mt-10">
            <p className="text-lg font-semibold mb-6">
              Construimos, desarrollamos e impulsamos proyectos de alto valor y participamos en la 
              comercialización de bienes inmuebles, empresas, franquicias e inversiones
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;