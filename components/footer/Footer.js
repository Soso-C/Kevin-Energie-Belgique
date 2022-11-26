import Link from "next/link";
import React from "react";
import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-[#464646]">
      <div className="mx-auto max-w-[1400px] px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 place-items-center">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Logo />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:mx-0 sm:max-w-xs sm:text-left">
              KD Energie
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Services</p>

            <nav aria-label="Footer Services Nav" className="mt-8">
              <ul className="space-y-4 text-sm">
                <li>
                  <Link className="text-white" href="/">
                    Chauffage
                  </Link>
                </li>

                <li>
                  <Link className="text-white" href="/">
                    Ventilation
                  </Link>
                </li>

                <li>
                  <Link className="text-white" href="/">
                    Pompe a chaleur
                  </Link>
                </li>

                <li>
                  <Link className="text-white" href="/">
                    Pellets
                  </Link>
                </li>
                <li>
                  <Link className="text-white" href="/">
                    Entretient
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Contactez nous</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="flex items-center justify-center gap-1.5 sm:justify-start"
                  href="mailto:contact@kd-energie.be"
                >
                  <span className="text-white">ezezr@gmail.com</span>
                </Link>
              </li>

              <li>
                <Link
                  className="flex items-center justify-center gap-1.5 sm:justify-start"
                  href="tel:0468381079"
                >
                  <span className="text-white">0123456789</span>
                </Link>
              </li>

              <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                <address className="-mt-0.5 not-italic text-white">
                  Rue du jardin
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
