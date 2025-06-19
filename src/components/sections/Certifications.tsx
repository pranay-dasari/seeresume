
import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';

interface CertificationItem {
  name: string;
  date: string;
}

interface CertificationsProps {
  certifications: CertificationItem[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="min-h-screen bg-nothing-lightGray py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-ndot55 text-nothing-black mb-4">
            CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-nothing-orange mx-auto mb-6"></div>
          <p className="text-nothing-gray text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-nothing-orange hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-nothing-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Award className="text-nothing-orange" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-nothing-black text-lg leading-tight">
                    {cert.name}
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-nothing-gray">
                <Calendar size={16} />
                <span className="text-sm">{formatDate(cert.date)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
