
import React from 'react';
import { Globe, Heart, FileText, Users } from 'lucide-react';

interface AdditionalSectionsData {
  languages?: string[];
  volunteerWork?: string[];
  publications?: string[];
  affiliations?: string[];
}

interface AdditionalSectionsProps {
  additionalSections: AdditionalSectionsData;
}

const AdditionalSections: React.FC<AdditionalSectionsProps> = ({ additionalSections }) => {
  const hasContent = additionalSections && (
    (additionalSections.languages && additionalSections.languages.length > 0) ||
    (additionalSections.volunteerWork && additionalSections.volunteerWork.length > 0) ||
    (additionalSections.publications && additionalSections.publications.length > 0) ||
    (additionalSections.affiliations && additionalSections.affiliations.length > 0)
  );

  if (!hasContent) {
    return null;
  }

  const sections = [
    {
      title: 'Languages',
      icon: <Globe size={20} />,
      items: additionalSections.languages || [],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Volunteer Work',
      icon: <Heart size={20} />,
      items: additionalSections.volunteerWork || [],
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Publications',
      icon: <FileText size={20} />,
      items: additionalSections.publications || [],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Affiliations',
      icon: <Users size={20} />,
      items: additionalSections.affiliations || [],
      color: 'bg-pink-50 text-pink-600'
    }
  ].filter(section => section.items.length > 0);

  return (
    <section id="achievements" className="min-h-screen bg-nothing-lightGray py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-ndot55 text-nothing-black mb-4">
            ACHIEVEMENTS
          </h2>
          <div className="w-24 h-1 bg-nothing-orange mx-auto mb-6"></div>
          <p className="text-nothing-gray text-lg">
            Notable accomplishments and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${section.color}`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-nothing-black">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-nothing-gray"
                  >
                    <div className="w-2 h-2 bg-nothing-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSections;
