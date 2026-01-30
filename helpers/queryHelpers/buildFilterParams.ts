import { CampersFilter } from "@/types/filter";
import { QueryValue } from "./buildQueryString.js";

export const buildFilterParams = (
  filter: CampersFilter,
  page: number,
  limit: number,
) => {
  const params: Record<string, QueryValue> = {};

  if (filter.location.trim()) {
    params.location = filter.location.trim();
  }

  if (filter.form) {
    params.form = filter.form;
  }

  Object.entries(filter).forEach(([key, value]) => {
    if (typeof value === "boolean") {
      params[key] = value;
    }
  });

  params.page = page;
  params.limit = limit;

  return params;
};
