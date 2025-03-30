import { FC } from "react";
import Navbar from "@/components/layout/navbar";
import CategoryButton from "@/components/ui/category-button";
import FloatingButton from "@/components/ui/floating-button";
import { motion } from "framer-motion";

interface HomeProps {
  pageName?: string;
}

const Home: FC<HomeProps> = ({ pageName }) => {
  const categoryButtons = [
    { id: "bienes-raices", label: "Bienes Raíces" },
    { id: "empresarial", label: "Empresarial" },
    { id: "inversiones", label: "Inversiones" },
  ];

  // Render specific page content or home page
  const renderContent = () => {
    if (!pageName) {
      // Home page content
      return (
        <>
          <section className="mb-10">
            <motion.h1 
              className="text-3xl font-bold mb-2 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Construimos Sueños, Creamos Legados
            </motion.h1>
            <motion.p 
              className="text-gray-700 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Tu tienes la visión, nosotros la hacemos realidad.
            </motion.p>
          </section>
          
          <section className="flex flex-col space-y-4">
            {categoryButtons.map((button, index) => (
              <motion.div
                key={button.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <CategoryButton 
                  id={button.id} 
                  label={button.label} 
                />
              </motion.div>
            ))}
          </section>
        </>
      );
    }
    
    // Inner pages content
    return (
      <section className="pt-6">
        <motion.h1 
          className="text-3xl font-bold mb-8 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {pageName}
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <p className="text-lg">
            Estamos trabajando en esta sección. Pronto tendremos más información sobre {pageName}.
          </p>
        </motion.div>
      </section>
    );
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-white text-black">
      <Navbar />
      
      <motion.main 
        className="flex-grow px-6 pt-8 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderContent()}
      </motion.main>
      
      <FloatingButton />
    </div>
  );
};

export default Home;
