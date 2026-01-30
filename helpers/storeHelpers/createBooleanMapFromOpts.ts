export const createBooleanMapFromOpts = <
  const T extends readonly { id: string }[],
>(
  opts: T,
  initialValue = false,
): Record<T[number]["id"], boolean> => {
  return Object.fromEntries(
    opts.map((opt) => [opt.id, initialValue]),
  ) as Record<T[number]["id"], boolean>;
};
