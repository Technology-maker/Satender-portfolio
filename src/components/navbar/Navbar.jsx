import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { MdFileDownload } from "react-icons/md";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 rounded-md shadow-lg m-0.5 ">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">

        {/* Logo/Brand */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#8245ec]">
          <div className="self-center text-2xl font-extrabold whitespace-nowrap text-white">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Satender</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Yadav</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>
        </a>

        {/* Mobile menu toggle button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Menu options and social links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto transition-all duration-300 ease-in-out`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 items-center"> {/* Added `items-center` for vertical alignment on desktop */}

            {/* Navigation  */}
            <li>
              <a href="#about" onClick={toggleMenu} className="block py-2 px-3 text-gray-200 rounded-md  md:hover:bg-transparent md:border-0 md:hover:text-[#8245ec] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-slate-400 md:dark:hover:bg-transparent transition-colors duration-200" aria-current="page">About</a>
            </li>

            {/* skills  */}
            <li>
              <a href="#skills" onClick={toggleMenu} className="block py-2 px-3 text-gray-200 rounded-md  md:hover:bg-transparent md:border-0 md:hover:text-[#8245ec] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-slate-400 md:dark:hover:bg-transparent transition-colors duration-200">Skills</a>
            </li>

            {/* project  */}
            <li>
              <a href="#project" onClick={toggleMenu} className="block py-2 px-3 text-gray-200 rounded-md  md:hover:bg-transparent md:border-0 md:hover:text-[#8245ec] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-slate-400 md:dark:hover:bg-transparent transition-colors duration-200">Project</a>
            </li>

            {/* education  */}
            <li>
              <a href="#education" onClick={toggleMenu} className="block py-2 px-3 text-gray-200 rounded-md  md:hover:bg-transparent md:border-0 md:hover:text-[#8245ec] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-slate-400 md:dark:hover:bg-transparent transition-colors duration-200">Education</a>
            </li>

            {/* contact  */}
            <li>
              <a href="#contact" onClick={toggleMenu} className="block py-2 px-3 text-gray-200 rounded-md  md:hover:bg-transparent md:border-0 md:hover:text-[#8245ec] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-slate-400 md:dark:hover:bg-transparent transition-colors duration-200">Contact</a>
            </li>

            {/* download cv  */}
            <li>
              <a href="/Satender-CV.pdf" download onClick={toggleMenu} className="flex items-center gap-1  py-2 px-3 text-gray-300 rounded-md md:hover:bg-transparent md:border-0 md:hover:text-[#8245ec] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-slate-400 md:dark:hover:bg-transparent transition-colors duration-200" > <MdFileDownload className="text-xl" /> <span>Download CV</span> </a>
            </li>

            {/* Social Media Icons */}
            <li className='flex gap-4 md:ml-4 mt-4 md:mt-0'>
              <a href="https://github.com/Technology-maker" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-[#8245ec] transition-colors duration-200 text-2xl'>  <Github /></a>
              <a href="https://www.linkedin.com/in/satender-yadav-a39b622a0/" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-[#8245ec] transition-colors duration-200 text-2xl' > <Linkedin /> </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default App;
