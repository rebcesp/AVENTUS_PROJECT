import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import isotipoLogo from "@assets/Isotipo negro.png";

interface LogoDrawAnimationProps {
  progress: number;
}

const LogoDrawAnimation: FC<LogoDrawAnimationProps> = ({ progress }) => {
  // Calculamos el porcentaje completado para la opacidad y el stroke-dashoffset
  const pathDrawProgress = Math.min(progress * 1.5, 100); // Aceleramos un poco el dibujo del logo
  
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Imagen del logo con opacidad gradual */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: progress / 100 }}
      >
        <img src={isotipoLogo} alt="Aventus Logo" className="w-full h-full" />
      </motion.div>
      
      {/* Contorno animado del logo */}
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Contorno principal */}
        <motion.rect
          x="50"
          y="50"
          width="100"
          height="100"
          rx="8"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          style={{
            pathLength: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1 - pathDrawProgress / 100
          }}
        />
        
        {/* Líneas decorativas que se dibujan gradualmente */}
        <motion.line
          x1="40" 
          y1="40" 
          x2="160" 
          y2="40"
          stroke="black"
          strokeWidth="1"
          style={{
            pathLength: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1 - Math.max(pathDrawProgress - 30, 0) / 70
          }}
        />
        
        <motion.line
          x1="40" 
          y1="160" 
          x2="160" 
          y2="160"
          stroke="black"
          strokeWidth="1"
          style={{
            pathLength: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1 - Math.max(pathDrawProgress - 40, 0) / 60
          }}
        />
        
        <motion.line
          x1="40" 
          y1="40" 
          x2="40" 
          y2="160"
          stroke="black"
          strokeWidth="1"
          style={{
            pathLength: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1 - Math.max(pathDrawProgress - 50, 0) / 50
          }}
        />
        
        <motion.line
          x1="160" 
          y1="40" 
          x2="160" 
          y2="160"
          stroke="black"
          strokeWidth="1"
          style={{
            pathLength: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1 - Math.max(pathDrawProgress - 60, 0) / 40
          }}
        />
      </svg>
    </div>
  );
};

export default LogoDrawAnimation;