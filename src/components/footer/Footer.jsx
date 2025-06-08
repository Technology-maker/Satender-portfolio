import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const Footer = () => {
  return (
    <section >

      <footer className="rounded-lg shadow-sm dark:bg-gray-800 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-3 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">

            <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white py-2">
              <span className="text-[#8245ec]">&lt;</span>
              <span className="text-white">Satender</span>
              <span className="text-[#8245ec]">/</span>
              <span className="text-white">Yadav</span>
              <span className="text-[#8245ec]">&gt;</span>
            </div>


            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li className="flex items-center me-4 md:me-6 m-2">
                <SiLeetcode className="mr-1 text-xl" />
                <a href="https://leetcode.com/u/satender_yadav/" className="hover:underline">LeetCode</a>
              </li>
              <li className="flex items-center me-4 md:me-6 m-2">
                <SiHackerrank className="mr-1 text-xl" />
                <a href="https://www.hackerrank.com/profile/ys5401519" className="hover:underline">HackerRank</a>
              </li>
              <li className="flex items-center me-4 md:me-6 m-2">
                <FaLinkedin className="mr-1 text-xl" />
                <a href="https://www.linkedin.com/in/satender-yadav-a39b622a0/" className="hover:underline">LinkedIn</a>
              </li>
              <li className="flex items-center me-4 md:me-6 m-2">
                <FaInstagram className="mr-1 text-xl" />
                <a href="https://www.instagram.com/yadav_sarkar1519/?igsh=Z3hsMzY1NnFkaHhq#" className="hover:underline">Instagram</a>
              </li>
              <li className="flex items-center m-2">
                <FaGithub className="mr-1 text-xl" />
                <a href="https://github.com/Technology-maker" className="hover:underline">GitHub</a>
              </li>
            </ul>


          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 satender yadav. All Rights Reserved.</span>
        </div>
      </footer>



    </section>
  )
}

export default Footer