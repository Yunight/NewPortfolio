import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Benchi CHEN. Tous droits réservés.
      </small>
      <p className="text-xs ">
        <span className="font-semibold">Information sur ce site :</span> codé
        avec React / Typescript / Nextjs ( App Router & Server Actions ),
        Tailwind CSS, Framer Motion, React Email, Resend, hébergé sur Vercel
      </p>
    </footer>
  );
}

export default Footer;
