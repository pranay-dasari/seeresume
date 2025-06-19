
import React from 'react';

interface ProfessionalSummaryProps {
  summary: string;
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ summary }) => {
  return (
    <section id="professional-summary" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nothing-black to-nothing-gray text-white p-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-ndot55 mb-4 text-nothing-orange">
            WELCOME
          </h2>
          <div className="w-24 h-1 bg-nothing-orange mx-auto mb-8"></div>
        </div>
        
        <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-light">
          {summary}
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-ndot55 text-nothing-orange mb-2">5+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-ndot55 text-nothing-orange mb-2">50+</div>
            <div className="text-sm text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-ndot55 text-nothing-orange mb-2">15+</div>
            <div className="text-sm text-gray-300">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
