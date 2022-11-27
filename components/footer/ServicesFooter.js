import React from "react";
import { footerData } from "./footerData";
import FooterLinkItem from "./FooterLinkItem";

export default function ServicesFooter() {
  return (
    <div className="w-full lg:w-fit">
      <span className="text-lg font-bold text-orange-500 block w-full text-left md:text-center lg:text-left">
        Services
      </span>

      <nav aria-label="Footer Services Nav" className="mt-8">
        <ul className="space-y-1 text-sm font-medium underline text-left md:text-center lg:text-left">
          {footerData.map((item, index) => {
            return <FooterLinkItem key={index} {...item} />;
          })}
        </ul>
      </nav>
    </div>
  );
}
