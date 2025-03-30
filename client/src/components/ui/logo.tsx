import { FC } from "react";
import aventusLogo from "@assets/Logo principal negro.png";

const AventusLogo: FC = () => {
  return (
    <div className="aventus-logo">
      <img 
        src={aventusLogo} 
        alt="Aventus Logo" 
        className="w-auto h-12"
      />
    </div>
  );
};

export default AventusLogo;
