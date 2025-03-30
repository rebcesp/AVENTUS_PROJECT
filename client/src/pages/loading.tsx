import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import isotipoLogo from "@assets/Isotipo negro.png";
import ConstructionAnimation from "@/components/ui/construction-animation";

const LoadingPage: FC = () => {
  const [, setLocation] = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Incrementar el progreso gradualmente
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    // Redirigir al home después de completar la animación
    const redirectTimer = setTimeout(() => {
      setLocation("/home");
    }, 5000); // 5 segundos en total para la animación

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [setLocation]);

  // Calcular la rotación basada en el progreso
  const rotation = progress * 3.6; // 360 grados / 100% = 3.6 grados por porcentaje

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative w-40 h-40 mb-12">
        {/* Logo central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img src={isotipoLogo} alt="Aventus Logo" className="w-full h-full" />
        </motion.div>
        
        {/* Elementos de construcción animados alrededor del logo */}
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: rotation }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          {/* Líneas que representan "construcción" */}
          <motion.div
            className="absolute top-0 left-1/2 w-1 h-6 bg-black -translate-x-1/2 -translate-y-full"
            initial={{ height: 0 }}
            animate={{ height: 24 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 w-1 h-6 bg-black -translate-x-1/2 translate-y-full"
            initial={{ height: 0 }}
            animate={{ height: 24 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          />
          <motion.div
            className="absolute left-0 top-1/2 h-1 w-6 bg-black -translate-y-1/2 -translate-x-full"
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          />
          <motion.div
            className="absolute right-0 top-1/2 h-1 w-6 bg-black -translate-y-1/2 translate-x-full"
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          />
        </motion.div>
      </div>

      {/* Texto animado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-6 text-xl font-medium text-black"
      >
        Construimos Sueños, Creamos Legados
      </motion.div>
      
      {/* Barra de progreso estilizada como regla de construcción */}
      <div className="w-64 h-4 bg-gray-100 border border-black relative overflow-hidden">
        {/* Marcas de medición */}
        <div className="absolute inset-0 flex justify-between px-1">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="h-full flex flex-col justify-center items-center">
              <div className={`w-0.5 h-${i % 5 === 0 ? '3' : '1.5'} bg-black`}></div>
            </div>
          ))}
        </div>
        
        {/* Barra de progreso */}
        <motion.div
          className="h-full bg-black absolute top-0 left-0"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Porcentaje */}
        <div className="absolute inset-0 flex justify-center items-center">
          <span className={`text-xs font-bold ${progress > 50 ? 'text-white' : 'text-black'}`}>
            {progress}%
          </span>
        </div>
      </div>

      {/* Animación de construcción */}
      <ConstructionAnimation />
      
      {/* Bloques de construcción animados */}
      <div className="flex my-6 space-x-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-black"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: [20, 0, 0, 0, 20],
              opacity: [0, 1, 1, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;