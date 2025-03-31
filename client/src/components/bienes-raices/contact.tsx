import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const BienesRaicesContact: FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-2xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Si buscas construir tu visión, contáctanos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Nombre"
                className="border-gray-300 focus:ring-black"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Apellido"
                className="border-gray-300 focus:ring-black"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Correo Electrónico"
                className="border-gray-300 focus:ring-black"
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Teléfono / Whatsapp"
                className="border-gray-300 focus:ring-black"
              />
            </div>

            <div>
              <Textarea
                placeholder="Mensaje"
                className="border-gray-300 focus:ring-black min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Enviar
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BienesRaicesContact;