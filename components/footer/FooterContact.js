import Link from "next/link";
import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillFacebook,
  AiOutlineHome,
} from "react-icons/ai";
import { IoBusinessOutline } from "react-icons/io5";
import OrangeBtn from "../button/orangeButton/OrangeBtn";

export default function FooterContact() {
  return (
    <div className="w-full lg:w-fit">
      <p className="text-lg font-bold text-left text-orange-500 block w-full md:text-center ">
        Contactez nous
      </p>
      <ul className="mt-8 space-y-2 text-sm font-medium text-left md:text-center ">
        <li>
          <Link
            className="hover:text-orange-500 flex items-center md:justify-center gap-2 justify-start"
            href="mailto:contact@kd-energie.be"
          >
            <AiOutlineMail className="w-4 h-4" />
            <span>contact@kd-energie.be</span>
          </Link>
        </li>

        <li>
          <Link
            className="hover:text-orange-500 flex items-center md:justify-center gap-2 justify-start"
            href="tel:0468381079"
          >
            <AiOutlinePhone className="w-4 h-4" />
            <span>0468381079</span>
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-500 flex items-center md:justify-center gap-2 justify-start"
            href="/"
          >
            <AiFillFacebook className="w-4 h-4" />
            <span>Facebook</span>
          </Link>
        </li>

        <li>
          <span className="flex items-center md:justify-center gap-2 justify-start">
            <AiOutlineHome className="w-4 h-4" />
            Rue Saint-Roch 42, 4920 Aywaille, Belgique
          </span>
        </li>
        <li className="pb-4">
          <span className="flex items-center md:justify-center gap-2 justify-start">
            <IoBusinessOutline className="h-4 w-4" />
            BE0790.667.586
          </span>
        </li>

        <OrangeBtn>Devis gratuit</OrangeBtn>
      </ul>
    </div>
  );
}
