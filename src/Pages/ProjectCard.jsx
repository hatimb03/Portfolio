// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='pt-10 flex justify-center gap-6 flex-wrap'>
      {projects.map((projectInfo, index) => {
        return (
          <div
            key={index}
            className='relative w-[90%] md:w-[45%] lg:w-[30%] sm:h-64 h-56'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                backgroundImage: `url(${projectInfo.image})`,
              }}
              className={`bg-cover bg-center h-full rounded-xl transition-opacity duration-500  ${
                hoveredIndex === index ? "opacity-5" : "opacity:5"
              } `}
            ></div>
            <div className='absolute bg-zinc-800 w-full h-full inset-0 opacity-70 rounded-xl'></div>
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center font-bold ${
                hoveredIndex === index
                  ? "text-sm sm:text-md text-white justify-between sm:my-4 my-2"
                  : "text-2xl text-white"
              }`}
            >
              {hoveredIndex === index ? (
                <>
                  <div className='mx-4 my-2'>{projectInfo.description}</div>
                  <div className='flex gap-2 items-center'>
                    <a href={projectInfo.link} target='_blank'>
                      <button className='mt-2  text-white font-bold py-2 px-8 rounded-full border border-[#7272ce] hover:bg-[#7272ce] '>
                        Visit
                      </button>
                    </a>
                    <a href={projectInfo.githubRepo}>
                      <button className='mt-2  text-white font-bold p-2 rounded-full border border-white hover:bg-white hover:text-black '>
                        <FaGithub />
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                projectInfo.name
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
