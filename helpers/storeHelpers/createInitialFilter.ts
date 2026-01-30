import { CampersFilter } from "@/types/filter";

import { VEHICLE_EQUIPMENT_OPTS } from "@/constants/filter-constants";
import { createBooleanMapFromOpts } from "./createBooleanMapFromOpts";

export const createInitialFilter = (): CampersFilter => ({
  location: "",
  form: null,
  ...createBooleanMapFromOpts(VEHICLE_EQUIPMENT_OPTS),
});
