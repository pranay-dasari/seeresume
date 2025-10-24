import React from 'react';
import Header from '../components/Header';
import Projects from '../components/sections/Projects';
import portfolioData from '../data/portfolioData.json';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        fullName={portfolioData.fullName}
        title={portfolioData.title}
        phoneNumber={portfolioData.contact.phone}
      />
      <main className="pt-16">
        <Projects projects={portfolioData.projects || []} />
      </main>
    </div>
  );
};

export default ProjectsPage;
