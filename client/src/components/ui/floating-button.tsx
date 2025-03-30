import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const FloatingButton: FC = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 400, damping: 15 }}
    >
      <Link 
        href="/contactanos"
        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition-colors"
      >
        W
      </Link>
    </motion.div>
  );
};

export default FloatingButton;
