"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("A Propos", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.175 }}
      id="about"
    >
      <SectionHeading> A Propos de moi</SectionHeading>
      <p className="mb-3">
        Après avoir terminé mes études de Master Web & E-Business, j&apos;ai
        continué dans cette voie du développement web car
        <span className="italic"> j&apos;adore les challenges </span> qui sont
        proposés dans ce domaine, trouver la solution d&apos;un problème est un
        <span className="underline"> sentiment d&apos;accomplissement </span>
        pour moi.
      </p>

      <p>
        Je développe principalement sur le front-end avec{" "}
        <span className="font-medium">Reactjs / Typescript / Nodejs</span> .
        J&apos;ai également de l&apos;expérience avec NextJs et Java.
      </p>

      <p>
        <span className="font-medium">
          Je suis actuellement en recherche de mission sur Reactjs / Typescript
        </span>{" "}
        alors n&apos;hésitez pas à me contacter pour en parler !
      </p>

      <p>
        <span className="italic">Lorsque je ne code pas</span>, j&apos;aime bien
        jouer aux jeux vidéos, regarder des séries / films mais également sortir
        avec mes amis. Je fais également de{" "}
        <span className="underline">la veille technologique</span> car
        c&apos;est un{" "}
        <span className="font-medium">domaine qui évolue très vite.</span>
      </p>
      <p></p>
    </motion.section>
  );
}

export default About;
