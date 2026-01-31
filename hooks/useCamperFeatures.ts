import { Camper } from "@/types/camper";
import { useMemo } from "react";

type Feature = {
  name: string;
  icon: string | null;
};

const FEATURE_ICONS: Record<string, string | null> = {
  AC: "ac",
  bathroom: "bathroom",
  kitchen: "kitchen",
  TV: "tv",
  radio: "radio",
  refrigerator: "refrigerator",
  microwave: "microwave",
  gas: "gas",
  water: "water",
};

const VALUE_BASED_ICONS: Record<string, string | null> = {
  petrol: "petrol",
  automatic: "automatic",
  diesel: null,
  manual: null,
};

export const useCamperFeatures = (camper?: Camper): Feature[] => {
  return useMemo(() => {
    if (!camper) return [];

    const features: Feature[] = [];

    // Boolean-based features
    Object.entries(FEATURE_ICONS).forEach(([key, icon]) => {
      if (camper[key as keyof Camper] === true && icon) {
        features.push({ name: key, icon });
      }
    });

    // Value-based features
    const engineIcon = VALUE_BASED_ICONS[camper.engine];
    if (engineIcon) {
      features.push({ name: camper.engine, icon: engineIcon });
    }

    const transmissionIcon = VALUE_BASED_ICONS[camper.transmission];
    if (transmissionIcon) {
      features.push({ name: camper.transmission, icon: transmissionIcon });
    }

    return features;
  }, [camper]);
};
