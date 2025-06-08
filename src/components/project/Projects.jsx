import React from 'react'
import amazonimg from '../../assets/project-img/amazon-website.png'
import Email_spamimg from '../../assets/project-img/Email-Spam-Detection.png'
import foodimg from '../../assets/project-img/Food-delivery-app.png'
import movieimg from '../../assets/project-img/movie-website.png'

const Projects = () => {
    return (
        <section id='project' className='py-8 bg-gradient-to-b from-[#f8fafc] to-[#e0e7ef]'>


            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                    PROJECTS
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    A showcase of the projects I have worked on, highlighting my skills
                    and experience in various technologies
                </p>
            </div>


            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-7 px-4 md:px-12">

                {/* Project 1 */}
                <div className="bg-[#a7a2a9] rounded-xl shadow-2xl hover:shadow-indigo-800/95 transition-shadow duration-300 flex flex-col items-center p-6 group ">

                    <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg mb-4">
                        <img src={foodimg} alt="Food delivery image"
                            className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2 ">Food Delivery Frontend Application</h3>
                    <p className="text-white text-center mb-4">A powerful user-friendly React.js frontend application.</p>
                    <div className="flex gap-4 mt-auto">
                        <a href="https://github.com/Technology-maker/food-web-project" target="_blank" rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full bg-[#d2ded0] text-black font-semibold shadow  transition-colors duration-200 hover:scale-105">
                            View Code
                        </a>
                        <a href="https://technology-maker.github.io/food-web-project/" target="_blank" rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full bg-[#304b3c] text-white font-semibold shadow transition-colors duration-200 hover:scale-105">
                            View Live
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="bg-[#a7a2a9] rounded-xl shadow-2xl hover:shadow-indigo-800/95 transition-shadow duration-300 flex flex-col items-center p-6 group ">

                    <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg mb-4">
                        <img src={amazonimg} alt="Amazon image"
                            className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">Amazon Frontend Application</h3>
                    <p className="text-white text-center mb-4">This page is made with HTML and CSS. It is fully responsive and interactive.</p>
                    <div className="flex gap-4 mt-auto">
                        <a href="https://github.com/Technology-maker/Amazon-site-repo" target="_blank" rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full bg-[#d2ded0] text-black font-semibold shadow transition-colors duration-200 hover:scale-105">
                            View Code
                        </a>
                        <a href="https://technology-maker.github.io/Amazon-site-repo/" target="_blank" rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full bg-[#304b3c] text-white font-semibold shadow  transition-colors duration-200 hover:scale-105">
                            View Live
                        </a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="bg-[#a7a2a9] rounded-xl shadow-2xl hover:shadow-indigo-800/95 transition-shadow duration-300 flex flex-col items-center p-6 group ">

                    <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg mb-4">
                        <img src={movieimg} alt="Movie image"
                            className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2 transition-colors duration-300">Movie Frontend App</h3>
                    <p className="text-white text-center mb-4">A React-based frontend web application that provides movies by genres and user preferences. The design is very smooth and responsive.</p>
                    <div className="flex gap-4 mt-auto">
                        <a href="https://github.com/Technology-maker/Movie-Website" target="_blank" rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full bg-[#d2ded0] text-black font-semibold shadow  transition-colors duration-200 hover:scale-105">
                            View Code
                        </a>
                        <a href="https://technology-maker.github.io/Movie-Website/" target="_blank" rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full bg-[#304b3c] text-white font-semibold shadow  transition-colors duration-200 hover:scale-105">
                            View Live
                        </a>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="bg-[#a7a2a9] rounded-xl shadow-2xl hover:shadow-indigo-800/95 transition-shadow duration-300 flex flex-col items-center p-6 group">

                    <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg mb-4">
                        <img src={Email_spamimg} alt="Email-Spam-Detection image"
                            className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2  transition-colors duration-300">Email Spam Detection Project</h3>
                    <p className="text-white text-center mb-4">This project is made with Python using some libraries and frameworks. Please check its code.</p>
                    <div className="flex gap-4 mt-auto">
                        <a href="https://github.com/Technology-maker/Email-Spam-Detection-Machine" target="_blank" rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full bg-[#304b3c] text-white font-semibold shadow  transition-colors duration-200 hover:scale-105">
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;