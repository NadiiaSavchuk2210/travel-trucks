import { buildFilterParams } from "@/helpers/filterHelper";
import { useMemo } from "react";

export const useNormalizedFilter = <T extends Record<string, unknown>>(
  filter: T,
) => useMemo(() => buildFilterParams(filter), [filter]);
