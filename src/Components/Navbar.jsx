import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='text-white flex justify-between items-center pt-8 pb-4  px-2 tracking-tighter'>
      <div className='logo text-5xl font-extrabold'>
        {/* <img src='/logo.png' alt='HB' className='h-10 w-14 sm:h-12 sm:w-20' /> */}
        HB
      </div>
      <div className='links relative'>
        <ul
          className={`sm:hidden absolute top-full right-0 flex flex-col items-start gap-6 bg-zinc-500 px-4 py-6 w-52 rounded-lg menu ${
            showMenu ? "menu-show" : ""
          }`}
        >
          <div className='flex justify-between items-center w-full mb-2'>
            <li className='font-bold'>Menu</li>
            <RxCross2
              onClick={() => setShowMenu(false)}
              className='text-xl cursor-pointer'
            />
          </div>
          <li className='hover:text-[#7272ce] cursor-pointer tracking-wider'>
            Skills
          </li>
          <li className='hover:text-[#7272ce] cursor-pointer'>Projects</li>
          <li className='hover:text-[#7272ce] cursor-pointer'>Contact</li>
        </ul>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex sm:flex-row items-center gap-12 text-lg'>
          <li className='hover:text-[#7272ce] cursor-pointer tracking-wider'>
            Skills
          </li>
          <li className='hover:text-[#7272ce] cursor-pointer tracking-tighter'>
            Projects
          </li>
          <li className='hover:text-[#7272ce] cursor-pointer tracking-tighter'>
            Contact
          </li>
        </ul>

        <GiHamburgerMenu
          className='text-3xl sm:hidden cursor-pointer'
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
