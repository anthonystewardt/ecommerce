"use client";
import { titleFont } from '@/config/fonts';
import { useUIStore } from '@/store';
import Link from 'next/link';
import React from 'react';
import { IoSearchCircleOutline, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <header className=" xl:py-5 py-2 lg:px-20  px-5   dark:bg-slate-900 dark:text-white">
      <div className="flex justify-between items-center">
        <div className="">
          <Link href="/" className="font-semibold xl:text-2xl text-zinc-900">
            Tienda{" "}
            <span className={`${titleFont.className} text-blue-500 xl:text-3xl`}>
              Yura
            </span>
          </Link>
        </div>
        {/* <nav>
          <ul className=" items-center gap-3 hidden sm:flex">
            <li>
              <Link
                href="/category/tecnologia"
                className="px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition ease"
              >
                Tecnología
              </Link>
            </li>
            <li>
              <Link
                href="/category/hombres"
                className="px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition ease"
              >
                Hombres
              </Link>
            </li>
            <li>
              <Link
                href="/category/mujeres"
                className="px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition ease"
              >
                Mujeres
              </Link>
            </li>
          </ul>
        </nav> */}
        <div className="flex items-center gap-4">
          <Link href="" >
            <IoSearchOutline size={25} />
          </Link>
          <Link href="/cart" className="relative flex">
            <IoCartOutline className='text-zinc-800' size={25} />
            <span className="absolute -top-2  -right-2 p-1 w-[20px] text-sm flex justify-center items-center h-[20px]  rounded-full bg-blue-500 dark:text-white font-bold">
              0
            </span>
          </Link>
          <div
            className="px-4 py-2 text-sm text-zinc-800 cursor-pointer rounded-lg font-bold hover:bg-gray-100 transistio ease flex items-center gap-2"
            onClick={() => openSideMenu()}
          >
            <RiMenu3Fill size={25} />
            {/* menú */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopMenu;
