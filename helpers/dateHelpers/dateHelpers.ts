export const parseDateSafely = (dateString?: string): Date | null => {
  if (!dateString || dateString === "") return null;

  const date = new Date(dateString + "T00:00:00");
  return isNaN(date.getTime()) ? null : date;
};
