// eslint-disable-next-line no-unused-vars
import React from "react";

import skills from "../data/skills";

import "./SkillCard.css";

const SkillCard = () => {
  return (
    <div className='flex gap-3 flex-wrap mt-10 max-h-80 overflow-auto p-1 bg-zinc-800'>
      {skills.map((skill, index) => {
        return (
          <div
            key={index}
            className='card  rounded-md  w-full lg:w-[30%] md:w-[45%] h-fit  borderShadow flex items-center gap-6 '
          >
            <div className='logoContainer  bg-zinc-800 grid place-items-center p-2'>
              <div
                style={{
                  color: skill.logoColor,
                  backgroundColor: skill?.logoBgColor,
                }}
                className={`text-5xl rounded-full`}
              >
                {skill.logo}
              </div>
            </div>
            <div className='nameContainergrid place-items-center'>
              {skill.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCard;
