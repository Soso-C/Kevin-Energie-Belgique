"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

export default function TopBarHeader() {
  return (
    <div className="hidden md:flex flex-col justify-center items-center h-[50px] bg-[#464646] fixed top-0 w-full z-10">
      <div className="flex w-full max-w-[1400px] justify-between items-center mx-auto md:px-4 font-bold text-white">
        {/* Top left */}
        <div className="text-md">
          <span className="">Chauffage</span> {" - "}
          <span className="">Sanitaire</span> {" - "}
          <span className="">HVAC</span>
        </div>
        {/* Top Right */}
        <ul className="flex space-x-4">
          <RightItem
            href={"mailto:contact@kd-energie.be"}
            icon={<AiFillMail className="h-5 w-5" />}
            text={"contact@kd-energie.be"}
          />
          <RightItem
            href={"tel:0468381079"}
            icon={<BsFillTelephoneFill className="h-5 w-5" />}
            text={"0468381079"}
          />
          <RightItem
            href={"https://www.facebook.com/profile.php?id=100086004542543"}
            icon={<AiFillFacebook className="h-5 w-5" />}
            text={"Facebook"}
          />
        </ul>
      </div>
    </div>
  );
}

const RightItem = ({ href, icon, text }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-1 hover:text-orange-500"
      >
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  );
};
