import { SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
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
import { SiTailwindcss, SiPostman, SiIntellijidea } from "react-icons/si";

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
    logo: <SiExpress />,
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
    name: "VS Code",
    logo: <VscVscode />,
    logoColor: "#007ACC",
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
    logo: <SiIntellijidea />,
    logoColor: "#000000",
    logoBgColor: "#FFFFFF",
  },
  {
    name: "Git",
    logo: <FaGitAlt />,
    logoColor: "#F05032",
  },
  {
    name: "GitHub",
    logo: <FaGithub />,
    logoBgColor: "#181717",
    logoColor: "#FFFFFF",
  },
];

export default skills;
