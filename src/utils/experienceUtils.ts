
import { calculateDuration } from './dateUtils';

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

export const calculateTotalExperience = (experiences: WorkExperienceItem[]): string => {
  let totalMonths = 0;
  
  experiences.forEach(exp => {
    const parseDate = (dateStr: string): Date => {
      if (dateStr.toLowerCase() === "present") {
        return new Date();
      }
      const [month, year] = dateStr.split('/');
      return new Date(parseInt(year), parseInt(month) - 1, 1);
    };

    const start = parseDate(exp.startDate);
    const end = parseDate(exp.endDate);
    
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    totalMonths += diffMonths;
  });
  
  const totalYears = totalMonths / 12;
  const roundedYears = Math.floor(totalYears);
  
  if (totalYears - roundedYears >= 0.5) {
    return `${roundedYears + 1}+`;
  } else {
    return `${roundedYears}+`;
  }
};

export const calculateTotalProjects = (projects: ProjectItem[]): string => {
  return `${projects.length}+`;
};

export const calculateUniqueTechnologies = (experiences: WorkExperienceItem[], projects: ProjectItem[], skills: string[]): string => {
  const techSet = new Set<string>();
  
  // Add skills
  skills.forEach(skill => techSet.add(skill.toLowerCase()));
  
  // Add technologies from projects
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech.toLowerCase()));
  });
  
  return `${techSet.size}+`;
};
