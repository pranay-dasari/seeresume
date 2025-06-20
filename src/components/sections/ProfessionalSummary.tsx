
import React from 'react';
import { calculateTotalExperience, calculateTotalProjects, calculateUniqueTechnologies } from '../../utils/experienceUtils';

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
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalExperience = calculateTotalExperience(experiences);
  const totalProjects = calculateTotalProjects(projects);
  const totalTechnologies = calculateUniqueTechnologies(experiences, projects, skills);

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
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-ndot55 text-nothing-orange mb-2">{totalExperience}</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-ndot55 text-nothing-orange mb-2">{totalProjects}</div>
            <div className="text-sm text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-ndot55 text-nothing-orange mb-2">{totalTechnologies}</div>
            <div className="text-sm text-gray-300">Technologies</div>
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={handleContactClick}
            className="bg-nothing-orange text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200 hover-lift font-semibold text-lg"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
