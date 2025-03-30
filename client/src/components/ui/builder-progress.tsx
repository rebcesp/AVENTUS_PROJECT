import { FC } from "react";
import { motion } from "framer-motion";

interface BuilderProgressProps {
  progress: number;
}

const BuilderProgress: FC<BuilderProgressProps> = ({ progress }) => {
  // Calculamos la posición del constructor basado en el progreso
  const builderPosition = Math.min(progress, 100);
  
  return (
    <div className="relative w-full max-w-md h-16 my-4">
      {/* Fondo para la barra de progreso - representa el terreno */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200 rounded-full" />
      
      {/* Base de la casa - se construye gradualmente */}
      <motion.div 
        className="absolute bottom-1 left-0 right-0 mx-auto w-32 h-1 bg-gray-400"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(progress * 0.32, 32)}%` }}
      />
      
      {/* Barra de progreso principal */}
      <motion.div 
        className="absolute bottom-0 left-0 h-2 bg-black rounded-full"
        style={{ width: `${progress}%` }}
      />
      
      {/* Constructor (representado como un círculo que se mueve) */}
      <motion.div 
        className="absolute bottom-2"
        style={{ left: `${builderPosition}%` }}
        animate={{ 
          y: [0, -2, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* Silueta del constructor */}
        <div className="relative">
          {/* Cuerpo */}
          <div className="w-4 h-6 bg-black rounded-t-full" />
          
          {/* Casco */}
          <div className="absolute top-0 left-0 w-4 h-1.5 bg-yellow-500 rounded-t-full" />
          
          {/* Brazo derecho (martillo) */}
          <motion.div 
            className="absolute top-1 -right-2 w-4 h-1 bg-black rounded"
            style={{ originX: 0, originY: 0.5 }} 
            animate={{ rotate: [0, -30, 0] }}
            transition={{ 
              duration: 0.5, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          >
            {/* Martillo */}
            <div className="absolute right-0 -top-1 w-1.5 h-2 bg-gray-600" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Casa en construcción (aparece gradualmente) */}
      <motion.div 
        className="absolute bottom-4 right-0 flex flex-col items-center justify-end"
        style={{ 
          opacity: Math.min(progress / 50, 1),
          right: `${5}%`,
        }}
      >
        {/* Techo */}
        <motion.div 
          className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-black"
          style={{ 
            opacity: progress > 70 ? 1 : 0,
            scale: progress > 70 ? 1 : 0 
          }}
        />
        
        {/* Paredes */}
        <motion.div 
          className="w-12 h-8 bg-white border-2 border-black"
          style={{ 
            scaleY: Math.min(progress / 60, 1) 
          }}
        >
          {/* Puerta */}
          <motion.div 
            className="absolute bottom-0 left-1 w-3 h-4 bg-black"
            style={{ 
              opacity: progress > 40 ? 1 : 0,
              scaleY: Math.min((progress - 40) / 30, 1)
            }}
          />
          
          {/* Ventana */}
          <motion.div 
            className="absolute top-1 right-1 w-3 h-3 bg-blue-100 border border-black"
            style={{ 
              opacity: progress > 50 ? 1 : 0
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Porcentaje de progreso */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default BuilderProgress;