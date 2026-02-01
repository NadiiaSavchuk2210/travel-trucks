export const getInitial = (name: string) => name.slice(0, 1).toUpperCase();

export const capitalize = (str: string) =>
  str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str;
