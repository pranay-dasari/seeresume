
import React from 'react';
import { Link } from 'react-router-dom';
import { calculateTotalExperience, calculateTotalProjects } from '../../utils/experienceUtils';

interface WorkExperienceItem {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  outcomes?: string;
}

interface ProfessionalSummaryProps {
  summary: string;
  experiences: WorkExperienceItem[];
  projects: ProjectItem[];
  skills: string[];
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ 
  summary, 
  experiences, 
  projects, 
  skills 
}) => {

  const totalExperience = calculateTotalExperience(experiences);
  const totalProjects = calculateTotalProjects(projects);

  return (
    <section id="professional-summary" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nothing-black to-nothing-gray text-white p-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-ndot55 mb-4 text-nothing-orange">
            WELCOME
          </h2>
          <div className="w-24 h-1 bg-nothing-orange mx-auto mb-8"></div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-ndot55 text-white mb-6">
            Hi, I'm Pranay - A Backend Developer
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-light">
            {summary}
          </p>
        </div>
        
        <div className="mt-12 flex justify-center gap-8">
          {/* Years of Experience Widget - Orange */}
          <div className="bg-nothing-orange rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border-2 border-transparent hover:border-orange-400">
            <div className="text-4xl font-ndot55 text-white mb-3">{totalExperience}</div>
            <div className="text-lg text-white font-medium">Years Experience</div>
          </div>
          
          {/* Projects Completed Widget - Black */}
          <div className="bg-nothing-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border-2 border-gray-600 hover:border-gray-400">
            <div className="text-4xl font-ndot55 text-nothing-orange mb-3">{totalProjects}</div>
            <div className="text-lg text-white font-medium">Projects Completed</div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-block bg-nothing-orange text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200 hover-lift font-semibold text-lg"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
