import Image from "next/image";
import React from "react";
import OrangeBtn from "../../button/orangeButton/OrangeBtn";

export default function Presentation() {
  return (
    <section className="bg-slate-50/80">
      <div className="mx-auto max-w-screen-xl px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-3xl font-bold text-center">KD Energie</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-16">
          <div className="flex-col justify-center hidden lg:flex">
            <div className="relative h-60 overflow-hidden lg:h-80">
              <Image
                alt="Logo KD Energie"
                src="/logo-kd-energie/logo_flamme.png"
                fill
                objectFit="contain"
              />
            </div>
          </div>

          <div className="py-10">
            <article className="space-y-4 text-gray-600 text-justify font-medium">
              <p>
                {`KD Énergie située à Aywaille et ses alentours est une jeune
                entreprise spécialisée vous proposant ses services
                d'installation, dépannage et d'entretiens chauffage, sanitaire,
                ventilation (simple - double flux), pompe à chaleur et tous
                systèmes de chaudière à condensation gaz et mazout.`}
              </p>
              <p>
                {`Avec plus de 10 ans d'expérience dans le domaine, nous mettrons
                tous en oeuvre pour comprendre vos envies, de vous offrir le
                conseil le plus adéquat, notre collaboration débute toujours par
                une rencontre. Nous explorons votre projet avant de vous
                remettre un devis détaillé dans le respect de vos critères et de
                votre budget.`}
              </p>
              <p>
                {`Nous accordons une importance toute particulière au travail
                soigné et de qualité, au respect de normes techniques.`}
              </p>
              <p>
                {`Vous souhaitez obtenir de plus amples informations quant au
                sujet de nos services de plombier-chauffagiste ? N’hésitez pas à
                prendre contact avec nous. Nous sommes à votre écoute et
                prendrons le temps nécessaire afin de faire disparaître toutes
                vos questions.`}
              </p>
              <div className="flex items-center justify-center pt-10">
                <OrangeBtn large={true}>Devis gratuit</OrangeBtn>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
