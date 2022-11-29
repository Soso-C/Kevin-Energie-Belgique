"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";
import { navbarData } from "./navbarData";
import Logo from "../../logo/Logo";
import DropdownBtn from "./DropdownBtn";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="bg-white shadow-md fixed top-0 z-10 w-full md:mt-[50px]">
      <nav className="max-w-[1400px] mx-auto items-center flex p-4">
        <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
          <Link href={"/"}>
            <Logo />
          </Link>
          <button
            className="block md:hidden"
            onClick={() => setOpenNav((curr) => !curr)}
          >
            {openNav ? (
              <HiXMark className="h-6 w-6" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6" />
            )}
          </button>

          <ul
            className={`${
              openNav ? " flex" : " hidden"
            } flex-col justify-center items-center w-full h-full mt-6 md:mt-0 md:flex-row md:w-auto md:space-x-8 md:flex text-md`}
          >
            <NavbarItem {...navbarData[0]} />
            <DropdownBtn />
            <NavbarItem {...navbarData[1]} />
            <NavbarItem {...navbarData[2]} />
          </ul>
        </div>
      </nav>
    </div>
  );
}
