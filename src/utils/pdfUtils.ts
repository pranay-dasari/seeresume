
import jsPDF from 'jspdf';

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
  const pdf = new jsPDF();
  let yPosition = 20;
  const pageWidth = pdf.internal.pageSize.width;
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;

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

  const addText = (text: string, fontSize: number = 10, isBold: boolean = false, color: number[] = [0, 0, 0]) => {
    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
    pdf.setTextColor(color[0], color[1], color[2]);
    
    const lines = pdf.splitTextToSize(text, maxWidth);
    lines.forEach((line: string) => {
      if (yPosition > 270) {
        pdf.addPage();
        yPosition = 20;
      }
      pdf.text(line, margin, yPosition);
      yPosition += fontSize * 0.5;
    });
    yPosition += 5;
  };

  const addSection = (title: string) => {
    yPosition += 10;
    addText(title, 14, true, [255, 98, 0]); // Orange color for headers
    yPosition += 5;
  };

  // Header
  addText(data.fullName, 20, true, [0, 0, 0]);
  addText(data.title, 12, false, [100, 100, 100]);
  yPosition += 10;

  // Contact Information
  addSection('CONTACT INFORMATION');
  addText(`Phone: ${data.contact.phone}`);
  addText(`Email: ${data.contact.email}`);
  if (data.contact.linkedin) {
    addText(`LinkedIn: ${data.contact.linkedin}`);
  }
  if (data.contact.city) {
    addText(`Location: ${data.contact.city}`);
  }

  // Professional Summary
  addSection('PROFESSIONAL SUMMARY');
  addText(data.professionalSummary);

  // Skills
  addSection('SKILLS');
  addText(data.skills.join(', '));

  // Work Experience
  addSection('WORK EXPERIENCE');
  data.workExperience.forEach(exp => {
    addText(`${exp.jobTitle} at ${exp.company}`, 11, true);
    addText(`${exp.location} | ${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`, 9, false, [100, 100, 100]);
    yPosition += 5;
    addText('Key Achievements:', 10, true);
    exp.achievements.forEach(achievement => {
      addText(`• ${achievement}`, 9);
    });
    yPosition += 5;
  });

  // Certifications
  if (data.certifications && data.certifications.length > 0) {
    addSection('CERTIFICATIONS');
    data.certifications.forEach(cert => {
      addText(`• ${cert.name} (${cert.date})`);
    });
  }

  // Projects
  if (data.projects && data.projects.length > 0) {
    addSection('PROJECTS');
    data.projects.forEach(project => {
      addText(project.name, 11, true);
      addText(project.description);
      addText(`Technologies: ${project.technologies.join(', ')}`, 9, false, [100, 100, 100]);
      if (project.outcomes) {
        addText(`Impact: ${project.outcomes}`, 9);
      }
      yPosition += 5;
    });
  }

  // Additional Sections
  if (data.additionalSections) {
    if (data.additionalSections.languages && data.additionalSections.languages.length > 0) {
      addSection('LANGUAGES');
      addText(data.additionalSections.languages.join(', '));
    }

    if (data.additionalSections.volunteerWork && data.additionalSections.volunteerWork.length > 0) {
      addSection('VOLUNTEER WORK');
      data.additionalSections.volunteerWork.forEach((work: string) => {
        addText(`• ${work}`);
      });
    }

    if (data.additionalSections.publications && data.additionalSections.publications.length > 0) {
      addSection('PUBLICATIONS');
      data.additionalSections.publications.forEach((pub: string) => {
        addText(`• ${pub}`);
      });
    }
  }

  // Save the PDF
  pdf.save(`${data.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
};
