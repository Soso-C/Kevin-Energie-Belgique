import React, { useEffect } from "react";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function TopBarHeader() {
  return (
    <div className="hidden md:flex flex-col justify-center items-center h-[50px] bg-[#F98B16]">
      <div className="flex w-full max-w-[1400px] justify-between items-center mx-auto md:px-4 font-bold text-white">
        <h1 className="text-md ">
          <span className="">Chauffage</span> {" - "}
          <span className="">Sanitaire</span> {" - "}
          <span className="">HVAC</span>
        </h1>
        <ul className="flex space-x-4">
          <RightItem
            href={"mailto:contact@kd-energie.be"}
            icon={<AiFillMail className="h-6 w-6" />}
            text={"contact@kd-energie.be"}
          />
          <RightItem
            href={"tel:0468381079"}
            icon={<BsFillTelephoneFill className="h-6 w-6" />}
            text={"0468381079"}
          />
        </ul>
      </div>
    </div>
  );
}

const RightItem = ({ href, icon, text }) => {
  return (
    <li>
      <a href={href} className="flex items-center gap-1">
        {icon}
        <span>{text}</span>
      </a>
    </li>
  );
};
