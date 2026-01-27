export const buildFilterParams = <T extends object>(filter: T): Partial<T> =>
  Object.fromEntries(
    Object.entries(filter).filter(
      ([key, value]) => value !== undefined && value !== false && value !== "",
    ),
  ) as Partial<T>;
