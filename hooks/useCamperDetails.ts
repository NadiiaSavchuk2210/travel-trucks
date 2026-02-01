import { useMemo } from "react";
import { Camper } from "@/types/camper";

const DETAILS_KEYS: Array<keyof Camper> = [
  "form",
  "length",
  "width",
  "height",
  "tank",
  "consumption",
];

const capitalize = (value: string) =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : value;

export const useCamperDetails = (camper?: Camper) => {
  return useMemo(() => {
    if (!camper) return [];

    return DETAILS_KEYS.map((key) => ({
      label: capitalize(key),
      value: capitalize(String(camper[key])),
    }));
  }, [camper]);
};
