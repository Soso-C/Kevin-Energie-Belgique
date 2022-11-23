import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../logo/Logo";
import DropdownBtn from "./DropdownBtn";
import { navbarData } from "./navbarData";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div aria-label="Site Header" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex h-[70px] items-center justify-between">
          <div className="">
            <Link className="block" href="/">
              <Logo />
            </Link>
          </div>

          <div className="md:flex jutify-between md:items-center">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <DropdownBtn />
                {navbarData.map((item) => {
                  return <NavbarItem key={item.id} {...item} />;
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-orange-500">
                  <GiHamburgerMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
