import React from 'react'
import TypeEffect from './TypeEffect'
import mywebimg from '../../assets/my-image-logo/myimg.png'
import { MdFileDownload } from "react-icons/md"

const About = () => {
  return (
    <section id='about' className="py-0 flex flex-col md:flex-row items-center justify-center mt-1 bg-[#A7A2A9] rounded-md min-h-[450px]">


      {/* About Me Text */}
      <div className="md:w-1/2 w-full p-4 flex items-center justify-center min-h-[220px]">
        <div className="w-full max-w-xl">
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">
            Hi, I'm Satender
          </h2>
          <h3 className="text-b md:text-lg mb-2 flex items-center ">
            I am a&nbsp;
            <span>
              <TypeEffect />
            </span>
          </h3>
          <p className="text-sm md:text-base text-rose-50 mb-4">
            I am a full-stack developer skilled in both front-end and back-end development, specializing in the MERN stack and other modern technologies to build high-quality applications.
            Currently pursuing a BCA, I have a strong foundation in full-stack development with hands-on experience in the MERN stack, React.js, and JavaScript. I am also proficient in C, C++, and Data Structures & Algorithms, having solved 50+ problems on LeetCode and HackerRank.
          </p>
          {/* Download Resume Section */}
          <a
            href="/public/Satender-CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-[#8245ec] text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-[#6d36c9] transition-colors duration-200 border-slate-700 border-2"
          >
            <MdFileDownload className="text-xl" />
            Download Resume
          </a>
        </div>
      </div>


      {/* My Image */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-4 min-h-[220px]">
        <img
          src={mywebimg}
          alt="Satender"
          className="rounded-full w-40 h-40 md:w-72 md:h-72 object-cover border-2 border-solid border-sky-400  transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 shadow-2xl shadow-indigo-500/50 "
        />
      </div>
    </section>
  )
}
export default About;