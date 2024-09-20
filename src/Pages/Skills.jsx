import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className='pt-20 text-white sm:pl-8 pb-20'>
      <h2 className='text-5xl font-semibold mb-6 tracking-widest '>Skills</h2>
      <p className='text-lg tracking-wider opacity-80'>
        A glimpse into the tech that fuels my creativity and problem-solving.
      </p>
      <SkillCard />
    </div>
  );
};

export default Skills;
