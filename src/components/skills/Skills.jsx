import React from "react";
import html from '../../assets/tech_logo/html.png'
import css from '../../assets/tech_logo/css.png'
import javascript from '../../assets/tech_logo/javascript.png'
import reactjs from '../../assets/tech_logo/reactjs.png'
import typescript from '../../assets/tech_logo/typescript.png'
import tailwindcss from '../../assets/tech_logo/tailwindcss.png'
import nodejs from '../../assets/tech_logo/nodejs.png'
import express from '../../assets/tech_logo/express.png'
import mysql from '../../assets/tech_logo/mysql.png'
import mongodb from '../../assets/tech_logo/mongodb.png'
import c from '../../assets/tech_logo/c.png'
import cpp from '../../assets/tech_logo/cpp.png'
import git from '../../assets/tech_logo/git.png'
import github from '../../assets/tech_logo/github.png'
import vscode from '../../assets/tech_logo/vscode.png'
import postman from '../../assets/tech_logo/postman.png'

const skillIcons = {
  html,
  css,
  javascript,
  reactjs,
  typescript,
  tailwindcss,
  nodejs,
  express,
  mysql,
  mongodb,
  c,
  cpp,
  git,
  github,
  vscode,
  postman,
};

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
        { name: "React", icon: "reactjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwindcss" }
      ]
    },
    {
      category: "Backend",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "MySQL", icon: "mysql" },
        { name: "MongoDB", icon: "mongodb" }
      ]
    },
    {
      category: "Languages",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "C", icon: "c" },
        { name: "C++", icon: "cpp" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" }
      ]
    },
    {
      category: "Tools",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
        { name: "Postman", icon: "postman" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 ">

      <div className="container mx-auto px-6 ">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A collection of my technical skills and expertise honed through various projects and experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category) => (

              <div key={category.category} className="group bg-white/70   rounded-2xl  hover:shadow-2xl hover:shadow-indigo-500/50   transition-all duration-300 transform hover:-translate-y-2 p-8 border-2 border-slate-300">

                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{category.category}</h3>
                </div>

                {/* Skills Icons */}
                <div className="grid grid-cols-3 gap-4 justify-items-center">
                  {category.skills.map((skill, skillIndex) => (

                    <div key={skill.name} className="group/skill flex flex-col items-center p-3 rounded-lg hover:bg-slate-100 transition-colors duration-200" style={{ animationDelay: `${skillIndex * 100}ms` }}>
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-2 group-hover/skill:scale-110 transition-transform duration-200 shadow-sm">
                        <img src={skillIcons[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
                      </div>
                      <span className="text-xs text-slate-600 font-medium text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>

                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/65 backdrop-blur-sm rounded-xl border-2 border-slate-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Technologies</div>
            </div>
            <div className="text-center p-6 bg-white/65 backdrop-blur-sm rounded-xl border-2 border-slate-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-slate-600">Skill Categories</div>
            </div>
            <div className="text-center p-6 bg-white/65 backdrop-blur-sm rounded-xl border-2 border-slate-300">
              <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
              <div className="text-slate-600">Years Learning</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;