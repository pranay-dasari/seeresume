
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Award, Code, FileText, Phone } from 'lucide-react';

interface SidebarProps {
  sections: string[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionIcons: { [key: string]: React.ReactNode } = {
    'professional-summary': <Home size={20} />,
    'skills': <User size={20} />,
    'work-experience': <Briefcase size={20} />,
    'certifications': <Award size={20} />,
    'projects': <Code size={20} />,
    'additional-sections': <FileText size={20} />,
    'contact': <Phone size={20} />
  };

  const sectionLabels: { [key: string]: string } = {
    'professional-summary': 'Summary',
    'skills': 'Skills',
    'work-experience': 'Experience',
    'certifications': 'Certifications',
    'projects': 'Projects',
    'additional-sections': 'Additional',
    'contact': 'Contact'
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false); // Close mobile menu
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-nothing-orange text-white rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav className={`
        fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-200">
          <div className="text-2xl font-ndot55 text-nothing-black mb-1">PORTFOLIO</div>
          <div className="text-sm text-nothing-gray">Navigation</div>
        </div>

        <div className="py-6">
          {sections.map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => handleSectionClick(sectionId)}
              className={`
                w-full flex items-center px-6 py-3 text-left transition-all duration-200 hover:bg-nothing-lightGray group
                ${activeSection === sectionId 
                  ? 'bg-nothing-orange bg-opacity-10 border-r-4 border-nothing-orange text-nothing-orange' 
                  : 'text-nothing-gray hover:text-nothing-black'
                }
              `}
            >
              <span className={`mr-3 ${activeSection === sectionId ? 'text-nothing-orange' : 'text-nothing-gray group-hover:text-nothing-black'}`}>
                {sectionIcons[sectionId]}
              </span>
              <span className="font-medium">
                {sectionLabels[sectionId]}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="text-xs text-nothing-gray text-center">
            Built with ❤️ using Lovable AI
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
