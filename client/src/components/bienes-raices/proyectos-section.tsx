import { FC } from "react";
import { motion } from "framer-motion";
import { Building2, Home, LayoutGrid, Warehouse, AlertTriangle } from "lucide-react";

interface ProyectoItemProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const ProyectoItem: FC<ProyectoItemProps> = ({ icon, title, delay }) => (
  <motion.div 
    className="flex flex-col items-center text-center mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="border border-gray-300 p-4 mb-3 rounded-md">
      {icon}
    </div>
    <p className="font-medium mt-2">{title}</p>
  </motion.div>
);

const ProyectosSection: FC = () => {
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
          Creamos, Desarrollamos e Impulsamos Proyectos Estratégicos
        </motion.h2>
        
        <motion.p 
          className="text-gray-700 mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Desde residencias exclusivas hasta desarrollos comerciales, 
          construimos espacios diseñados para habitar, expandir e invertir
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-5">
          <ProyectoItem 
            icon={<Home className="h-10 w-10" />} 
            title="Residencias" 
            delay={1}
          />
          <ProyectoItem 
            icon={<Building2 className="h-10 w-10" />} 
            title="Propiedad Horizontal" 
            delay={2}
          />
          <ProyectoItem 
            icon={<LayoutGrid className="h-10 w-10" />} 
            title="Urbanizaciones" 
            delay={3}
          />
          <ProyectoItem 
            icon={<Warehouse className="h-10 w-10" />} 
            title="Bodegas Industriales" 
            delay={4}
          />
        </div>
        
        <div className="flex justify-center mb-10">
          <ProyectoItem 
            icon={<AlertTriangle className="h-10 w-10" />} 
            title="Obra Paralizada" 
            delay={5}
          />
        </div>
        
        <motion.h3 
          className="text-2xl font-bold mb-3 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Nuestra Metodología: De la Estrategia a la Ejecución
        </motion.h3>
        
        <motion.p 
          className="text-gray-700 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Transformamos terrenos en desarrollos estratégicos, optimizando cada fase del proyecto 
          para ofrecer solidez, funcionalidad y máximo potencial.
        </motion.p>
      </div>
    </section>
  );
};

export default ProyectosSection;