"use client";
import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoTicketOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoShirtOutline,
  IoPeopleOutline,
} from "react-icons/io5";



const MenuLateral = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);
  // const openSideMenu = useUIStore((state) => state.openSideMenu);


  return (
    <div className="relative">
      {isSideMenuOpen && (
        <div className="fixed  top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={() => closeSideMenu()}
        />
      )}

      <nav
        className={clsx(
          "fixed  p-5 right-0 top-0 md:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 z-30 right-5 cursor-pointer"
          onClick={() => closeSideMenu()}
        />

        <div className="relative mt-10">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 top-24 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <Link
            href=""
            className="px-4 py-2 hover:bg-gray-100  rounded-lg transition ease-out flex items-center gap-3 font-semibold"
          >
            <IoPersonOutline size={25} />
            Perfil
          </Link>

          <Link
            href=""
            className="px-4 py-2 hover:bg-gray-100  rounded-lg transition ease-out flex items-center gap-3 font-semibold"
          >
            <IoTicketOutline size={25} />
            Ordenes
          </Link>

          <Link
            href=""
            className="px-4 py-2 hover:bg-gray-100  rounded-lg transition ease-out flex items-center gap-3 font-semibold"
          >
            <IoLogInOutline size={25} />
            Ingresar
          </Link>

          <Link
            href=""
            className="px-4 py-2 hover:bg-gray-100  rounded-lg transition ease-out flex items-center gap-3 font-semibold"
          >
            <IoLogOutOutline size={25} />
            Salir
          </Link>
        </div>
        <div className="h-px bg-gray-800 my-10 opacity-25"></div>
        <div className="flex flex-col gap-3">
          <Link
            href=""
            className="px-4 py-2 hover:bg-gray-100  rounded-lg transition ease-out flex items-center gap-3 font-semibold"
          >
            <IoShirtOutline size={25} />
            Productos
          </Link>
          <Link
            href=""
            className="px-4 py-2 hover:bg-gray-100  rounded-lg transition ease-out flex items-center gap-3 font-semibold"
          >
            <IoTicketOutline size={25} />
            Ordenes
          </Link>
          <Link
            href=""
            className="px-4 py-2 hover:bg-gray-100  rounded-lg transition ease-out flex items-center gap-3 font-semibold"
          >
            <IoPeopleOutline size={25} />
            Usuarios
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MenuLateral;
