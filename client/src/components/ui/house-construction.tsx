import React from 'react';
import { motion } from 'framer-motion';

interface HouseConstructionProps {
  progress: number;
  size?: number;
  className?: string;
}

const HouseConstruction: React.FC<HouseConstructionProps> = ({ 
  progress, 
  size = 40,
  className 
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        {/* Base / Cimientos */}
        <motion.rect
          x="5"
          y="30"
          width="30"
          height="2"
          fill="#6B7280"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress >= 10 ? 1 : progress / 10 }}
          style={{ originX: 0 }}
        />
        
        {/* Estructura básica de la casa */}
        <motion.rect
          x="7"
          y="20"
          width="26"
          height="10"
          fill="white"
          stroke="black"
          strokeWidth="1"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: progress >= 40 ? 1 : progress < 20 ? 0 : (progress - 20) / 20 }}
          style={{ originY: 1, originX: 0.5 }}
        />
        
        {/* Techo de la casa */}
        <motion.path
          d="M5 20L20 10L35 20"
          stroke="black"
          strokeWidth="1.5"
          fill={progress >= 80 ? "#EF4444" : "transparent"}
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: progress >= 70 ? 1 : progress < 50 ? 0 : (progress - 50) / 20 
          }}
        />
        
        {/* Puerta */}
        <motion.rect
          x="17"
          y="24"
          width="6"
          height="8"
          fill="#7C3AED"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: progress >= 60 ? 1 : progress < 40 ? 0 : (progress - 40) / 20 }}
          style={{ originY: 1 }}
        />
        
        {/* Ventanas */}
        <motion.rect
          x="10"
          y="23"
          width="4"
          height="4"
          fill="#BFDBFE"
          stroke="black"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: progress >= 65 ? 1 : progress < 55 ? 0 : (progress - 55) / 10 }}
        />
        
        <motion.rect
          x="26"
          y="23"
          width="4"
          height="4"
          fill="#BFDBFE"
          stroke="black"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: progress >= 70 ? 1 : progress < 60 ? 0 : (progress - 60) / 10 }}
        />
        
        {/* Detalles finales - chimenea */}
        <motion.rect
          x="27"
          y="12"
          width="3"
          height="4"
          fill="#6B7280"
          initial={{ opacity: 0, y: -2 }}
          animate={{ 
            opacity: progress >= 90 ? 1 : 0,
            y: progress >= 90 ? 0 : -2
          }}
        />
        
        {/* Humo de la chimenea */}
        {progress >= 95 && (
          <>
            <motion.circle
              cx="28.5"
              cy="10"
              r="1"
              fill="#9CA3AF"
              animate={{ y: [-1, -2, -3], opacity: [0.8, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              cx="29.5"
              cy="8"
              r="0.8"
              fill="#9CA3AF"
              animate={{ y: [-1, -2, -3], opacity: [0.8, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default HouseConstruction;