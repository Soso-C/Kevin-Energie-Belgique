import Form from "./Form";
import UnderForm from "./UnderForm";

export default function ContactForm() {
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
        <Form />

        {/* Under form Icon */}
        <UnderForm />
      </div>
    </section>
  );
}
