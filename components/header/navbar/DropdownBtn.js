"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function DropdownBtn() {
  const [open, setOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-center border-t md:border-none p-3 md:p-0 bg-white relative">
      <button
        className="text-md font-medium text-gray-500 hover:text-orange-500 flex items-center cursor-pointer"
        onClick={() => setOpen((curr) => !curr)}
      >
        Services
        <MdOutlineArrowDropDown className="h-4 w-4" />
      </button>

      <div className={`${open ? "block" : "hidden "}`} ref={dropRef}>
        <div
          className="origin-top-right absolute left-1/2 -translate-x-1/2 z-10 mt-8 md:mt-11 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          <div className="p-2">
            {dropDownData.map((item) => {
              return <DropDownItem key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const dropDownData = [
  { id: 1, title: "Chauffage", href: "/chauffage" },
  { id: 2, title: "Ventilation", href: "/ventilation" },
  { id: 3, title: "Pompe à chaleur", href: "/pompe-a-chaleur" },
  { id: 4, title: "Sanitaire", href: "/sanitaire" },
  { id: 5, title: "Pellets", href: "/pellet" },
  { id: 6, title: "Entretien et dépannage", href: "/entretien-depannage" },
];

const DropDownItem = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-orange-500"
      role="menuitem"
    >
      {title}
    </Link>
  );
};
