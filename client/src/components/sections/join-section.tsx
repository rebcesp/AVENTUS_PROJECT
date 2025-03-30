import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const JoinSection: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Únete a Aventus</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            ¿Quieres formar parte de nuestro equipo? Buscamos personas
            apasionadas, motivadas y con visión para hacer crecer juntos el
            futuro inmobiliario de Bolivia.
          </p>

          <Button className="bg-black text-white hover:bg-gray-800 inline-flex items-center">
            <span>Conviértete en asociado</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
