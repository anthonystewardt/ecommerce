"use client";
import React from 'react';
import { initialData } from "@/seed/seed";
import Image from "next/image";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];


const OrderCompleteBox = () => {

  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} />
      <div>
        <div className="px-3 shadow-lg rounded-lg py-2 text-center py-20">
          <h1 className="text-3xl text-slate-500 font-semibold">
            ¡Gracias! 🎉
          </h1>
          <p className="text-1xl text-stone-900 font-bold">
            Tu pedido ha sido completado con éxito.
          </p>
          <div className="flex gap-2 justify-center mt-4">
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5 relative">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />
                <span className="h-[30px] right-2 -top-2 absolute flex justify-center items-center w-[30px] bg-stone-950 text-white font-semibold rounded-full">
                  {1}
                </span>
              </div>
            ))}
          </div>
          <div className="mx-10">
            <div className="flex items-center justify-between ">
              <span className="text-1xl font-semibold text-slate-600">
                Código de Orden:
              </span>
              <span className="text-stone-900 text-1xl font-semibold">
                #AGFD6Q5E43
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-1xl font-semibold text-slate-600">
                Día:
              </span>
              <span className="text-stone-900 text-1xl font-semibold">
                09 de Marzo del 2024
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-1xl font-semibold text-slate-600">
                Total:
              </span>
              <span className="text-stone-900 text-1xl font-semibold">
                $120.00
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-1xl font-semibold text-slate-600">
                Método de Pago:
              </span>
              <span className="text-stone-900 text-1xl font-semibold">
                Tarjeta de Crédito
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <span className="text-sm text-slate-400">
              Puedes seguir el historial de tu pedido en el portal.
            </span>
            <button className="bg-slate-900 w-full text-white font-semibold rounded-full px-4 py-2 mt-2">
              Ingresar al Portal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCompleteBox;
