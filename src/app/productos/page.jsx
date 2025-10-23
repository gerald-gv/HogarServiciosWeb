"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Filtros from "../components/ui/Filtros";
import ProductCard from "../components/ui/ProductCard";
import LoaderFiltros from "../components/productos/ui/LoaderFiltros";
import LoaderProductos from "../components/productos/ui/LoaderProductos";


export default function Productos() {
  const [filter, setFilter] = useState(null);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState(null);
  const [loadingProductos, setLoadingProductos] = useState(true)
  const [loadingCategorias, setLoadingCategorias] = useState(true)

  useEffect(() => {

    const OPTIONS = {
      method: "GET",
      headers: {
        "Josue": "FullShow"
      }
    }

    const extractData = async () => {
      try {

        const [dataP, dataC] = await Promise.all([
          fetch("/api/products", OPTIONS),
          fetch("/api/categories", OPTIONS)
        ])

        const productosData = await dataP.json();
        const categoriasData = await dataC.json();

        setProductos(productosData);


        setCategorias([{ id: "todos", category: "Todos" }, ...categoriasData]);

      } catch (err) {
        setError(err)
      } finally {
        setLoadingProductos(false)
        setLoadingCategorias(false)
      }
    }
    extractData();
  }, []);

  const filtered = filter
    ? productos.filter((p) => p.category === filter)
    : productos;

  if (error) {
    return (
      <p className="text-center font-semibold text-2xl py-10 text-red-500">
        Error el cargar los productos...
      </p>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 p-6 flex space-x-6">

       {/* Loader para Categorias */}

      {loadingCategorias ? (
        <LoaderFiltros count={5} />
      ) : <Filtros categories={categorias} onFilter={setFilter} />}


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

        {/* Loader para Productos */}

        {loadingProductos ? (
          <LoaderProductos count={16} />
        ) :
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
        }


      </div>
    </section>
  );
}
