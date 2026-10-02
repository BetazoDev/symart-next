import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/components/cart-context";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Popup } from "@/components/Popup";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
});

export const metadata: Metadata = {
  title: {
    default: "Symart — Muebles de oficina a tu medida",
    template: "%s — Symart",
  },
  description:
    "Symart es una fábrica de muebles de oficina en Aguascalientes, México, que diseña, fabrica e instala mobiliario corporativo a la medida desde hace más de 21 años.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${publicSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-[#121212]">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Popup />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
