import React from 'react';
import { Github, Linkedin, Instagram, Code, Award } from 'lucide-react';

const Footer = () => {
  return (
    <section className="dark:bg-gray-800 text-gray-200"> {/* Added consistent background */}
      <footer className="rounded-lg shadow-lg dark:bg-gray-800 m-4"> {/* Increased shadow for better depth */}
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8"> {/* Increased padding slightly for mobile */}
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row text-center sm:text-left"> {/* Adjusted for better centering on small screens */}

            {/* Logo */}
            <div className="self-center text-xl sm:text-2xl font-extrabold whitespace-nowrap text-white py-2 mb-4 sm:mb-0"> {/* Adjusted font size responsively, added margin-bottom for mobile */}
              <span className="text-[#8245ec]">&lt;</span>
              <span className="text-white">Satender</span>
              <span className="text-[#8245ec]">/</span>
              <span className="text-white">Yadav</span>
              <span className="text-[#8245ec]">&gt;</span>
            </div>

            {/* Social Links */}
            <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400"> {/* Added justify-center for mobile */}
              <li className="flex items-center mx-3 md:mx-4 my-2"> {/* Adjusted margins */}
                <Code className="mr-1 text-xl text-[#8245ec]" /> {/* Using Lucide Code for LeetCode */}
                <a href="https://leetcode.com/u/satender_yadav/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">LeetCode</a>
              </li>
              <li className="flex items-center mx-3 md:mx-4 my-2">
                <Award className="mr-1 text-xl text-[#8245ec]" /> {/* Using Lucide Award for HackerRank (closest match) */}
                <a href="https://www.hackerrank.com/profile/ys5401519" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">HackerRank</a>
              </li>
              <li className="flex items-center mx-3 md:mx-4 my-2">
                <Linkedin className="mr-1 text-xl text-[#8245ec]" />
                <a href="https://www.linkedin.com/in/satender-yadav-a39b622a0/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">LinkedIn</a>
              </li>
              <li className="flex items-center mx-3 md:mx-4 my-2">
                <Instagram className="mr-1 text-xl text-[#8245ec]" />
                <a href="https://www.instagram.com/yadav_sarkar1519/?igsh=Z3hsMzY1NnFkaHhq#" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">Instagram</a>
              </li>
              <li className="flex items-center mx-3 md:mx-4 my-2">
                <Github className="mr-1 text-xl text-[#8245ec]" />
                <a href="https://github.com/Technology-maker" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">GitHub</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© 2025 Satender Yadav. All Rights Reserved.</span> 
        </div>
      </footer>
    </section>
  )
}

export default Footer