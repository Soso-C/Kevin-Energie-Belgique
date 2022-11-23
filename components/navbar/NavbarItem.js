import Link from "next/link";
import React from "react";

export default function NavbarItem({ href, title }) {
  return (
    <li className="w-full flex justify-center p-3 md:p-0 md:w-auto border-t md:border-none">
      <Link
        className="text-gray-500 transition hover:text-orange-500 font-medium"
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
