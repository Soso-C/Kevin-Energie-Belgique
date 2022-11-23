import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";
import Logo from "../logo/Logo";
import DropdownBtn from "./DropdownBtn";
import { navbarData } from "./navbarData";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="bg-white shadow-md fixed top-0 z-10 w-full md:mt-[50px]">
      <nav className="max-w-[1400px] mx-auto items-center flex p-4">
        <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
          <Logo />
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
            } flex-col justify-center items-center w-full h-full mt-6 md:mt-0 md:flex-row md:w-auto md:space-x-8 md:flex text-sm`}
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

// <div aria-label="Site Header" className="bg-white shadow-sm">
//   <div className="mx-auto max-w-[1400px] px-4">
//     <div className="flex h-[70px] items-center justify-between">
//       <div className="">
//         <Link className="block" href="/">
//           <Logo />
//         </Link>
//       </div>

//       <div className="md:flex jutify-between md:items-center">
//         <nav
//           aria-label="Site Nav"
//           className={`${openNav ? " block" : " hidden"} md:block`}
//         >
//           <ul className={`flex items-center gap-6 text-sm`}>
//             {/* {navbarData.map((item) => {
//               return <NavbarItem key={item.id} {...item} />;
//             })} */}
//             <NavbarItem {...navbarData[0]} />
//             <NavbarItem {...navbarData[1]} />
//             <DropdownBtn />
//             <NavbarItem {...navbarData[2]} />
//             <NavbarItem {...navbarData[3]} />
//           </ul>
//         </nav>

//         <div className="flex items-center gap-4">
//           <div className="block md:hidden">
//             <button
//               className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-orange-500"
//               onClick={() => setOpenNav((curr) => !curr)}
//             >
//               <GiHamburgerMenu />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
