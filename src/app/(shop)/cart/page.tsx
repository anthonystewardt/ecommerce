import Link from "next/link";

import Image from "next/image";

import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import CheckSteps from "@/components/ui/checksteps/CheckSteps";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage () {
  // redirect('/empty');

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <div className="flex justify-center">
          <Title title="Carrito" subtitle="Detalles de su compra" />
        </div>

        {/* Pasos */}
        <div className="flex justify-center">
          <CheckSteps step2={false} step3={false} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl text-zinc-800">Agregar más items</span>
            <Link href="/" className="underline mb-5 text-zinc-900">
              Continúa comprando
            </Link>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
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

                <div>
                  <p className="text-zinc-700">{product.title}</p>
                  <p className="text-zinc-700">${product.price}</p>
                  <QuantitySelector quantity={3} />

                  <button className="underline mt-3 text-zinc-950">Remover</button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-sm border-2 border-gray-950 shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2 text-slate-950">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span className="text-zinc-700">No. Productos</span>
              <span className="text-right text-zinc-700">3 artículos</span>

              <span className="text-zinc-900">Subtotal</span>
              <span className="text-right text-zinc-700">$ 100</span>

              <span className="text-zinc-900">Impuestos (15%)</span>
              <span className="text-right text-zinc-700">$ 100</span>

              <span className="mt-5 text-2xl text-zinc-900">Total:</span>
              <span className="mt-5 text-2xl text-right text-zinc-700">$ 100</span>
              <div className="text-wrap  w-full col-span-2 mt-3">
                <span className="text-sm font-semibold text-zinc-900">
                  Al hacer clic en &quot;Checkout&quot;, aceptas nuestros{" "}
                  <span className="underline text-zinc-600">términos y condiciones</span> y{" "}
                  <span className="underline text-zinc-600">política de privacidad</span>{" "}
                </span>
              </div>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-third justify-center"
                href="/cart/details"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
