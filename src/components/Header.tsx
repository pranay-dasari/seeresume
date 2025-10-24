
import React, { useState } from 'react';
import { Home, Briefcase, Award, Code, FileText, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  fullName: string;
  title: string;
  sections: string[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  phoneNumber: string;
}

const Header: React.FC<HeaderProps> = ({ 
  fullName, 
  title, 
  sections, 
  activeSection, 
  onSectionClick,
  phoneNumber 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIcons: { [key: string]: React.ReactNode } = {
    'professional-summary': <Home size={18} />,
    'work-experience': <Briefcase size={18} />,
    'certifications': <Award size={18} />,
    'projects': <Code size={18} />,
    'achievements': <FileText size={18} />,
    'contact': <Phone size={18} />
  };

  const sectionLabels: { [key: string]: string } = {
    'professional-summary': 'Summary',
    'work-experience': 'Experience',
    'certifications': 'Certifications',
    'projects': 'Projects',
    'achievements': 'Achievements',
    'contact': 'Contact'
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30 border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-2">
          <div>
            <h1 className="text-2xl md:text-3xl font-ndot55 text-nothing-black tracking-tight">
              {fullName}
            </h1>
            <p className="text-nothing-gray font-medium mt-1">{title}</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((sectionId) => (
              <button
                key={sectionId}
                onClick={() => handleSectionClick(sectionId)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium
                  ${activeSection === sectionId 
                    ? 'bg-nothing-orange text-white' 
                    : 'text-nothing-gray hover:bg-nothing-lightGray hover:text-nothing-black'
                  }
                `}
              >
                {sectionIcons[sectionId]}
                <span className="text-sm">{sectionLabels[sectionId]}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-nothing-orange"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="py-2">
              {sections.map((sectionId) => (
                <button
                  key={sectionId}
                  onClick={() => handleSectionClick(sectionId)}
                  className={`
                    w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200
                    ${activeSection === sectionId 
                      ? 'bg-nothing-orange text-white' 
                      : 'text-nothing-gray hover:bg-nothing-lightGray hover:text-nothing-black'
                    }
                  `}
                >
                  {sectionIcons[sectionId]}
                  <span className="font-medium">{sectionLabels[sectionId]}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
