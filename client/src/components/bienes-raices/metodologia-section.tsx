import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MetodologiaItemProps {
  title: string;
  description: string;
  delay: number;
}

const MetodologiaItem: FC<MetodologiaItemProps> = ({ title, description, delay }) => (
  <motion.div 
    className="bg-white p-5 rounded border border-gray-200 mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-700">{description}</p>
  </motion.div>
);

const MetodologiaSection: FC = () => {
  return (
    <section className="py-14 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          <MetodologiaItem 
            title="Construcción y Ejecución" 
            description="Construimos con ingeniería avanzada y los más altos estándares de calidad, garantizando precisión, solidez y excelencia en cada obra"
            delay={1}
          />
          
          <MetodologiaItem 
            title="Alianzas Estratégicas" 
            description="Conectamos propietarios e inversionistas para desarrollar y materializar proyectos, generando valor y beneficios compartidos."
            delay={2}
          />
          
          <MetodologiaItem 
            title="Planificación y Estrategia" 
            description="Alineamos cada fase, desde la conceptualización hasta la comercialización, con los objetivos específicos de cada cliente"
            delay={3}
          />
          
          <MetodologiaItem 
            title="Diseño y Desarrollo" 
            description="Fusionamos innovación arquitectónica y optimización estructural para crear espacios que inspiran, transforman y elevan su entorno."
            delay={4}
          />
          
          <MetodologiaItem 
            title="Comercialización y Posicionamiento" 
            description="Implementamos estrategias de comercialización para posicionar, maximizar rentabilidad y asegurar el éxito de cada proyecto."
            delay={5}
          />
        </div>
        
        <motion.div 
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6">
            Conoce el verdadero potencial de tu inmueble con un análisis profesional y sin compromiso."
          </h3>
          
          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex items-start">
              <span className="font-bold text-black mr-2">•</span>
              <span>¿Qué obtendrás? — Una evaluación de las oportunidades reales de tu propiedad para maximizar su valor.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-black mr-2">•</span>
              <span>Cómo realizamos el análisis — Estudiamos varios factores para entender el potencial urbanístico y arquitectónico de tu propiedad.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-black mr-2">•</span>
              <span>Propuesta del valor — Podrás ver plan personalizado para transformar tu inmueble y potencializar sus capacidades.</span>
            </li>
          </ul>
          
          <Button className="mt-4">
            Solicita tu análisis Ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MetodologiaSection;