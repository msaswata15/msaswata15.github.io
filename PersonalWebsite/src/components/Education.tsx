import React from 'react';
import { GraduationCap, Trophy, Calendar } from 'lucide-react';

const Education = () => {
  const timeline = [
    {
      type: "education",
      title: "B.Tech in Computer Science",
      institution: "Institute of Engineering & Management, Kolkata",
      period: "2022 - 2026",
      details: "SGPA: 9.17",
      icon: <GraduationCap className="text-blue-400" size={20} />
    },
    {
      type: "education", 
      title: "ISC (Class 12)",
      institution: "The Assembly of God Church School, Haldia",
      period: "2022",
      details: "94.75%",
      icon: <GraduationCap className="text-blue-400" size={20} />
    },
    {
      type: "education",
      title: "ICSE (Class 10)", 
      institution: "The Assembly of God Church School, Haldia",
      period: "2020",
      details: "92.4%",
      icon: <GraduationCap className="text-blue-400" size={20} />
    },
    {
      type: "achievement",
      title: "ISC School Topper & House Captain",
      institution: "The Assembly of God Church School",
      period: "2021-2022",
      details: "Leadership and Academic Excellence",
      icon: <Trophy className="text-yellow-400" size={20} />
    },
    {
      type: "achievement",
      title: "NPTEL Silver Certification",
      institution: "Top 5% Performer",
      period: "2023",
      details: "Multiple courses in Programming and Data Science",
      icon: <Trophy className="text-yellow-400" size={20} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Academic journey and recognition for excellence in computer science and leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-900 border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className={`bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 ${
                    item.type === 'achievement' ? 'border-yellow-500/30' : 'border-blue-500/30'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="text-gray-400" size={16} />
                      <span className="text-gray-400 text-sm">{item.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-blue-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    
                    <p className="text-gray-300 text-sm">
                      {item.details}
                    </p>

                    {item.type === 'achievement' && (
                      <div className="mt-3 inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs">
                        <Trophy size={12} />
                        Achievement
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;