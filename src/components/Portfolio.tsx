
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ProfessionalSummary from './sections/ProfessionalSummary';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import AdditionalSections from './sections/AdditionalSections';
import Contact from './sections/Contact';
import portfolioData from '../data/portfolioData.json';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('professional-summary');

  // Determine which sections to show based on data availability
  const availableSections = [
    'professional-summary',
    'skills',
    'work-experience',
    ...(portfolioData.certifications && portfolioData.certifications.length > 0 ? ['certifications'] : []),
    ...(portfolioData.projects && portfolioData.projects.length > 0 ? ['projects'] : []),
    ...(portfolioData.additionalSections && Object.values(portfolioData.additionalSections).some(arr => arr && arr.length > 0) ? ['additional-sections'] : []),
    'contact'
  ];

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // For demo purposes, we'll show an alert. In a real implementation,
    // this would generate and download a PDF using the portfolio data
    alert('Resume download feature would be implemented here with PDF generation using the JSON data.');
    console.log('Portfolio data for PDF generation:', portfolioData);
  };

  // Handle scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = availableSections;
      let currentSection = sections[0];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [availableSections]);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar
        sections={availableSections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      
      <Header
        fullName={portfolioData.fullName}
        title={portfolioData.title}
        onDownloadResume={handleDownloadResume}
      />

      <main className="ml-0 md:ml-64 pt-20">
        <ProfessionalSummary summary={portfolioData.professionalSummary} />
        
        <Skills skills={portfolioData.skills} />
        
        <WorkExperience experiences={portfolioData.workExperience} />
        
        {portfolioData.certifications && portfolioData.certifications.length > 0 && (
          <Certifications certifications={portfolioData.certifications} />
        )}
        
        {portfolioData.projects && portfolioData.projects.length > 0 && (
          <Projects projects={portfolioData.projects} />
        )}
        
        {portfolioData.additionalSections && 
         Object.values(portfolioData.additionalSections).some(arr => arr && arr.length > 0) && (
          <AdditionalSections additionalSections={portfolioData.additionalSections} />
        )}
        
        <Contact 
          contact={portfolioData.contact} 
          onDownloadResume={handleDownloadResume}
        />
      </main>
    </div>
  );
};

export default Portfolio;
