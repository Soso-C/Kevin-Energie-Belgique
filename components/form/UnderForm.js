import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
} from "react-icons/ai";

export default function UnderForm() {
  return (
    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center space-y-1 lg:w-1/2 mx-auto">
      <ItemLinkForm
        href={"mailto:contact@kd-energie.be"}
        icon={<AiOutlineMail className="h-4 w-4" />}
        text={"contact@kd-energie.be"}
      />

      <ItemLinkForm
        href={"tel:0468381079"}
        icon={<AiOutlinePhone className="h-4 w-4" />}
        text={"0468381079"}
      />

      <span className="flex items-center justify-center gap-2">
        <AiOutlineHome className="w-4 h-4" />
        <address>Rue Saint-Roch 42, 4920 Aywaille, Belgique</address>
      </span>

      <ItemLinkForm
        href={"#facebook"}
        icon={<AiFillFacebook className="h-4 w-4" />}
        text={"contact@kd-energie.be"}
      />
    </div>
  );
}

const ItemLinkForm = ({ href, icon, text }) => {
  return (
    <Link
      href={href}
      className="hover:text-orange-500 flex justify-center items-center gap-2"
    >
      {icon}
      {text}
    </Link>
  );
};
