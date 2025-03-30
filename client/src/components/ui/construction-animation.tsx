import { FC } from "react";
import { motion } from "framer-motion";

const ConstructionAnimation: FC = () => {
  return (
    <div className="relative w-full h-44 mt-4 overflow-hidden">
      {/* Base/terreno */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-4 bg-black"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Edificio en construcción central */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        {/* Estructura base del edificio */}
        <motion.div
          className="w-48 h-64 border-2 border-black relative"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 64 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ transformOrigin: "bottom" }}
        >
          {/* Pisos del edificio */}
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className={`absolute w-full h-16 border-t-2 border-black ${index === 0 ? 'border-t-0' : ''}`}
              style={{ bottom: `${index * 16}px` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.3 }}
            >
              {/* Ventanas para cada piso */}
              <div className="flex justify-around px-2 pt-2">
                {[0, 1, 2].map((windowIndex) => (
                  <motion.div
                    key={windowIndex}
                    className="w-10 h-10 bg-gray-100 border border-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1 + index * 0.3 + windowIndex * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Grúa de construcción izquierda */}
      <div className="absolute bottom-4 left-8">
        <motion.div
          className="w-2 h-32 bg-gray-700"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ transformOrigin: "bottom" }}
        />
        <motion.div
          className="w-16 h-2 bg-gray-700 absolute left-0 top-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          style={{ transformOrigin: "left" }}
        />
        
        {/* Cable */}
        <motion.div
          className="w-0.5 h-12 bg-gray-700 absolute left-16 top-2"
          initial={{ height: 0 }}
          animate={{ height: 12 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          style={{ transformOrigin: "top" }}
        />
        
        {/* Bloque de construcción */}
        <motion.div
          className="w-6 h-6 bg-black absolute left-14 top-14"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 5, 10, 5, 0]
          }}
          transition={{ 
            opacity: { duration: 0.3, delay: 2.9 },
            y: { duration: 2, delay: 3, repeat: Infinity }
          }}
        />
      </div>

      {/* Grúa de construcción derecha */}
      <div className="absolute bottom-4 right-8">
        <motion.div
          className="w-2 h-48 bg-gray-700"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ transformOrigin: "bottom" }}
        />
        <motion.div
          className="w-24 h-2 bg-gray-700 absolute -right-20 top-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{ transformOrigin: "right" }}
        />
        
        {/* Cable */}
        <motion.div
          className="w-0.5 h-16 bg-gray-700 absolute -right-8 top-6"
          initial={{ height: 0 }}
          animate={{ height: 16 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          style={{ transformOrigin: "top" }}
        />
        
        {/* Bloque colgando */}
        <motion.div
          className="w-8 h-8 bg-black absolute -right-10 top-22"
          initial={{ y: -10, opacity: 0 }}
          animate={{ 
            y: [0, 8, 16, 8, 0],
            opacity: 1
          }}
          transition={{ 
            y: { duration: 2, delay: 2.6, repeat: Infinity, repeatType: "reverse" },
            opacity: { duration: 0.4, delay: 2.6 }
          }}
        />
      </div>

      {/* Andamios a la izquierda */}
      <div className="absolute bottom-4 left-24">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-8 h-1 bg-gray-600 absolute"
            style={{ bottom: `${index * 12 + 8}px`, left: '-12px' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
            custom={index}
          />
        ))}
      </div>

      {/* "Obreros" (puntos que se mueven) */}
      <motion.div
        className="w-3 h-3 rounded-full bg-red-600 absolute"
        initial={{ bottom: 4, left: '20%' }}
        animate={{ 
          left: ['20%', '30%', '40%', '50%', '60%']
        }}
        transition={{ 
          duration: 6, 
          times: [0, 0.2, 0.4, 0.7, 1], 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <motion.div
        className="w-3 h-3 rounded-full bg-blue-600 absolute"
        initial={{ bottom: 20, right: '30%' }}
        animate={{ 
          right: ['30%', '40%', '50%', '40%', '30%']
        }}
        transition={{ 
          duration: 8, 
          times: [0, 0.3, 0.5, 0.7, 1], 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
    </div>
  );
};

export default ConstructionAnimation;