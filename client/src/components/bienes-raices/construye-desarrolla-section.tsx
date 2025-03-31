import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const ConstruyeDesarrollaSection: FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-5 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Construye, Desarrolla y Trasciende
        </motion.h2>
        
        <motion.p 
          className="text-gray-700 mb-14 text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Desde la construcción de espacios exclusivos hasta la transformación de terrenos en desarrollos estratégicos, 
          conectamos visión, inversión y ejecución para maximizar cada proyecto
        </motion.p>
        
        <div className="space-y-16">
          {/* Primera sección - Construye */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Construye tu espacio perfecto</h3>
            
            <p className="text-gray-700 mb-6 max-w-2xl">
              Diseñamos y construimos residencias y proyectos comerciales de alto nivel, 
              fusionando innovación, funcionalidad y excelencia para elevar su entorno y potenciar su valor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline">
                Construye Ahora
              </Button>
              <Button variant="outline">
                Explora Constructora
              </Button>
            </div>
          </motion.div>
          
          {/* Segunda sección - Desarrolla */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Desarrolla con inversión estratégica</h3>
            
            <p className="text-gray-700 mb-6 max-w-2xl">
              Transformamos terrenos en desarrollos de alto impacto, creando 
              alianzas estratégicas que conectan inversión y visión, maximizando 
              valor, rentabilidad y crecimiento
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline">
                Desarrolla en Alianza
              </Button>
              <Button variant="outline">
                Explora Desarrolladora
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConstruyeDesarrollaSection;