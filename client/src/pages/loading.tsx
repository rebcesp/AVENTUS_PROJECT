import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import LogoDrawAnimation from "@/components/ui/logo-draw-animation";
import BuilderProgress from "@/components/ui/builder-progress";

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
    }, 40); // Un poco más lento para que se vea mejor la animación

    // Redirigir al home después de completar la animación
    const redirectTimer = setTimeout(() => {
      setLocation("/home");
    }, 5000); // 5 segundos para ver la animación completa

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [setLocation]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Logo con animación de fade in */}
      <LogoDrawAnimation progress={progress} />
      
      {/* Texto animado con fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: progress > 30 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8 mb-8 text-xl font-medium text-black text-center"
      >
        Construimos Sueños, Creamos Legados
      </motion.div>
      
      {/* Animación del constructor construyendo una casa */}
      <BuilderProgress progress={progress} />
    </div>
  );
};

export default LoadingPage;