import NavMenu from "./components/layout/NavMenu";
import Footer from "./components/layout/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>IEoDomoTics - Hogar Domotico</title>
        <meta name="description" content="Hogar Domotico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <NavMenu />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" reverseOrder={false} toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
