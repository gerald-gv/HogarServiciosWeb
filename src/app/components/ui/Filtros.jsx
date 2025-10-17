"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Filtros({ categories, onFilter }) {
  const [selected, setSelected] = useState("Todos");
  const [showBar, setShowBar] = useState(true);
  const lastScrollY = useRef(0)
  
  //const [lastScrollY, setLastScrollY] = useState(0);


  const handleSelect = (category) => {
    setSelected(category);
    onFilter(category === "Todos" ? null : category);
  };

  const allCategories = categories.includes("Todos")
    ? categories
    : ["Todos", ...categories];

  // 👇 Detecta el scroll y actualiza visibilidad de la barra
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        // Scrolling hacia abajo → ocultar
        setShowBar(false);
      } else {
        // Scrolling hacia arriba → mostrar
        setShowBar(true);
      }

      lastScrollY.current = currentScroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: showBar ? 1 : 0,
        y: showBar ? 0 : 100, // desliza hacia abajo
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
        bg-white/80 backdrop-blur-md border-t border-gray-200
        md:border-r md:border-t-0 md:backdrop-blur-0
        fixed md:static bottom-0 left-0 w-full md:w-60 
        z-30 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:shadow-none
      `}
    >
      {/* Solo visible en escritorio */}
      <h2 className="hidden md:block text-lg font-semibold mb-4 p-4 text-gray-800">
        Categorías
      </h2>

      <ul
        className={`
          flex md:flex-col 
          overflow-x-auto md:overflow-visible 
          space-x-2 md:space-x-0 md:space-y-2
          p-2 md:p-4
        `}
      >
        {allCategories.map((category) => (
          <motion.li
            key={category.id}
            onClick={() => handleSelect(category.category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className={`
              whitespace-nowrap px-3 py-2 md:p-3 rounded-xl font-medium text-sm sm:text-base 
              cursor-pointer transition-colors flex-shrink-0 
              ${
                selected === category.category
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {category.category}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
