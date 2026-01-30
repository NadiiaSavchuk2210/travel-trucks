export type QueryValue = string | number | boolean | undefined | null;

export const buildQueryString = (
  params: Record<string, QueryValue>,
): string => {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (value === true) {
      search.append(key, "");
      return;
    }

    if (value === false) {
      return;
    }

    search.append(key, String(value));
  });

  return search
    .toString()
    .replace(/=(&|$)/g, "$1")
    .replace(/=$/, "");
};
