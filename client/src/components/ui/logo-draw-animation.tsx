import { FC } from "react";
import { motion } from "framer-motion";
import isotipoLogo from "@assets/Isotipo negro.png";

interface LogoDrawAnimationProps {
  progress: number;
}

const LogoDrawAnimation: FC<LogoDrawAnimationProps> = ({ progress }) => {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Imagen del logo con fade in gradual */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: progress / 100, 
          scale: 0.8 + (progress / 500) // Scale from 0.8 to 1.0
        }}
        transition={{ duration: 0.5 }}
      >
        <img src={isotipoLogo} alt="Aventus Logo" className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default LogoDrawAnimation;