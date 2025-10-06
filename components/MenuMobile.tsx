import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { FaAddressBook, FaGamepad, FaHome, FaInstagram, FaJenkins, FaKickstarter, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";

const MenuMobile = () => {
  return (
    <div className="btn_green h-[300px]   absolute top-0 w-full z-40 inset-0  transition-all duration-300 shadow-md ease-in-out  hidden">
      <div className="px-4 py-4 border border-green-50 bg-white shadow-lg w-full rounded-lg ">
        <h1 className="text-2xl text-center font-bold text-black -tracking-normal">
          Hi<span className="text-green-50">link.</span>
        </h1>
        <p className="text-green-50 capitalize font-semibold text-center">
          support by <span className="text-black">Goggle Partners</span>
        </p>
        <div className="flex items-center justify-center border-b border-green-50  text-xl lg:text-2xl gap-2 md:gap-6">
          <Link href="https://www.instagram.com/patra_dinata" aria-labelledby="ins">
            <FaInstagram className="text-red-600 text-2xl" />
          </Link>
          <Link href={"/"}>
            <FaLinkedin className="text-violet-600 text-2xl" />
          </Link>
          <Link href={"/"}>
            <DiGithubBadge className="text-black text-3xl" />
          </Link>
        </div>

        <div className="flex  items-center px-4 py-4">
          <ol className="text-green-50 flex gap-4 flex-col items-center justify-center w-full  ">
            <li className="w-full hover:bg-green-200 rounded-lg">
              <a href="#" className="font-medium flex justify-center items-center flex-col gap-2 mb-2">
                <FaHome />
                home
              </a>
            </li>
            <li className="hover:bg-green-200 w-full rounded-lg">
              <a href="#" className="font-medium mb-2 flex justify-center items-center flex-col gap-2">
                <FaAddressBook />
                About
              </a>
            </li>
            <li className="hover:bg-green-200 w-full">
              <a href="#" className="font-medium  mb-2 flex  items-center flex-col gap-2">
                <FaWarehouse className="" />
                Pariwisata
              </a>
            </li>
            <li className="hover:bg-green-200 w-full">
              <a href="#" className="font-medium mb-2 flex items-center flex-col gap-2">
                <FaKickstarter />
                Jejak-langkah
              </a>
            </li>
            <li className="hover:bg-green-200 w-full">
              <a href="#" className="font-medium mb-2 flex  items-center flex-col gap-2">
                <FaPhone />
                Hubungi-kami
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
