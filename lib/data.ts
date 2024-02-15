import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import site from "@/public/site.png";
import avocat from "@/public/avocat.png";
import smash from "@/public/smash.png";
import moviesearcher from "@/public/movieSearcher.png";
import reactfinance from "@/public/react_finance.png";

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
      "J'ai rejoins cette société qui m'a fait voyager en Espagne durant mes missions pour réaliser des projets en Reactjs",
    icon: React.createElement(FaReact),
    date: "2018 - 2020",
  },
  {
    title: "Freelance - Développeur Front - ReactJs",
    location: "Paris - Remote",
    description:
      "J'ai décidé de me lancer en freelance et de continuer à développer sur Reactjs.",
    icon: React.createElement(FaReact),
    date: "2020 - en cours",
  },
] as const;

export const projectsData = [
  {
    title: "Refonte Site Personnel",
    description:
      "J'ai décidé de refaire mon site avec Typescript, React, Next.js et Tailwind pour avoir un site plus rapide et plus performant !",
    tags: ["Typescript", "React", "Next.js", "Tailwind"],
    imageUrl: site,
  },
  {
    title: "Site Cabinet d'Avocat",
    description:
      "Réalisation d'un site vitrine pour un cabinet d'avocat, personnalisé selon la demande du client avec un système de multilangue.",
    tags: ["PHP", "Wordpress", "Multilangue "],
    imageUrl: avocat,
  },
  {
    title: "Smashdown Online",
    description:
      "Une app pour jouer au mode SmashDown de SmashBros U. sans être à côté de vos amis avec des surprises supplémentaires pour pimenter le jeu !",
    tags: ["Typescript", "React", "Materialize", "Bootstrap"],
    imageUrl: smash,
  },
  {
    title: "Movies Searcher",
    description:
      "Movies Searcher réalisé avec React et Typescript. En utilisant l'API de www.omdbapi.com pour récupérer les films et les afficher, réalisé dans le cadre d'un test technique.",
    tags: ["Typescript", "React", "Tailwind"],
    imageUrl: moviesearcher,
  },
  {
    title: "React Finance",
    description:
      "Une interface pour avoir les valeurs boursières des entreprises et les afficher etc... En utilisant l'API de polygon.io pour récupérer les données boursières.",
    tags: ["Typescript", "React", "DaisyUI", "Redux", "Recharts", "Jest"],
    imageUrl: reactfinance,
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
  "Recharts",
  "DaisyUI",
  "Jest",
  "Docker",
  "Cypress",
] as const;
