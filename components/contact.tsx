"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";

function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min-(100%,38rem)] text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contactez-moi</SectionHeading>
      <p className="-mt-5 text-gray-700 dark:text-white/80 ">
        Contactez-moi directement par mail{" "}
        <a className="underline" href="mailto:benchi.chen.bc@gmail.com">
          {" "}
          benchi.chen.bc@gmail.com
        </a>{" "}
        ou via le formulaire ci-dessous
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email envoyé avec succès !");
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          placeholder="Votre Email"
          required
          maxLength={500}
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Votre Message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}

export default Contact;
