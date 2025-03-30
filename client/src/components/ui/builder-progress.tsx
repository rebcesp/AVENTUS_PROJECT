import { FC } from "react";
import { motion } from "framer-motion";
import BuilderIcon from "./builder-icon";
import HouseConstruction from "./house-construction";

interface BuilderProgressProps {
  progress: number;
}

const BuilderProgress: FC<BuilderProgressProps> = ({ progress }) => {
  // Calculamos la posición del constructor basado en el progreso
  const builderPosition = Math.min(progress, 100);
  
  return (
    <div className="relative w-full max-w-md h-32 my-4">
      <div className="flex items-center justify-between mx-auto max-w-xs">
        {/* Casa en construcción */}
        <div className="relative">
          <HouseConstruction 
            progress={progress} 
            size={80} 
            className="transform -translate-y-4"
          />
        </div>
        
        {/* Contenedor central con la barra de progreso */}
        <div className="flex-1 mx-4">
          {/* Texto de progreso */}
          <div className="text-center mb-2 text-sm font-medium text-gray-600">
            {Math.round(progress)}% Completado
          </div>
          
          {/* Barra de progreso principal */}
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-black rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Texto de estado */}
          <motion.div 
            className="text-center mt-1 text-xs text-gray-500"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {progress < 20 && "Preparando cimientos..."}
            {progress >= 20 && progress < 40 && "Construyendo estructura..."}
            {progress >= 40 && progress < 60 && "Instalando paredes..."}
            {progress >= 60 && progress < 80 && "Colocando ventanas y puertas..."}
            {progress >= 80 && progress < 95 && "Terminando el techo..."}
            {progress >= 95 && "¡Casi listo!"}
          </motion.div>
        </div>
        
        {/* Constructor animado */}
        <div className="relative">
          <motion.div
            animate={{ x: [0, 3, 0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <BuilderIcon size={50} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuilderProgress;