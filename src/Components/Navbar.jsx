/* eslint-disable react/prop-types */
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='text-white flex justify-between items-center pt-8 pb-4 px-2 tracking-tighter border-b'>
      <div className='logo text-5xl font-extrabold'>HB</div>
      <div className='links relative'>
        <ul
          className={`sm:hidden absolute top-full right-0 flex flex-col items-start gap-6 bg-[#7272ce] px-4 py-6 w-52 rounded-lg menu ${
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
          <li
            className='hover:text-[#7272ce] cursor-pointer tracking-wider'
            onClick={() => {
              scrollToSection("skills-section");
              setShowMenu(false); // Close menu after selection
            }}
          >
            Skills
          </li>
          <li
            className='hover:text-[#7272ce] cursor-pointer'
            onClick={() => {
              scrollToSection("projects-section");
              setShowMenu(false); // Close menu after selection
            }}
          >
            Projects
          </li>
          <li
            className='hover:text-[#7272ce] cursor-pointer'
            onClick={() => {
              scrollToSection("collab-section"); // Change this ID accordingly
              setShowMenu(false); // Close menu after selection
            }}
          >
            Contact
          </li>
        </ul>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex sm:flex-row items-center gap-12 text-lg'>
          <li
            className='hover:text-[#7272ce] cursor-pointer tracking-wider'
            onClick={() => scrollToSection("skills-section")}
          >
            Skills
          </li>
          <li
            className='hover:text-[#7272ce] cursor-pointer tracking-tighter'
            onClick={() => scrollToSection("projects-section")}
          >
            Projects
          </li>
          <li
            className='hover:text-[#7272ce] cursor-pointer tracking-tighter'
            onClick={() => scrollToSection("collab-section")} // Change this ID accordingly
          >
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
