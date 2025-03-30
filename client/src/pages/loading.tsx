import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import LogoDrawAnimation from "@/components/ui/logo-draw-animation";

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
    }, 4000); // 4 segundos en total para la animación

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [setLocation]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo con animación de dibujo */}
      <LogoDrawAnimation progress={progress} />
      
      {/* Texto animado con fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: progress > 30 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8 mb-8 text-xl font-medium text-black"
      >
        Construimos Sueños, Creamos Legados
      </motion.div>
      
      {/* Barra de progreso minimalista */}
      <div className="w-64 h-0.5 bg-gray-200 rounded-full overflow-hidden mt-4">
        <motion.div
          className="h-full bg-black"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Porcentaje de carga con fade in */}
      <motion.div 
        className="mt-2 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {progress}%
      </motion.div>
    </div>
  );
};

export default LoadingPage;