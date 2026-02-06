import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "AgroNusantara - Pertanian & Peternakan Terpadu",
  description:
    "AgroNusantara adalah perusahaan pertanian dan peternakan terpadu yang berkomitmen membangun ketahanan pangan Nusantara melalui praktik berkelanjutan dan inovasi modern.",
  manifest: "/manifest.json",
  themeColor: "#2C5F2D",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AgroNusantara",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
