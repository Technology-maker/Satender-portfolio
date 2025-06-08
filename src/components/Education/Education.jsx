import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import college_logo from '../../assets/Education-logo/fotor-20250607173814.jpg';
import school_logo from '../../assets/Education-logo/school-logo.jpeg';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications",
      institution: "St. Andrews Institute of Technology & Management, SAITM",
      duration: "2024 - Present",
      location: "Gurgaon",
      description: "I am pursuing a BCA in Computer Applications from St. Andrews Institute of Technology & Management (SAITM), Gurgaon. During my time at SAITM, I have gained a strong foundation in programming, software development, and core computer science principles.",
      image: college_logo,
      status: "current"
    },
    {
      id: 2,
      degree: "Senior Secondary Education",
      institution: "Happy Senior Secondary School",
      duration: "2022 - 2023",
      location: "RBSE Board",
      description: "I completed my class 12 education from Happy Senior Secondary School, under the RBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      image: school_logo,
      status: "completed"
    }
  ];

  return (
    <section id='education' className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              My education has been a journey of learning and development. Here are the details of my academic background.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

            <div className="space-y-12">
              {educationData.map((education, index) => (
                <div key={education.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full shadow-lg z-10"></div>

                  {/* Education Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>

                    <div className="bg-slate-300 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                      {/* Status Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 ${education.status === 'current'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                        }`}>
                        {education.status === 'current' ? 'Currently Pursuing' : 'Completed'}
                      </div>

                      {/* Institution Image */}
                      <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center mb-6`}>
                        <div className="relative">
                          <img
                            src={education.image}
                            alt={education.institution}
                            className="w-20 h-20 rounded-full object-cover border-4 border-purple-200 shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">
                        {education.degree}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <p className="text-purple-600 font-semibold text-lg">
                          {education.institution}
                        </p>

                        <div className="flex items-center gap-4 text-slate-500 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{education.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{education.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed">
                        {education.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border-2 border-slate-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
              <div className="text-slate-600">Years of Study</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border-2 border-slate-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">PCM</div>
              <div className="text-slate-600">Specialization</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border-2 border-slate-300">
              <div className="text-3xl font-bold text-green-600 mb-2">BCA</div>
              <div className="text-slate-600">Current Degree</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;