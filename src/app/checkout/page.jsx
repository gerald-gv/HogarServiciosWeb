"use client";
import { useCartStore } from "../store/cartStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ShoppingCartIcon, BookOpenCheck, TrashIcon, File } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Boleta from "../components/boletaPago/PdfFile";


export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();

  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  useEffect(() => {
    if (items.length === 0) {
      router.push("/productos");
    }
  }, [items, router]);

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    const numero = "51997676432";
    const mensaje = `
🛍 *Nuevo pedido desde la web* 🛍

${items
        .map(
          (item) =>
            `• ${item.title} (${item.brand || "Sin marca"})\n  Cantidad: ${item.quantity
            }\n  Precio: S/${item.price.toFixed(2)}`
        )
        .join("\n\n")}

---------------------------------
🧾 *Total a pagar:* S/${totalPrice.toFixed(2)}

Por favor, confirme su pedido.
    `;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center flex items-center gap-2">
          <ShoppingCartIcon className="w-6 h-6 text-gray-800" /> Resumen de tu Pedido
        </h1>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <div className="space-y-4">
            <div className="overflow-y-auto max-h-[400px]">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div className="flex items-center gap-2">
                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded object-contain" />
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × S/{item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="font-semibold text-gray-700">
                    S/{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <div className="flex justify-between font-semibold text-lg mt-6">
                <span>Total:</span>
                <span>S/{totalPrice.toFixed(2)}</span>
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full bg-green-500 text-white py-3 rounded-xl mt-6 hover:bg-green-600 transition-all text-lg font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                Enviar pedido por WhatsApp <BookOpenCheck className="w-5 h-5 text-white" />
              </button>

              {/* Generador de Boleta Electronica*/}
              <PDFDownloadLink fileName="boleta-pago.pdf" document={<Boleta productos={items} total={totalPrice}/> } 
                className="w-full bg-red-500 text-white py-3 rounded-xl mt-3 hover:bg-red-600 transition-all text-lg font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                Generar PDF
                <File className="w-5 h-5" />

              </PDFDownloadLink>


              <button
                onClick={() => {
                  clearCart();
                  router.push("/productos");
                }}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-xl mt-3 hover:bg-gray-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Cancelar pedido <TrashIcon className="w-5 h-5 text-gray-700" />
              </button>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}