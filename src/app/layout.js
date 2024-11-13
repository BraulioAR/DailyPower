import localFont from "next/font/local";
import "./globals.css";
import { Open_Sans } from 'next/font/google'
import Hedaerr from "@/components/Hedaerr";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const metadata = {
title: "Daily Power | Distribuidor Exclusivo de las Baterias Aokly",
  description: "Distribuidor Exclusivo de las Baterias Aokly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${openSans.className}`}
      >
        <Hedaerr/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
