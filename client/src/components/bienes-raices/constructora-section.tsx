import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Wrench, Building, BarChart4, GitMerge } from "lucide-react";

interface ServicioConstructoraProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServicioConstructora: FC<ServicioConstructoraProps> = ({ icon, title, description, delay }) => (
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

const ConstructoraSection: FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Constructora
        </motion.h2>
        
        <motion.p 
          className="text-gray-700 mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Damos vida a los espacios, convertimos sueños en cimientos firmes
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
            "Ejecutamos un plan de acción de forma correcta y tangible para construir todo tipo de obras civiles, 
            con nuestra calidad constructiva, servicios y tecnología, concretamos sueños
          </p>
        </motion.div>
        
        <div className="space-y-6">
          <ServicioConstructora
            icon={<Wrench className="h-5 w-5" />}
            title="Construcción y supervisión de obras"
            description="Ejecución y desarrollo de obra civil con ingeniería de precisión, garantizando estructuras de alta resistencia, eficiencia máxima y cumplimiento riguroso de los más altos estándares constructivos"
            delay={1}
          />
          
          <ServicioConstructora
            icon={<Building className="h-5 w-5" />}
            title="Dirección General"
            description="Dirección y administración de proyectos llave en mano, desde el plan de negocios, pre-construcción y edificación."
            delay={2}
          />
          
          <ServicioConstructora
            icon={<BarChart4 className="h-5 w-5" />}
            title="Costos y presupuestos"
            description="Desarrollo de propuestas económicas, explosión de insumos, programa de erogaciones y suministros."
            delay={3}
          />
          
          <ServicioConstructora
            icon={<GitMerge className="h-5 w-5" />}
            title="Coordinación de ingenierías"
            description="Cruce de ingenierías, interpretación de estudios, desarrollo de ingenierías de valor, revisión/propuesta de especificaciones técnicas."
            delay={4}
          />
        </div>
        
        <div className="mt-10 text-center">
          <Button className="mt-4">
            Empieza a Construir
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConstructoraSection;