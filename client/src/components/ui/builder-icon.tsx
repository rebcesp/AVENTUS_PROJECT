import React from 'react';
import { motion } from 'framer-motion';

interface BuilderIconProps {
  size?: number;
  className?: string;
}

const BuilderIcon: React.FC<BuilderIconProps> = ({ size = 24, className }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        {/* Casco */}
        <motion.path
          d="M6 9C6 6.5 8 5 12 5C16 5 18 6.5 18 9"
          stroke="#F59E0B"
          strokeWidth="2.5"
          fill="#F59E0B"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Cara */}
        <motion.path
          d="M9 10.5C9 10.5 10.5 11 12 11C13.5 11 15 10.5 15 10.5"
          stroke="#000000"
          strokeWidth="0.75"
          initial={{ y: 0 }}
          animate={{ y: [0, 0.5, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Ojos */}
        <motion.circle cx="10" cy="9" r="0.6" fill="#000000" />
        <motion.circle cx="14" cy="9" r="0.6" fill="#000000" />
        
        {/* Cuerpo */}
        <motion.path
          d="M8 11.5L8 16.5"
          stroke="#1E40AF"
          strokeWidth="3"
          initial={{ y: 0 }}
          animate={{ y: [0, 0.2, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
        <motion.path
          d="M16 11.5L16 16.5"
          stroke="#1E40AF"
          strokeWidth="3"
          initial={{ y: 0 }}
          animate={{ y: [0, 0.2, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
        />
        
        {/* Torso */}
        <motion.path
          d="M7.5 12H16.5"
          stroke="#1E40AF"
          strokeWidth="3"
          initial={{ y: 0 }}
          animate={{ y: [0, 0.2, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
        
        {/* Brazo con martillo */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: [-10, 30, -10] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          style={{ originX: 0.67, originY: 0.5 }}
        >
          <path
            d="M16.5 12L19.5 12"
            stroke="#1E40AF"
            strokeWidth="2"
          />
          <path
            d="M19.5 10L19.5 14"
            stroke="#6B7280"
            strokeWidth="2.5"
          />
          <path
            d="M19 9.5L22 9.5"
            stroke="#6B7280"
            strokeWidth="1.5"
          />
        </motion.g>
        
        {/* Piernas */}
        <motion.path
          d="M10 16.5L9 20"
          stroke="#1E40AF"
          strokeWidth="2"
          initial={{ x: 0 }}
          animate={{ x: [0, 0.3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M14 16.5L15 20"
          stroke="#1E40AF"
          strokeWidth="2"
          initial={{ x: 0 }}
          animate={{ x: [0, -0.3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
        />
      </svg>
    </div>
  );
};

export default BuilderIcon;