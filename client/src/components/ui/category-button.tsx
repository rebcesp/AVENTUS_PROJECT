import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface CategoryButtonProps {
  id: string;
  label: string;
}

const CategoryButton: FC<CategoryButtonProps> = ({ id, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Link 
        href={`/${id}`}
        className="block border border-black py-3 text-center font-medium transition-all hover:bg-gray-100"
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default CategoryButton;
