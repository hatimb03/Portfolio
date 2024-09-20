import { RiTailwindCssFill } from "react-icons/ri";

import "./SkillCard.css";
// import skills from "../data/skills";

const SkillCard = () => {
  return (
    <>
      <div className='card  rounded-lg w-52 h-60 border'>
        <div className='logoContainer h-[60%] bg-zinc-800 grid place-items-center'>
          <RiTailwindCssFill className='text-8xl' />
        </div>
        <div className='nameContainer h-[40%] grid place-items-center'>
          Tailwind Css
        </div>
      </div>
    </>
  );
};

export default SkillCard;
