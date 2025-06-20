
interface ContactInfo {
  phone: string;
  email: string;
  linkedin?: string;
  city?: string;
}

interface WorkExperienceItem {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  outcomes?: string;
}

interface CertificationItem {
  name: string;
  date: string;
}

interface PortfolioData {
  fullName: string;
  title: string;
  contact: ContactInfo;
  professionalSummary: string;
  skills: string[];
  workExperience: WorkExperienceItem[];
  certifications?: CertificationItem[];
  projects?: ProjectItem[];
  additionalSections?: any;
}

export const generatePDF = (data: PortfolioData) => {
  const formatDate = (dateStr: string): string => {
    if (dateStr.toLowerCase() === "present") {
      return "Present";
    }
    const [month, year] = dateStr.split('/');
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  let pdfContent = `
${data.fullName}
${data.title}

CONTACT INFORMATION
Phone: ${data.contact.phone}
Email: ${data.contact.email}
${data.contact.linkedin ? `LinkedIn: ${data.contact.linkedin}` : ''}
${data.contact.city ? `Location: ${data.contact.city}` : ''}

PROFESSIONAL SUMMARY
${data.professionalSummary}

SKILLS
${data.skills.join(', ')}

WORK EXPERIENCE
`;

  data.workExperience.forEach(exp => {
    pdfContent += `
${exp.jobTitle} at ${exp.company}
${exp.location} | ${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}

Key Achievements:
${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}

`;
  });

  if (data.certifications && data.certifications.length > 0) {
    pdfContent += `
CERTIFICATIONS
`;
    data.certifications.forEach(cert => {
      pdfContent += `• ${cert.name} (${cert.date})\n`;
    });
  }

  if (data.projects && data.projects.length > 0) {
    pdfContent += `
PROJECTS
`;
    data.projects.forEach(project => {
      pdfContent += `
${project.name}
${project.description}
Technologies: ${project.technologies.join(', ')}
${project.outcomes ? `Impact: ${project.outcomes}` : ''}

`;
    });
  }

  if (data.additionalSections) {
    if (data.additionalSections.languages && data.additionalSections.languages.length > 0) {
      pdfContent += `
LANGUAGES
${data.additionalSections.languages.join(', ')}

`;
    }

    if (data.additionalSections.volunteerWork && data.additionalSections.volunteerWork.length > 0) {
      pdfContent += `
VOLUNTEER WORK
${data.additionalSections.volunteerWork.map((work: string) => `• ${work}`).join('\n')}

`;
    }

    if (data.additionalSections.publications && data.additionalSections.publications.length > 0) {
      pdfContent += `
PUBLICATIONS
${data.additionalSections.publications.map((pub: string) => `• ${pub}`).join('\n')}

`;
    }
  }

  // Create and download the text file (simulating PDF)
  const blob = new Blob([pdfContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.fullName.replace(/\s+/g, '_')}_Resume.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
