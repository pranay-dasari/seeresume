import React from 'react';
import Header from '../components/Header';
import Contact from '../components/sections/Contact';
import portfolioData from '../data/portfolioData.json';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        fullName={portfolioData.fullName}
        title={portfolioData.title}
        phoneNumber={portfolioData.contact.phone}
      />
      <main className="pt-16">
        <Contact contact={portfolioData.contact} />
      </main>
    </div>
  );
};

export default ContactPage;
