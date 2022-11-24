import Image from "next/image";
import React from "react";

export default function Presentation() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="">
          <h2 className="text-3xl font-semibold sm:text-4xl text-center w-full text-orange-500">
            KD Energie
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-60 overflow-hidden sm:h-80 lg:h-full">
            <Image
              alt="Party"
              src="/test_site_1.png"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600 ">
              <p className="text-justify font-medium text-sm md:text-lg">
                {`
                KD Energie est une jeune entreprise avec plus de 10 ans
                d'expériences et qui vous proposera ses services de chauffage,
                sanitaire, ventilation, pompe a chaleur, pellets située dans la
                commune d'Aywaille et de ses alentours KD Energie est une jeune
                entreprise avec plus de 10 ans d'expériences et qui vous
                proposera ses services de chauffage, sanitaire, ventilation,
                pompe a chaleur, pellets située dans la commune d'Aywaille et de
                ses alentoursKD Energie est une jeune entreprise avec plus de 10
                ans d'expériences et qui vous proposera ses services de
                chauffage, sanitaire, ventilation, pompe a chaleur, pellets
                située dans la commune d'Aywaille et de ses alentours`}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
