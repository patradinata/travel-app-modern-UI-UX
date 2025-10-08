import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { CgMenuRightAlt } from "react-icons/cg";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
  return (
    <nav className="flexBetween mx-auto max-w-[1440px] px-6 lg:px-20 relative py-6 border-b-2 border-dashed border-green-50">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex font-bold">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="text-base font-medium text-gray-600 hover:text-green-50 hover:underline transition-all duration-300 ease-in-out">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex items-center justify-center hidden gap-2 ">
        <Button type="button" title="login" icon="./user.svg" variant="btn_dark_green" />
        <Button type="button" title="info-loker-bang" icon="./location.svg" variant="btn_green" />
      </div>

      <CgMenuRightAlt className="text-3xl inline-block lg:hidden cursor-pointer hover:text-green-50 drop-shadow-lg " />
      {/* <Image src='/menu.svg'
      alt="menu" width={25}  bg-hamburger-menu
      height={25}/> */}
    </nav>
  );
};

export default Navbar;
