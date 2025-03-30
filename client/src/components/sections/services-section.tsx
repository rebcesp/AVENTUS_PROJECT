import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceItemProps {
  title: string;
  description: string;
  delay: number;
}

const ServiceItem: FC<ServiceItemProps> = ({ title, description, delay }) => {
  return (
    <motion.div 
      className="border border-gray-200 p-6 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center text-sm font-medium">
        <span>Ver más</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </motion.div>
  );
};

const ServicesSection: FC = () => {
  const services = [
    {
      title: "Bienes Raíces",
      description: "Desarrollamos, impulsamos y construimos proyectos inmobiliarios de alto valor con retornos precisos."
    },
    {
      title: "Empresarial",
      description: "Asesoramos empresas para potenciar su valor, expansión y rentabilidad en el mercado."
    },
    {
      title: "Inversiones",
      description: "Diseñamos estrategias de inversión a medida para maximizar rendimientos y minimizar riesgos."
    }
  ];

  return (
    <section className="py-16 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 
          className="text-2xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Nuestros Servicios
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;