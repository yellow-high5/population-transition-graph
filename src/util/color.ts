export const generateRandomColor = (code: number) => {
  return `#${('000000' + Math.floor(((code * 2) / 100) * 16777215).toString(16)).slice(-6)}`;
};
