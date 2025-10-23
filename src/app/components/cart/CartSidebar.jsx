"use client";
import { useCartStore } from "../../store/cartStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { motion } from "framer-motion";
import { PlusIcon, MinusIcon, ShoppingCartIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartSidebar() {
  const { items, removeItem, clearCart, incrementQuantity, decrementQuantity } = useCartStore();
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);

  const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const btnCheckout = () => {
    setOpenSidebar(false);

    setTimeout(() => {
      router.push("/checkout");
    }, 250);
  };

  return (
    <Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
      <SheetTrigger asChild>
        <button className="relative bg-white text-gray-800 px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition cursor-pointer">
          <ShoppingCartIcon className="w-5 h-5" />
          {totalQuantity > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full"
            >
              {totalQuantity}
            </motion.span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[90vw] sm:w-[400px] bg-white p-5">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold flex items-center gap-2"> <ShoppingCartIcon className="w-6 h-6" /> Tu Carrito</SheetTitle>
        </SheetHeader>

        <div className="flex justify-end">
          <button onClick={clearCart} className="bg-red-500 text-white rounded-lg px-2 py-1 cursor-pointer hover:bg-red-600 transition-all duration-300">
            Limpiar Carrito
          </button>
        </div>

        <div className="flex flex-col h-[calc(100vh-200px)]">
          <div className="mt-4 overflow-y h-[calc(100vh-200px)] overflow-auto">
            {items.length === 0 ? (
              <p className="mt-6 text-center text-gray-500">Tu carrito está vacío.</p>
            ) : (
              <div className="space-y-4">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.title} className="w-12 h-12 rounded object-contain" />
                      <div className="flex flex-col gap-4">
                        <p className="text-sm font-semibold w-[250px]">{item.title}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-gray-500">
                            {item.quantity} × S/{item.price}
                          </p>
                          <button onClick={() => incrementQuantity(item.title)} className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-2 py-1 cursor-pointer hover:bg-orange-600 transition-all duration-300">
                            <PlusIcon className="w-4 h-4 cursor-pointer" />
                          </button>
                          <button onClick={() => decrementQuantity(item.title)} className="flex items-center gap-2 bg-orange-500 text-white rounded-lg px-2 py-1 cursor-pointer hover:bg-orange-600 transition-all duration-300">
                            <MinusIcon className="w-4 h-4 cursor-pointer" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.title)}
                      className="bg-red-500 text-white rounded-lg px-2 py-1 cursor-pointer hover:bg-red-600 transition-all duration-300"
                    >
                      <TrashIcon className="w-4 h-4 cursor-pointer" />
                    </button>
                  </div>
                ))}
                <div className="flex justify-between font-semibold text-gray-800 mt-4">
                  <span>Total:</span>
                  <span>S/{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4">
            <button
              onClick={btnCheckout}
              className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all cursor-pointer"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
