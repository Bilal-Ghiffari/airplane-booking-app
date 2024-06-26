import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Navbar from "../components/molecules/navbar";
import Image from "next/image";
import CompanyLogos from "../components/organisms/company-logos";
import Link from "next/link";
import Footer from "../components/organisms/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}, text-white font-poppins bg-flysha-black`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
