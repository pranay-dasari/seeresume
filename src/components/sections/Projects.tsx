
import React from 'react';
import { ExternalLink, Code, Target } from 'lucide-react';

interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  outcomes?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-ndot55 text-nothing-black mb-4">
            FEATURED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-nothing-orange mx-auto mb-6"></div>
          <p className="text-nothing-gray text-lg">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex-1 perspective-1000 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full hover:shadow-2xl transition-all duration-500 hover-lift group">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-nothing-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Code className="text-nothing-orange" size={24} />
                  </div>
                  <ExternalLink 
                    className="text-nothing-gray group-hover:text-nothing-orange transition-colors cursor-pointer" 
                    size={20} 
                  />
                </div>

                {/* Project Content */}
                <h3 className="text-2xl font-bold text-nothing-black mb-4 group-hover:text-nothing-orange transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-nothing-gray mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-nothing-black mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-nothing-lightGray text-nothing-gray text-sm rounded-full border border-gray-200 hover:border-nothing-orange hover:text-nothing-orange transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                {project.outcomes && (
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="text-nothing-orange" size={16} />
                      <h4 className="text-sm font-semibold text-nothing-black uppercase tracking-wide">
                        Impact
                      </h4>
                    </div>
                    <p className="text-nothing-gray text-sm">
                      {project.outcomes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
