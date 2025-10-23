"use client";

import { motion } from "framer-motion";
import { Skeleton } from "../../ui/skeleton";

const LoaderFiltros = ({ count }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className='
        bg-white/80 backdrop-blur-md border-t border-gray-200
        md:border-r md:border-t-0 md:backdrop-blur-0
        fixed md:static bottom-0 left-0 w-full md:w-60 
        z-30 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:shadow-none p-4
      '
    >
      <h2 className="hidden md:block text-lg font-semibold mb-4 p-4 text-gray-800">
        Categorías
      </h2>

      <ul className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible p-2 md:p-0">
        {Array.from({ length: count }).map((_, i) => (
          <li key={i} className="w-24 md:w-full">
            <Skeleton className="h-8 md:h-10 rounded-xl bg-gray-300/70" />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default LoaderFiltros;
