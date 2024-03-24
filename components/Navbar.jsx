'use client'

import { useState } from "react";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)


  return (
    <nav className="">
      <div className="bg-red-600 py-3 px-16 ">
        <div className="flex gap-3 items-center justify-end text-white">
          <a href="/"> <FaFacebook /> </a>
          <a href="/"> <FaInstagram /> </a>
          <a href="/"> <FaTwitter /> </a>
          <a href="/"> <FaYoutube /> </a>
        </div>
      </div>

      <div className="relative flex items-center justify-between bg-[#f3f2ee] py-3 px-16">
        <div className="w-[75px]">
          <a href="/">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={120}
              height={75}
              className="object-contain"
            />
          </a>
        </div>

        <ul className={`flex flex-col md:flex-row items-center gap-6 absolute top-full left-0 z-20 md:relative w-full md:w-auto bg-red-600 md:bg-transparent py-4 md:py-0 text-white md:text-black overflow-hidden ${openMenu ? 'clipActive' : 'clip'}  transition-[clip-path] ease-in-out duration-500`}>
          <li className="w-full md:w-auto text-center">
            <a
              href="/"
              className="block md:flexfont-semibold text-md lg:text-lg hover:bg-[#f3f2ee] hover:text-red-600 md:hover:bg-transparent md:hover:text-red-600 p-4 md:py-0"
            >
              {" "}
              Accueil{" "}
            </a>
          </li>
          <li className="w-full md:w-auto text-center">
            <a
              href="/activity"
              className="block md:flexfont-semibold text-md lg:text-lg hover:bg-[#f3f2ee] hover:text-red-600 md:hover:bg-transparent md:hover:text-red-600 p-4 md:py-0"
            >
              {" "}
              Nos Activités{" "}
            </a>
          </li>
          <li className="w-full md:w-auto text-center">
            <a
              href="/contact"
              className="block md:flexfont-semibold text-md lg:text-lg hover:bg-[#f3f2ee] hover:text-red-600 md:hover:bg-transparent md:hover:text-red-600 p-4 md:py-0"
            >
              {" "}
              Contact{" "}
            </a>
          </li>
          <li className="w-full md:w-auto text-center">
            <a
              href="/donation"
              className="block text-md lg:text-lg bg-white text-red-600 md:hover:bg-red-700 md:bg-red-600 md:text-white p-4 rounded-lg uppercase font-extrabold"
            >
              {" "}
              Faire un don{" "}
            </a>
          </li>
        </ul>

        <div 
            className="flex md:hidden text-3xl font-bold cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
        >
          <BiMenuAltRight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
