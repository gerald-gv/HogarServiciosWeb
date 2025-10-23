"use client";

import { motion } from "framer-motion";
import { Skeleton } from "../../ui/skeleton";

const LoaderProductos = ({ count }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-white shadow-md rounded-2xl p-3 md:p-5 flex flex-col items-center w-full max-w-xs mx-auto"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        >
          <Skeleton className="w-40 h-40 mb-2 rounded-xl bg-gray-300/70" />
          <Skeleton className="w-32 h-5 mb-1 rounded-md bg-gray-300/70" />
          <Skeleton className="w-20 h-4 mb-2 rounded-md bg-gray-300/70" />
          <Skeleton className="w-16 h-5 mb-4 rounded-md bg-gray-300/70" />
          <div className="flex items-center space-x-2 mb-4">
            <Skeleton className="w-8 h-8 rounded-lg bg-gray-300/70" />
            <Skeleton className="w-6 h-8 rounded-lg bg-gray-300/70" />
            <Skeleton className="w-8 h-8 rounded-lg bg-gray-300/70" />
          </div>
          <Skeleton className="w-full h-10 rounded-xl bg-gray-300/70" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LoaderProductos;
