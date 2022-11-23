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
            href={"mailto:kd-energie@gmail.com"}
            icon={<AiFillMail />}
            text={"kd-energie@gmail.com"}
          />
          <RightItem
            href={"tel:00000000"}
            icon={<BsFillTelephoneFill />}
            text={"0000000"}
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
        {text}
      </a>
    </li>
  );
};
