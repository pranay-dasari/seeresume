
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { calculateDuration, formatDate } from '../../utils/dateUtils';

interface WorkExperienceItem {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section id="work-experience" className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-ndot55 text-nothing-black mb-4">
            WORK EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-nothing-orange mx-auto mb-6"></div>
          <p className="text-nothing-gray text-lg">
            My professional journey and achievements
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-8 w-8 h-8 bg-nothing-orange rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-nothing-black mb-2">
                    {exp.jobTitle}
                  </h3>
                  <div className="flex items-center gap-2 text-nothing-orange font-semibold mb-2">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-nothing-gray mb-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-nothing-gray mb-2">
                    <Calendar size={16} />
                    <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                  </div>
                  <div className="text-sm text-nothing-orange font-medium bg-orange-50 px-3 py-1 rounded-full inline-block">
                    {calculateDuration(exp.startDate, exp.endDate)}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-nothing-black mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-nothing-gray"
                      >
                        <div className="w-2 h-2 bg-nothing-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline line */}
        <div className="absolute left-0 top-32 bottom-32 w-px bg-gray-300 ml-2 hidden md:block"></div>
      </div>
    </section>
  );
};

export default WorkExperience;
