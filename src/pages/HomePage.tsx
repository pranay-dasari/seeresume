import React from 'react';
import Header from '../components/Header';
import ProfessionalSummary from '../components/sections/ProfessionalSummary';
import portfolioData from '../data/portfolioData.json';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        fullName={portfolioData.fullName}
        title={portfolioData.title}
        phoneNumber={portfolioData.contact.phone}
      />
      <main className="pt-16">
        <ProfessionalSummary 
          summary={portfolioData.professionalSummary}
          experiences={portfolioData.workExperience}
          projects={portfolioData.projects || []}
          skills={portfolioData.skills}
        />
      </main>
    </div>
  );
};

export default HomePage;
