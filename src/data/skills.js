import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman, SiJetbrains } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    logo: <FaJs />,
    logoColor: "#F7DF1E",
  },
  {
    name: "React",
    logo: <FaReact />,
    logoColor: "#61DAFB",
  },
  {
    name: "Node.js",
    logo: <FaNodeJs />,
    logoColor: "#8CC84B",
  },
  {
    name: "Express.js",
    logo: <FaNodeJs />,
    logoColor: "#8CC84B",
  },
  {
    name: "MongoDB",
    logo: <FaDatabase />,
    logoColor: "#47A248",
  },
  {
    name: "Tailwind CSS",
    logo: <SiTailwindcss />,
    logoColor: "#06B6D4",
  },
  {
    name: "Bootstrap",
    logo: <FaBootstrap />,
    logoColor: "#7952B3",
  },
  {
    name: "Java",
    logo: <FaJava />,
    logoColor: "#007396",
  },
  {
    name: "Postman",
    logo: <SiPostman />,
    logoColor: "#FF6C37",
  },
  {
    name: "IntelliJ IDEA",
    logo: <SiJetbrains />,
    logoColor: "#000000",
  },
  {
    name: "Git",
    logo: <FaGitAlt />,
    logoColor: "#F05032",
  },
  {
    name: "GitHub",
    logo: <FaGithub />,
    logoColor: "#181717",
  },
];

export default skills;
