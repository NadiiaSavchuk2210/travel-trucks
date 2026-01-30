import { CampersFilter } from "@/types/filter";
import { CAMPERS_PER_PAGE } from "@/constants/constants";
import { buildFilterParams } from "./buildFilterParams";

export const createCampersQueryKey = (filter: CampersFilter, page: number) => {
  const params = buildFilterParams(filter, page, CAMPERS_PER_PAGE);

  return [
    "campers",
    Object.entries(params)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}:${v}`)
      .join("|"),
  ] as const;
};
