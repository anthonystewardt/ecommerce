import { Metadata } from "next";
import Link from "next/link";

const metadata: Metadata = {
  title: "Registrarme en Yura",
  description: "Register page",
}

const page = () => {
  return (
    <div className=" h-screen p-3">
      <Link
        href="/auth/login"
        className="px-2 py-1 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-700 transition ease-out cursor-pointer"
      >
        Iniciar Sesión
      </Link>
      <div className=" h-[80%] justify-center items-center">
        <form className="flex flex-col space-y-3 justify-center items-center h-full">
          <h1 className="text-2xl font-bold text-center">
            Registro | <Link href="/" className="text-blue-500">Yura</Link>
          </h1>
          <input
            type="text"
            placeholder="Nombres y Apellidos"
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="example@gmail.com"
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Contraseña: *********"
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          <button className="bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition ease-out">
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
