"use client";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import PropTypes from "prop-types";

export default function ProductCard({
  image,
  title,
  brand,
  price,
  oldPrice,
  index = 0,
  onAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  const increment = useCallback(() => setQuantity((q) => q + 1), []);
  const decrement = useCallback(
    () => setQuantity((q) => Math.max(1, q - 1)),
    []
  );

  const addToCart = useCallback(() => {
    onAddToCart?.({ image, title, brand, price, quantity });
  }, [onAddToCart, image, title, brand, price, quantity]);

  const motionProps = {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.9 },
    transition: { duration: 0.4, ease: "easeOut" },
    whileHover: {
      scale: 1.04,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    whileTap: {
      scale: 0.97,
      boxShadow: "0px 0px 25px rgba(255, 165, 0, 0.6)",
    },
  };

  return (
    <motion.div
      {...motionProps}
      className="bg-white shadow-md rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col items-center w-full max-w-xs mx-auto"
    >
      <img
        src={image}
        alt={`${title} de ${brand}`}
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mb-2"
        loading="lazy"
      />
      <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 text-center line-clamp-2">
        {title}
      </h3>
      <p className="text-xs text-gray-500 mb-1">{brand}</p>

      {oldPrice && (
        <p className="text-gray-400 text-xs sm:text-sm line-through">
          s/{oldPrice}
        </p>
      )}
      <p className="text-orange-600 font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
        s/{price}
      </p>

      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          aria-label="Disminuir cantidad"
          className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors cursor-pointer text-sm sm:text-base ${
            quantity === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          -
        </button>

        <span className="font-medium text-sm sm:text-base min-w-[24px] text-center">
          {quantity}
        </span>

        <button
          type="button"
          onClick={increment}
          aria-label="Aumentar cantidad"
          className="bg-gray-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer text-sm sm:text-base"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={addToCart}
        className="mt-3 sm:mt-4 bg-orange-500 text-white rounded-xl px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 font-semibold text-sm sm:text-base hover:bg-orange-600 active:scale-95 transition-all cursor-pointer w-full max-w-[180px]"
      >
        Agregar
      </button>
    </motion.div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  index: PropTypes.number,
  onAddToCart: PropTypes.func,
};
