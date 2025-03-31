import { FC } from "react";
import Navbar from "../components/layout/navbar";
import FloatingButton from "../components/ui/floating-button";
import { motion } from "framer-motion";

// Import all sections
import HeroSection from "../components/sections/hero-section";
import ServicesSection from "../components/sections/services-section";
import AboutSection from "../components/sections/about-section";
import StatsSection from "../components/sections/stats-section";
import JoinSection from "../components/sections/join-section";
import ContactSection from "../components/sections/contact-section";
import FooterSection from "../components/sections/footer-section";

interface HomeProps {
  pageName?: string;
}

const Home: FC<HomeProps> = ({ pageName }) => {
  // Render specific page content or home page
  const renderContent = () => {
    if (!pageName) {
      // Home page content - Landing page
      return (
        <>
          <HeroSection />
          <ServicesSection />
          <StatsSection />
          <AboutSection />
          <JoinSection />
          <ContactSection />
          <FooterSection />
        </>
      );
    }
    
    // Inner pages content
    return (
      <section className="pt-6 px-6">
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
        className="flex-grow"
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
