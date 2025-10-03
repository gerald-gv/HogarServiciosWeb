import NavMenu from "./components/layout/NavMenu";
import Footer from "./components/layout/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavMenu />
        <main className="flex-grow overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
