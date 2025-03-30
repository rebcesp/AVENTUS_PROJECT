import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection: FC = () => {
  return (
    <section className="py-16 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-2xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contacto
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Únete a Aventus</h3>
            <p className="text-gray-700 mb-6">
              Estamos construyendo el futuro inmobiliario de México. Si buscas una oportunidad para crecer 
              profesionalmente y formar parte de proyectos innovadores, ¡queremos conocerte!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-medium mr-2">Correo:</span>
                <a href="mailto:contacto@aventus.mx" className="text-gray-700 hover:underline">
                  contacto@aventus.mx
                </a>
              </div>
              
              <div className="flex items-center">
                <span className="font-medium mr-2">Teléfono:</span>
                <a href="tel:+52 55 1234 5678" className="text-gray-700 hover:underline">
                  +52 55 1234 5678
                </a>
              </div>
              
              <div className="flex items-center">
                <span className="font-medium mr-2">Dirección:</span>
                <span className="text-gray-700">
                  Av. Paseo de la Reforma 296, Juárez, CDMX
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <div>
                <Input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="border-black focus:ring-black"
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="border-black focus:ring-black"
                />
              </div>
              
              <div>
                <Input 
                  type="tel" 
                  placeholder="Teléfono" 
                  className="border-black focus:ring-black"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Mensaje" 
                  className="border-black focus:ring-black min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Enviar mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;