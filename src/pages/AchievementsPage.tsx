import React from 'react';
import Header from '../components/Header';
import AdditionalSections from '../components/sections/AdditionalSections';
import portfolioData from '../data/portfolioData.json';

const AchievementsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        fullName={portfolioData.fullName}
        title={portfolioData.title}
        phoneNumber={portfolioData.contact.phone}
      />
      <main className="pt-16">
        <AdditionalSections additionalSections={portfolioData.additionalSections || {}} />
      </main>
    </div>
  );
};

export default AchievementsPage;
