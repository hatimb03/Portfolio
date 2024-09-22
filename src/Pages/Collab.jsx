const Collab = () => {
  return (
    <>
      <div className=' pt-20 text-white sm:pl-8 pb-20 border-b border-dashed flex flex-col items-center justify-center gap-10'>
        <h2 className='text-3xl font-semibold mb-6 '>
          Interested in collaborating with me?
        </h2>
        <p className='sm:mx-32'>
          I&#39;m always excited to connect with fellow creators, developers,
          and problem-solvers. Whether it&#39;s crafting sleek user experiences,
          tackling real-world problems with code, or bringing fresh ideas to
          life—I&#39;m up for the challenge! If you are interested in
          collaborating on something meaningful, let&#39;s chat and turn those
          ideas into reality.
        </p>
        <button
          onClick={() =>
            (window.location.href =
              "mailto:hatim.ba53@gmail.com?subject=Hello&body=I would like to collaborate!")
          }
          className='relative px-8 py-2 mt-16 outline-none outline-[#7272ce] rounded-full hover:bg-[#7272ce] text-[#7272ce] hover:text-white'
        >
          💬 Start a conversation
        </button>
      </div>
    </>
  );
};

export default Collab;
