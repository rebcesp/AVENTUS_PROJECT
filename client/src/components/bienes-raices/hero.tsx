import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const BienesRaicesHero: FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gray-50 relative px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Construimos con Propósito.<br/>
          Desarrollamos con Visión
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Llevamos cada proyecto más allá de la construcción, 
          creando espacios que trascienden y generan valor
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <p className="text-sm mb-2">Construye tu espacio ideal</p>
            <Button variant="outline" className="w-full sm:w-auto">
              Constructora
            </Button>
          </div>
          
          <div>
            <p className="text-sm mb-2">Desarrolla en asociación con capital</p>
            <Button variant="outline" className="w-full sm:w-auto">
              Desarrolladora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BienesRaicesHero;