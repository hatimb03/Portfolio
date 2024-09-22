import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className='pt-20 text-white sm:pl-8 pb-20 border-b border-dashed'>
        <h2 className='text-5xl font-semibold mb-6 tracking-wide'>Projects</h2>
        <p className='text-lg tracking-wider opacity-80'>
          Here are some of my projects:
        </p>
        <ProjectCard />

        <a
          href='https://github.com/hatimb03'
          target='_blank '
          className='grid place-items-center'
        >
          <button className='mt-10 px-8 py-2 outline-none outline-[#7272ce] rounded-full hover:bg-[#7272ce] text-[#7272ce] hover:text-white'>
            View more
          </button>
        </a>
      </div>
    </>
  );
};

export default Projects;
