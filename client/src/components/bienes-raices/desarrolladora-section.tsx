import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Handshake, FileText, ClipboardList, LineChart, Building } from "lucide-react";

interface ServicioDesarrolladoraProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServicioDesarrolladora: FC<ServicioDesarrolladoraProps> = ({ icon, title, description, delay }) => (
  <motion.div 
    className="border border-gray-200 p-5 mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="w-10 h-10 border border-gray-300 flex items-center justify-center mb-3">
      {icon}
    </div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-700">{description}</p>
  </motion.div>
);

const DesarrolladoraSection: FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Desarrolladora
        </motion.h2>
        
        <motion.p 
          className="text-gray-700 mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Especializada en el desarrollo de proyectos inmobiliarios integrales
        </motion.p>
        
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-medium mb-3">Servicios</h3>
          <p className="text-sm text-gray-700 mb-6">
            Transformamos terrenos en activos de alto valor, gestionando cada fase 
            con un enfoque estratégico que optimiza rentabilidad y eficiencia.
          </p>
        </motion.div>
        
        <div className="space-y-6">
          <ServicioDesarrolladora
            icon={<Handshake className="h-5 w-5" />}
            title="Alianzas en Asociación Estratégica"
            description="Conectamos propietarios e inversionistas para crear proyectos rentables, mediante estudios de viabilidad y estructuración financiera, sin necesidad de financiamiento tradicional."
            delay={1}
          />
          
          <ServicioDesarrolladora
            icon={<FileText className="h-5 w-5" />}
            title="Elaboración de Planes de Negocio"
            description="Creación de un plan estratégico completo, desde el análisis de mercado, la viabilidad financiera, el plan de mercadotecnia y el plan de ejecución."
            delay={2}
          />
          
          <ServicioDesarrolladora
            icon={<ClipboardList className="h-5 w-5" />}
            title="Trámites y servicios de gestoría"
            description="Asesoría y gestión de todos los trámites, permisos y licencias necesarios para llevar a cabo el proyecto cumpliendo con las regulaciones y normativas."
            delay={3}
          />
          
          <ServicioDesarrolladora
            icon={<Building className="h-5 w-5" />}
            title="Análisis de propiedad/ Due diligence"
            description="Evaluación detallada y exhaustiva de propiedades y terrenos para determinar su viabilidad y potencial, considerando factores clave, análisis financiero, due diligence legal y evaluación técnica."
            delay={4}
          />
          
          <ServicioDesarrolladora
            icon={<LineChart className="h-5 w-5" />}
            title="Gerencia Comercial / Estrategia de Ventas"
            description="Diseñamos y gestionamos estrategias de realización, gestión de ventas y alianzas para maximizar las oportunidades y asegurar el éxito comercial de los proyectos inmobiliarios que construimos y desarrollamos."
            delay={5}
          />
        </div>
        
        <div className="mt-10 text-center">
          <Button className="mt-4">
            Empieza a Desarrollar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesarrolladoraSection;