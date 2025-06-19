
export const calculateDuration = (startDate: string, endDate: string): string => {
  const parseDate = (dateStr: string): Date => {
    if (dateStr.toLowerCase() === "present") {
      return new Date();
    }
    const [month, year] = dateStr.split('/');
    return new Date(parseInt(year), parseInt(month) - 1, 1);
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Average days in a month
  
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  
  if (years === 0) {
    return months === 1 ? "1 month" : `${months} months`;
  } else if (months === 0) {
    return years === 1 ? "1 year" : `${years} years`;
  } else {
    const yearText = years === 1 ? "1 year" : `${years} years`;
    const monthText = months === 1 ? "1 month" : `${months} months`;
    return `${yearText}, ${monthText}`;
  }
};

export const formatDate = (dateStr: string): string => {
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
