import React from 'react';
import Header from '../components/Header';
import WorkExperience from '../components/sections/WorkExperience';
import portfolioData from '../data/portfolioData.json';

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        fullName={portfolioData.fullName}
        title={portfolioData.title}
        phoneNumber={portfolioData.contact.phone}
      />
      <main className="pt-16">
        <WorkExperience experiences={portfolioData.workExperience} />
      </main>
    </div>
  );
};

export default ExperiencePage;
