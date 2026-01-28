export const isActiveRoute = (pathName: string, href: string): boolean => {
  if (href === "/") return pathName === "/";

  return pathName === href || pathName.startsWith(`${href}/`);
};
