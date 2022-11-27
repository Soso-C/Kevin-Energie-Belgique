"use client";

import Link from "next/link";
import FooterLinkItem from "./FooterLinkItem";
import IframeMapFooter from "./IframeMapFooter";
import AboutFooter from "./AboutFooter";
import ServicesFooter from "./ServicesFooter";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-[#464646]">
      <div className="mx-auto max-w-[1400px] px-4 pt-16 pb-6 lg:py-8">
        <div className="grid grid-cols-1 sm:text-center md:grid-cols-2 lg:grid-cols-4 text-white gap-8 md:gap-12 justify-items-center md:justify-between">
          <AboutFooter />
          <ServicesFooter />
          <IframeMapFooter />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}
