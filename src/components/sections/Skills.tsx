
import React from 'react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="min-h-screen bg-nothing-lightGray py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-ndot55 text-nothing-black mb-4">
            SKILLS & EXPERTISE
          </h2>
          <div className="w-24 h-1 bg-nothing-orange mx-auto mb-6"></div>
          <p className="text-nothing-gray text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-slide-in-left">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 hover:border-nothing-orange rounded-lg p-4 text-center transition-all duration-300 hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-nothing-black font-medium group-hover:text-nothing-orange transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
