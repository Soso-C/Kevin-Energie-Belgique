"use client";
import { useForm } from "react-hook-form";
import InputForm from "./InputForm";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="lg:w-1/2 md:w-2/3 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Input / Textarea  */}

      <div className="flex flex-wrap">
        <InputForm
          inptType="text"
          textLabel="Nom"
          error={errors.user_name}
          inptId="user_name"
          inptName="user_name"
          {...register("user_name", {
            required: "Un nom est requis",
            minLength: {
              value: 2,
              message: "Le nom doit faire 2 caractères minimum",
            },
          })}
        />

        <InputForm
          inptType="text"
          textLabel="Prénom"
          error={errors.user_fullname}
          inptId="user_fullname"
          inptName="user_fullname"
          {...register("user_fullname", {
            required: "Un prénom est requis",
            minLength: {
              value: 2,
              message: "Le nom doit faire 2 caractères minimum",
            },
          })}
        />

        <InputForm
          inptType="email"
          textLabel="Email"
          error={errors.user_email}
          inptId="user_email"
          inpteName="user_email"
          {...register("user_email", {
            required: "Un email est requis",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Entrez un email valide",
            },
          })}
        />

        <InputForm
          inptType="text"
          textLabel="Titre du message"
          error={errors.user_titleMessage}
          inptId="user_titleMessage"
          inptName="user_titleMessage"
          {...register("user_titleMessage", {
            required: "Un titre est requis",
            minLength: {
              value: 5,
              message: "Le titre doit faire 5 caractères minimum",
            },
          })}
        />

        <InputForm
          textarea={true}
          textLabel="Message"
          required={true}
          error={errors.user_message}
          inptId="user_message"
          inptName="user_message"
          {...register("user_message", {
            required: "Un titre est requis",
            minLength: {
              value: 30,
              message: "Le message doit faire 30 caractères minimum",
            },
            maxLength: {
              value: 1000,
              message: "Le message doit faire 1000 caractères maximum",
            },
          })}
        />

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
  );
}
