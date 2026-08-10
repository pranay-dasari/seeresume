
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
    <section id="professional-summary" className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-ndot55 mb-4 text-nothing-black">
            WELCOME
          </h2>
          <div className="w-24 h-1 bg-nothing-orange mx-auto mb-8"></div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-ndot55 text-nothing-black mb-6">
            Data Scientist | AI Builder | Software Engineer
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-nothing-gray font-light">
            {summary}
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-8">
          {/* Years of Experience Widget */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift border border-gray-200 hover:border-nothing-orange">
            <div className="text-4xl font-ndot55 text-nothing-orange mb-3">{totalExperience}</div>
            <div className="text-lg text-nothing-black font-medium">Years Experience</div>
          </div>

          {/* Projects Built Widget */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift border border-gray-200 hover:border-nothing-orange">
            <div className="text-4xl font-ndot55 text-nothing-orange mb-3">{totalProjects}</div>
            <div className="text-lg text-nothing-black font-medium">Projects Built</div>
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
