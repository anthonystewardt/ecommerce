import { IoLocationOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import MenuLateral from "../sidebar/MenuLateral";

const TopAlert = () => {
  return (
    <>
      <section className="md:flex items-center  hidden justify-between py-3 lg:px-20 px-5 bg-slate-100">
        <div className="text-sm">
          <h1>¡Bienvenidos a Tienda Yura!</h1>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <span className="flex items-center gap-2">
            <IoLocationOutline size={20} color="#38bdf8" />
            Delivery a todo el Perú
          </span>
          <span className="flex items-center gap-2">
            <CiDeliveryTruck size={20} color="#38bdf8" />
            Rastrea tu orden
          </span>
          <span className="flex items-center gap-2">
            <BiSolidOffer size={20} color="#38bdf8" />
            Ofertas
          </span>
        </div>
      </section>
      <MenuLateral />
    </>
  );
};

export default TopAlert;
