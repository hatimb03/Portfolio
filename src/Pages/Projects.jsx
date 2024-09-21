import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className='pt-20 text-white sm:pl-8 pb-20'>
        <h2 className='text-5xl font-semibold mb-6 tracking-wide'>Projects</h2>
        <p className='text-lg tracking-wider opacity-80'>
          Here are some of my projects:
        </p>
        <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
