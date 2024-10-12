import {
  BiLogoGraphql,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoSass,
  BiLogoTypescript
} from "react-icons/bi";
import { SiExpress, SiTailwindcss, SiWebpack } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
//import { DiLinux } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

export const SkillsIcons = [
  {
    Component: BiLogoJavascript,
    color: "yellow",
    skill: "javascript",
    name: "JavaScript",
  },  {
    Component: FcLinux ,
    color: "none",
    skill: "linux",
    name: "linux",
  },
  {
    Component: BiLogoReact,
    color: "deepskyblue",
    skill: "react",
    name: "React",
  },{
    Component: FaBootstrap,
    color: "purple",
    skill: "bootsrap",
    name: "bootsrap",
  },
  { Component: BiLogoSass, color: "#cc6699", skill: "sass", name: "Sass" },
  {
    Component: TbBrandNextjs,
    color: "cornsilk",
    skill: "nextjs",
    name: "Next.js",
  },
  {
    Component: SiTailwindcss,
    color: "skyblue",
    skill: "tailwindcss",
    name: "Tailwind CSS",
  },  {
    Component: SiMysql,
    color: "skyblue",
    skill: "my sql",
    name: "my sql",
  },
  {
    Component: BiLogoNodejs,
    color: "greenyellow",
    skill: "nodejs",
    name: "Node.js",
  },
  {
    Component: SiExpress,
    color: "yellow",
    skill: "expressjs",
    name: "Express.js",
  },
  {
    Component: BiLogoMongodb,
    color: "green",
    skill: "mongodb",
    name: "MongoDB",
  },
  {
    Component: BiLogoTypescript,
    color: "#007acc",
    skill: "typescript",
    name: "TypeScript",
  },
  {
    Component: BiLogoGraphql,
    color: "#e535ab",
    skill: "graphql",
    name: "GraphQL",
  },
  { Component: SiWebpack, color: "#81d4fa", skill: "webpack", name: "Webpack" },
];
