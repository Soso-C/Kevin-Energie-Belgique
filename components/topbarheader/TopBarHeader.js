import React from "react";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function TopBarHeader() {
  return (
    <div className="h-[50px] bg-slate-400 flex flex-col justify-center items-center">
      <div className="flex w-full max-w-[1400px] justify-between items-center mx-auto md:px-4">
        <h1>Chauffage / Climatisation</h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="mailto:kevin-energie.be"
              className="flex items-center gap-1"
            >
              <FiMail />
              kevin-energie.be
            </a>
          </li>
          <li>
            <a href="tel:00000000" className="flex items-center gap-1">
              <BsFillTelephoneFill />
              00000000
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const RightItem = ({ href, icon, text }) => {
  <li>
    <a href={href} className="flex items-center gap-1">
      {icon}
      {text}
    </a>
  </li>;
};
