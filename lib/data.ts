import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import avocat from "@/public/avocat.png";
import smash from "@/public/smash.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "A Propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master Développement Web & E-Business",
    location: "ESGI - Paris",
    description: "Diplômé d'un Master Web et E-Business  ",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Développeur Front - Backbone/ Angularjs",
    location: "Infotel - Paris",
    description:
      "J'ai travaillé chez Infotel en tant que développeur front end sur Backbone et Angularjs",
    icon: React.createElement(CgWorkAlt),
    date: "2017-2018",
  },
  {
    title: "Développeur Front - ReactJs",
    location: "Lunorsys - Paris / Madrid / Barcelone",
    description:
      "J'ai rejoins qui m'a fait voyager en Espagne durant mes missions pour réaliser des projets en Reactjs",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
  {
    title: "Freelance - Développeur Front - ReactJs",
    location: "Paris - Remote",
    description:
      "J'ai décidé de me lancer en freelance et de continuer à développer sur Reactjs !",
    icon: React.createElement(FaReact),
    date: "2020 - en cours",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Site Cabinet d'Avocat",
    description:
      "Réalisation d'un site vitrine pour un cabinet d'avocat, personnalisé selon la demande du client avec un système de multilangue.",
    tags: ["PHP", "Wordpress", "Multilangue "],
    imageUrl: avocat,
  },
  {
    title: "SmashDownOnline",
    description:
      "An app for playing SmashDown Online from the Game Super Smash Bros Ul. with friends. I did all from scratch.",
    tags: ["React", "Materialize", "Bootstrap"],
    imageUrl: smash,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Jest",
  "Cypress",
] as const;
