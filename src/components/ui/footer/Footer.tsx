import { Title } from "../title/Title";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="px-20 py-10 bg-gray-950">
      <div className=" text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="">
            <Title color="text-white" title="Tienda Yura" />
          </div>

          <div className="">|</div>
          <span>Somos importadores de USA y China</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="">
            <h1 className="text-sm">Contáctanos</h1>
          </div>
          <div className="">
            <span className="text-sm">Av. La Marina 1234</span>
          </div>
          <div className="">
            <span className="text-sm">
              <a href="tel:+51987654321">987654321</a>
            </span>
          </div>
        </div>
      </div>
      <div className="pt-5 border-t-2 flex items-center justify-between border-opacity-20 border-gray-50">
        <div className="text-white text-sm flex items-center gap-5">
          <p>© { new Date().getFullYear()  } Tienda Yura. Todos los derechos reservados.</p>
          <p className="text-blue-400">Términos y Condiciones</p>
        </div>
        <div className="">
          <div className="flex items-center gap-5 pt-5">
            <div className="">
              <IoLogoInstagram className="text-2xl text-white" />
            </div>
            <div className="">
              <FaSquareFacebook className="text-2xl text-white" />
            </div>
            <div className="">
              <FaYoutube className="text-2xl text-white" />
            </div>
            <div className="">
              <FaTiktok className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


