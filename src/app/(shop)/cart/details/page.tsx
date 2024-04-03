"use client";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { QuantitySelector, Title } from "@/components";
import CheckSteps from "@/components/ui/checksteps/CheckSteps";
import Image from "next/image";
// import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";
import { CountryInterface } from "@/interfaces";
import { dataCountry, citiesByCountry } from "@/helpers";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface SearchProp {
  value: string;
  label: string;
}



const DetailsPayment = () => { 

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<SearchProp | null>(null);
  const [currentCities, setCurrentCities] = useState<SearchProp[]>([]);
  const [cardNumberValue, setCardNumberValue] = useState("");
  const [cvcNumberValue, setCvcNumberValue] = useState("");



  useEffect(() => {
    if (currentCountry && currentCountry.value) {
      console.log({
        country: currentCountry
      })
    }
  }, [currentCountry])


  const validateCardNumber = (value: string) => {
    // cada 4 digitos agregar un espacio y detenerse en 16
     const newValue = value
       .replace(/\s/g, "")
       .replace(/(\d{4})/g, "$1 ")
      .trim();
    console.log({newValue});
     setCardNumberValue(newValue);
  }

  const validateCvcNumber = (value: string) => {
    // Eliminar espacios en blanco y caracteres no numéricos
    const cleanedValue = value.replace(/\D/g, "");

    // Añadir un espacio después de los primeros dos dígitos
    const formattedValue = cleanedValue.replace(/(\d{2})(\d{2})/, "$1/$2");
    console.log({formattedValue});

    // Actualizar el estado con el nuevo valor formateado
    setCvcNumberValue(formattedValue);
  }


  

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <div className="flex justify-center">
          <Title title="Check Out" />
        </div>

        {/* Pasos */}
        <div className="flex justify-center">
          <CheckSteps step2={true} step3={false} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="">
            <div className="flex flex-col border-2 border-slate-700 border-opacity-90 p-3 ">
              {/* Items */}
              {/* {productsInCart.map((product) => (
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
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3} />

                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))} */}

              <h2 className="text-1xl font-semibold">
                Información de Contacto
              </h2>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-sm">
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej. Juan"
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm">
                    Apellidos
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ej. Pérez Gómez"
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="email" className="text-sm">
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    id="email"
                    name="email"
                    placeholder="Ej. 987654321"
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ej. example@gmail.com"
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-5 flex-col border-2 border-slate-700 border-opacity-90 p-3 ">
              <h2 className="text-1xl font-semibold">Dirección de Envío</h2>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="name" className="text-sm">
                    Dirección
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej. Av. Los Pinos 123"
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  />
                </div>

                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="email" className="text-sm">
                    País
                  </label>
                  {/* <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej. Perú"
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  /> */}
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    // defaultValue={colourOptions[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="color"
                    options={dataCountry}
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="email" className="text-sm">
                    Ciudad / Distrito
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej. Lima"
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
            </div>

            <div className="flex mt-5 flex-col border-2 border-slate-700 border-opacity-90 p-3 ">
              <h2 className="text-1xl font-semibold">Método de Pago</h2>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="flex flex-col gap-1 col-span-2">
                  <label htmlFor="name" className="text-sm">
                    Número de Tarjeta
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="cardNumber"
                    placeholder="Ej. 1234 5678 1234 5678"
                    value={cardNumberValue}
                    onChange={(e) => validateCardNumber(e.target.value)}
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  />
                </div>

                <div className="flex flex-col gap-1 col-span-1">
                  <label htmlFor="email" className="text-sm">
                    MM/YY
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Ej. 12/24"
                    value={cvcNumberValue}
                    onChange={(e) => validateCvcNumber(e.target.value)}
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-1">
                  <label htmlFor="email" className="text-sm">
                    CVC
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="cvc"
                    placeholder="Ej. 123"
                    className="w-full  border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-sm border-2 border-gray-950 shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link className="flex btn-third justify-center" href="/cart/order-complete">
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPayment;
