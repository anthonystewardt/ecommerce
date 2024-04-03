import { Title } from "@/components";
import type { Metadata } from "next";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";


export const metadata: Metadata = {
  title: "Ingresar al Dashboard",
  // description: "",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-7 bg-bg-login bg-origin-content bg-cover bg-no-repeat  relative ">
          {/* <Link href="/" className="absolute left-3 top-4 text-slate-50  cursor-pointer hover:text-slate-600 transition ease flex items-center gap-1">
            <IoIosArrowBack />
            Ir al Home
          </Link> */}
          <div className="flex justify-center items-center flex-col h-full text-white relative">
            <Title title="Tienda Yura" />
            <Link
              href="https://asanchezy.site/"
              target="_blank"
              className="absolute bottom-1 text-sm font-semibold text-gray-800 hover:text-slate-100 transition ease-out cursor-pointer"
            >
              Desarrollado por Anthony S.
            </Link>
          </div>
        </div>
        <div className="col-span-5">{children}</div>
      </div>
    </main>
  );
}
