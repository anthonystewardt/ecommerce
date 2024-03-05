import Image from "next/image";
import Link from "next/link";


const NotFoundUI = () => {
  return (
    <div className="h-screen w-full  flex flex-col justify-center items-center  ">
      <Image
        src="/imgs/404img.png"
        alt="Not Found"
        width={300}
        height={300}
      />
      <div className="mt-10 flex flex-col gap-3 items-center">
        <h1 className="text-6xl font-bold text-center text-blue-500">404</h1>
        <h2 className="text-2xl font-bold text-center">Página no encontrada...</h2>
        <Link href="/" className="px-4 py-2 block text-center rounded-lg font-semibold hover:bg-gray-100 transition ease" >Ir a la página principal</Link>
      </div>
    </div>
  );
}

export default NotFoundUI;
