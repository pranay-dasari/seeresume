import React from 'react';
import Header from '../components/Header';
import Certifications from '../components/sections/Certifications';
import portfolioData from '../data/portfolioData.json';

const CertificationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        fullName={portfolioData.fullName}
        title={portfolioData.title}
        phoneNumber={portfolioData.contact.phone}
      />
      <main className="pt-16">
        <Certifications certifications={portfolioData.certifications || []} />
      </main>
    </div>
  );
};

export default CertificationsPage;
