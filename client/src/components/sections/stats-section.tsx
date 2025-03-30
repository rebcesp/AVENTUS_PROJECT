import { FC } from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
}

const StatItem: FC<StatItemProps> = ({ number, label, delay }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-4xl md:text-5xl font-bold mb-2">{number}</p>
      <p className="text-gray-700">{label}</p>
    </motion.div>
  );
};

const StatsSection: FC = () => {
  const stats = [
    {
      number: "+30",
      label: "Años de experiencia"
    },
    {
      number: "+200",
      label: "Proyectos completados"
    },
    {
      number: "+500",
      label: "Clientes satisfechos"
    },
    {
      number: "15+",
      label: "Premios de excelencia"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              number={stat.number}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;