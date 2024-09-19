import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row text-white pt-20 sm:pt-24 pb-20 sm:pb-28 justify-around items-start sm:items-center border-b border-dashed'>
      <div className='left flex flex-col sm:gap-12 gap-6 pt-24 sm:pt-0  pl-10'>
        <h2 className='sm:text-7xl text-4xl  font-semibold tracking-wider'>
          I am Hatim
        </h2>
        <h5 className='sm:text-5xl text-3xl text-blue-500 font-bold relative title'>
          Web Developer
        </h5>
        <div className='sm:text-2xl text-xl tracking-wider font-medium relative role'>
          <span className='block'></span>Your vision, beautifully crafted!
        </div>

        <div className='socials flex gap-6'>
          <a href='https://github.com/hatimb03' target='_blank'>
            <FiGithub className='text-2xl hover:text-blue-500' />
          </a>
          <a
            href='https://www.linkedin.com/in/hatim-barwahawala-007007250'
            target='_blank'
          >
            <FiLinkedin className='text-2xl hover:text-blue-500' />
          </a>
          <a href='mailto:hatim.ba53@gmail.com'>
            <FiMail className='text-2xl hover:text-blue-500' target='_blank' />
          </a>
        </div>
      </div>
      <div className='right grid sm:block place-items-center w-full sm:w-auto'>
        <img
          src='./profile.avif'
          alt=''
          className='w-56 h-56 object-cover rounded-lg text-center'
        />
      </div>
    </div>
  );
};

export default Home;
