import { Metadata } from "next";
import BestSelective from "../components/organisms/best-selective";
import Header from "../components/organisms/headers";
import Service from "../components/organisms/service";
import Testimonials from "../components/organisms/testimonials";

export const metadata: Metadata = {
  title: "flaysha.com - Satu Aplikasi untuk Kebutuhan Liburanmu",
  description:
    "Pesan tiket pesawat. Cukup satu aplikasi untuk kamu liburan. Mau ke mana? Semua ada tiketnya!",
  icons: "/assets/images/logos/logo.svg",
};

export default function Home() {
  return (
    <>
      <Header />
      <Service />
      <BestSelective />
      <Testimonials />
    </>
  );
}
