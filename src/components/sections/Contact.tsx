
import React from 'react';
import { Phone, Mail, MapPin, Linkedin, MessageCircle } from 'lucide-react';

interface ContactInfo {
  phone: string;
  email: string;
  linkedin?: string;
  city?: string;
}

interface ContactProps {
  contact: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const contactItems = [
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'bg-red-50 text-red-600'
    },
    ...(contact.linkedin ? [{
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'View Profile',
      href: contact.linkedin,
      color: 'bg-blue-50 text-blue-600'
    }] : []),
    ...(contact.city ? [{
      icon: <MapPin size={20} />,
      label: 'Location',
      value: contact.city,
      href: null,
      color: 'bg-green-50 text-green-600'
    }] : [])
  ];

  const handleContactClick = () => {
    window.open(`mailto:${contact.email}`, '_blank');
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-ndot55 text-nothing-black mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-nothing-orange mx-auto mb-6"></div>
          <p className="text-nothing-gray text-lg">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="bg-nothing-lightGray rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.color}`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-nothing-black mb-1">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-nothing-orange hover:text-orange-600 transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-nothing-gray">{item.value}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button Section */}
        <div className="bg-gradient-to-r from-nothing-orange to-orange-500 rounded-2xl p-8 text-white animate-fade-in">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-orange-100">
              Get in touch to discuss opportunities and collaborations
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center gap-3 bg-white text-nothing-orange px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 hover-lift font-semibold text-lg"
            >
              <MessageCircle size={20} />
              Contact Me
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-nothing-gray">
            Built with ❤️ using Lovable AI • © 2024 Pranay Dasari
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
