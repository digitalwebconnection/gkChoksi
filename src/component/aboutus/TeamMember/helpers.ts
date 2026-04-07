export const extractYears = (text: string) =>
  parseInt(text.replace(/\D/g, ""), 10);