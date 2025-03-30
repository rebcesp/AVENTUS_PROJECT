import { FC } from "react";
import { motion } from "framer-motion";

interface CategoryButtonProps {
  id: string;
  label: string;
}

const CategoryButton: FC<CategoryButtonProps> = ({ id, label }) => {
  return (
    <motion.a
      href={`#${id}`}
      className="block border border-black py-3 text-center font-medium transition-all hover:bg-gray-100"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {label}
    </motion.a>
  );
};

export default CategoryButton;
