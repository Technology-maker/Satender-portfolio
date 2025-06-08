import React from 'react';
import { Github, Linkedin, Instagram, Code, Award } from 'lucide-react';

const Footer = () => {
  return (
    <section className="bg-gray-900 text-gray-200 py-8"> 
      <footer className="w-full rounded-lg shadow-lg bg-gray-900"> 
        <div className="max-w-screen-xl mx-auto p-4 md:p-8"> 
          <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left"> 

            {/* Logo */}
            <div className="text-xl sm:text-2xl font-extrabold whitespace-nowrap text-white py-2 mb-4 sm:mb-0">
              <span className="text-[#8245ec]">&lt;</span>
              <span className="text-white">Satender</span>
              <span className="text-[#8245ec]">/</span>
              <span className="text-white">Yadav</span>
              <span className="text-[#8245ec]">&gt;</span>
            </div>

            {/* Social Links */}
            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-6 sm:mb-0 text-sm font-medium text-gray-400"> 
              <li className="flex items-center">
                <Code className="mr-1 text-xl text-[#8245ec]" />
                <a href="https://leetcode.com/u/satender_yadav/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">LeetCode</a>
              </li>
              <li className="flex items-center">
                <Award className="mr-1 text-xl text-[#8245ec]" />
                <a href="https://www.hackerrank.com/profile/ys5401519" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">HackerRank</a>
              </li>
              <li className="flex items-center">
                <Linkedin className="mr-1 text-xl text-[#8245ec]" />
                <a href="https://www.linkedin.com/in/satender-yadav-a39b622a0/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">LinkedIn</a>
              </li>
              <li className="flex items-center">
                <Instagram className="mr-1 text-xl text-[#8245ec]" />
                <a href="https://www.instagram.com/yadav_sarkar1519/?igsh=Z3hsMzY1NnFkaHhq#" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">Instagram</a>
              </li>
              <li className="flex items-center">
                <Github className="mr-1 text-xl text-[#8245ec]" />
                <a href="https://github.com/Technology-maker" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#8245ec] transition-colors duration-200">GitHub</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 text-center">© 2025 Satender Yadav. All Rights Reserved.</span>
        </div>
      </footer>
    </section>
  )
}

export default Footer