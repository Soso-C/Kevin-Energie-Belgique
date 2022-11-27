import Link from "next/link";
import React from "react";

export default function FooterLinkItem({ href, title }) {
  return (
    <li>
      <Link className="hover:text-orange-500" href={href}>
        {title}
      </Link>
    </li>
  );
}
