import React, { useState } from 'react';
import { Home, Briefcase, Award, Code, FileText, Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  fullName: string;
  title: string;
  phoneNumber: string;
}

const Header: React.FC<HeaderProps> = ({ 
  fullName, 
  title, 
  phoneNumber 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { path: '/', label: 'Summary', icon: <Home size={18} /> },
    { path: '/experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { path: '/certifications', label: 'Certifications', icon: <Award size={18} /> },
    { path: '/projects', label: 'Projects', icon: <Code size={18} /> },
    { path: '/achievements', label: 'Achievements', icon: <FileText size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Phone size={18} /> }
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30 border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-2">
          <Link to="/">
            <div>
              <h1 className="text-2xl md:text-3xl font-ndot55 text-nothing-black tracking-tight">
                {fullName}
              </h1>
              <p className="text-nothing-gray font-medium mt-1">{title}</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium
                  ${location.pathname === route.path
                    ? 'bg-nothing-orange text-white' 
                    : 'text-nothing-gray hover:bg-nothing-lightGray hover:text-nothing-black'
                  }
                `}
              >
                {route.icon}
                <span className="text-sm">{route.label}</span>
              </Link>
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
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={handleMobileNavClick}
                  className={`
                    w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200
                    ${location.pathname === route.path
                      ? 'bg-nothing-orange text-white' 
                      : 'text-nothing-gray hover:bg-nothing-lightGray hover:text-nothing-black'
                    }
                  `}
                >
                  {route.icon}
                  <span className="font-medium">{route.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
