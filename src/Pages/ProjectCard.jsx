// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import projects from "../data/projects";

const ProjectCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='pt-10 flex justify-between gap-6 flex-wrap'>
      {projects.map((projectInfo, index) => {
        return (
          <div
            key={index}
            className='relative w-[90%] sm:w-[30%] h-64'
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
                  ? "text-md text-white"
                  : "text-2xl text-white"
              }`}
            >
              {hoveredIndex === index ? (
                <>
                  <div className='mx-4 my-2'>{projectInfo.description}</div>
                  <a href={projectInfo.link} target='_blank'>
                    <button className='mt-2  text-white font-bold py-2 px-8 rounded-full border border-blue-500 hover:bg-blue-500 '>
                      Visit
                    </button>
                  </a>
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
