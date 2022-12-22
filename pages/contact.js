import Head from "next/head";
import React from "react";
import ContactForm from "../components/form/ContactForm";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>KD Energie | Contact</title>
      </Head>
      <ContactForm />
    </div>
  );
}
