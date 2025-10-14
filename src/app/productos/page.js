"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Filtros from "../components/ui/Filtros";
import ProductCard from "../components/ui/ProductCard";

export default function Productos() {
  const [filter, setFilter] = useState(null);

  const products = [
    {
      id: 1, // ✅ ID único agregado
      image:
        "https://i.postimg.cc/C5skchv7/Captura-de-pantalla-2025-10-13-020851.png",
      title: "Cámara de Seguridad Wi-Fi TP-Link Tapo C200",
      brand: "TP-Link",
      price: 199,
      oldPrice: 249,
      category: "Camaras y Seguridad",
    },
    {
      id: 2,
      image:
        "https://i.postimg.cc/tJWhZgXr/Captura-de-pantalla-2025-10-13-153241-removebg-preview.png",
      title: "Cámara IP Exterior EZVIZ C3N Full HD 1080p",
      brand: "EZVIZ",
      price: 289,
      category: "Camaras y Seguridad",
    },
    {
      id: 3,
      image:
        "https://i.postimg.cc/Y0dG5w06/Captura-de-pantalla-2025-10-13-143135.png",
      title: "Cámara Xiaomi Mi Home Security 360° 2K",
      brand: "Xiaomi",
      price: 259,
      category: "Camaras y Seguridad",
    },
    {
      id: 4,
      image:
        "https://i.postimg.cc/SsD00y0g/Captura-de-pantalla-2025-10-13-153842.png",
      title: "Timbre Inteligente con Cámara Ring Video Doorbell 2",
      brand: "Ring",
      price: 499,
      category: "Camaras y Seguridad",
    },
    {
      id: 5,
      image:
        "https://i.postimg.cc/9Q3nn4R9/Captura-de-pantalla-2025-10-13-153942.png",
      title: "Paneles de Luz Triangulares RGBIC Govee (10 unidades)",
      brand: "GOVEE",
      price: 999,
      oldPrice: 1060,
      category: "Focos Inteligentes",
    },
    {
      id: 6,
      image:
        "https://i.postimg.cc/28YW9rjr/Captura-de-pantalla-2025-10-13-153455.png",
      title: "Foco Inteligente Govee RGBWW 1200 Lúmenes",
      brand: "Govee",
      price: 109,
      oldPrice: 129,
      category: "Focos Inteligentes",
    },
    {
      id: 7,
      image:
        "https://i.postimg.cc/MZgwzpfH/Captura-de-pantalla-2025-10-13-154037.png",
      title: "Foco Smart LED W3 Wi-Fi RGB Yeelight",
      brand: "Yeelight",
      price: 89,
      category: "Focos Inteligentes",
    },
    {
      id: 8,
      image:
        "https://i.postimg.cc/Vs0yZPZ8/Captura-de-pantalla-2025-10-13-154133.png",
      title: "Foco Inteligente Philips Hue White & Color Ambiance",
      brand: "Philips",
      price: 159,
      category: "Focos Inteligentes",
    },
    {
      id: 9,
      image:
        "https://i.postimg.cc/3Jjcz8XY/Captura-de-pantalla-2025-10-13-154221.png",
      title: "Amazon Echo Dot (5ta generación)",
      brand: "Amazon",
      price: 249,
      oldPrice: 279,
      category: "Asistentes por Voz",
    },
    {
      id: 10,
      image:
        "https://i.postimg.cc/cHYmYhhX/Captura-de-pantalla-2025-10-13-154329.png",
      title: "Google Nest Mini (2da generación)",
      brand: "Google",
      price: 229,
      category: "Asistentes por Voz",
    },
    {
      id: 11,
      image:
        "https://i.postimg.cc/0jV9CY2n/Captura-de-pantalla-2025-10-13-153732.png",
      title: "Amazon Echo Show 8 con pantalla táctil",
      brand: "Amazon",
      price: 599,
      category: "Asistentes por Voz",
    },
    {
      id: 12,
      image:
        "https://i.postimg.cc/MKV6hSLv/Captura-de-pantalla-2025-10-13-145656.png",
      title: "Apple HomePod Mini con Siri",
      brand: "Apple",
      price: 449,
      category: "Asistentes por Voz",
    },
    {
      id: 13,
      image:
        "https://i.postimg.cc/qvD5wtGs/Captura-de-pantalla-2025-10-13-145929.png",
      title: "Interruptor Inteligente Wi-Fi Tuya",
      brand: "Tuya",
      price: 79,
      category: "Interruptores/Cableado",
    },
    {
      id: 14,
      image:
        "https://i.postimg.cc/CLmPMZXr/Captura-de-pantalla-2025-10-13-150044.png",
      title: "Interruptor Smart Sonoff T3 EU 3 Botones",
      brand: "Sonoff",
      price: 99,
      category: "Interruptores/Cableado",
    },
    {
      id: 15,
      image:
        "https://i.postimg.cc/nLtQ62Tc/Captura-de-pantalla-2025-10-13-150215.png",
      title: "Módulo de Control Shelly 1PM Wi-Fi",
      brand: "Shelly",
      price: 129,
      category: "Interruptores/Cableado",
    },
    {
      id: 16,
      image:
        "https://i.postimg.cc/8PMvwxBX/Captura-de-pantalla-2025-10-13-150331.png",
      title: "Interruptor Inteligente BroadLink TC2-US",
      brand: "BroadLink",
      price: 89,
      category: "Interruptores/Cableado",
    },
  ];

  const categories = [
    "Camaras y Seguridad",
    "Focos Inteligentes",
    "Asistentes por Voz",
    "Interruptores/Cableado",
  ];

  const filtered = filter
    ? products.filter((p) => p.category === filter)
    : products;

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex space-x-6">
      <Filtros categories={categories} onFilter={setFilter} />

      <div className="flex-1">
        <motion.h1
          key={`title-${filter || "all"}`} // ✅ Key única para el título
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold mb-6"
        >
          {filter ? `Productos de ${filter}` : "Todos los productos"}
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={`grid-${filter || "all"}`} // ✅ Key única para el grid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filtered.map((p, i) => (
              <ProductCard
                key={p.id} // ✅ Correcto
                index={i}
                {...p}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
