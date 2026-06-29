export const getDuration = (startDate: Date): string => {
  const now = new Date();

  const months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());

  if (months < 12) {
    return `${months} Mo`;
  }

  const years = Math.floor(months / 12);

  return `${years}+ ${years === 1 ? "Yr" : "Yrs"}`;
}
