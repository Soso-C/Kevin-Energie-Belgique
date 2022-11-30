"use client";
import Link from "next/link";
import React from "react";

import { inptData } from "./contactFormData";
import InputContact from "./InputContact";
import UnderForm from "./UnderForm";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  return (
    <section className="text-gray-600 mt-[70px] md:mt-[120px]">
      <div className="max-w-[1400px] px-4 py-12 mx-auto">
        {/* Header form */}

        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-bold mb-4 text-orange-500">
            Contact
          </h1>
          <p className="">
            Contactez-nous pour un devis gratuit ou pour toutes autre demande
          </p>
        </div>

        {/* Form */}

        <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
          {/* Input / Textarea  */}

          <div className="flex flex-wrap">
            {inptData.map((input, index) => {
              return <InputContact key={index} {...input} />;
            })}

            {/* Button form */}

            <div className="p-2 w-full flex items-center justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 font-medium w-fit text-white rounded-full hover:text-black"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>

        {/* Under form Icon */}

        <UnderForm />
      </div>
    </section>
  );
}
