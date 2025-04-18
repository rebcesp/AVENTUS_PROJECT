import { FC } from "react";
import { Helmet } from 'react-helmet';

// Importar usando rutas relativas en lugar de alias
import Navbar from "../components/layout/navbar";
import FloatingButton from "../components/ui/floating-button";
import BienesRaicesHero from "../components/bienes-raices/hero";
import ProyectosSection from "../components/bienes-raices/proyectos-section";
import MetodologiaSection from "../components/bienes-raices/metodologia-section";
import ConstruyeDesarrollaSection from "../components/bienes-raices/construye-desarrolla-section";
import ConstructoraSection from "../components/bienes-raices/constructora-section";
import DesarrolladoraSection from "../components/bienes-raices/desarrolladora-section";
import SomosAventusSection from "../components/bienes-raices/somos-aventus-section";
import VisionSection from "../components/bienes-raices/vision-section";
import BienesRaicesContact from "../components/bienes-raices/contact";
import FooterSection from "../components/sections/footer-section";

const BienesRaices: FC = () => {
  return (
    <>
      <Helmet>
        <title>Bienes Raíces | Aventus</title>
        <meta name="description" content="Servicios de bienes raíces de Aventus. Desarrollo y construcción de proyectos inmobiliarios de alta calidad." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Navbar />
        
        <main className="flex-grow">
          <BienesRaicesHero />
          <ProyectosSection />
          <MetodologiaSection />
          <ConstruyeDesarrollaSection />
          <ConstructoraSection />
          <DesarrolladoraSection />
          <SomosAventusSection />
          <VisionSection />
          <BienesRaicesContact />
        </main>
        
        <FooterSection />
        <FloatingButton />
      </div>
    </>
  );
};

export default BienesRaices;