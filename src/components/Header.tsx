
import React from 'react';
import { Download } from 'lucide-react';

interface HeaderProps {
  fullName: string;
  title: string;
  onDownloadResume: () => void;
}

const Header: React.FC<HeaderProps> = ({ fullName, title, onDownloadResume }) => {
  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 bg-white shadow-sm z-30 border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="ml-12 md:ml-0">
          <h1 className="text-2xl md:text-3xl font-ndot55 text-nothing-black tracking-tight">
            {fullName}
          </h1>
          <p className="text-nothing-gray font-medium mt-1">{title}</p>
        </div>
        
        <button
          onClick={onDownloadResume}
          className="flex items-center gap-2 bg-nothing-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all duration-200 hover-lift font-medium"
        >
          <Download size={18} />
          <span className="hidden sm:inline">Download Resume</span>
          <span className="sm:hidden">Resume</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
