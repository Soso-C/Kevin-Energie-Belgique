import Link from "next/link";
import React from "react";

export default function NavbarItem({ href, title }) {
  return (
    <li>
      <Link
        className="text-gray-500 transition hover:text-orange-500 font-medium"
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
