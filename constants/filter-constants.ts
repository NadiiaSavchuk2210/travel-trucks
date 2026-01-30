import {
  ACIcon,
  AlcoveIcon,
  AutomaticIcon,
  BathroomIcon,
  FullyIntegratedIcon,
  KitchenIcon,
  TVIcon,
  VanIcon,
} from "@/components/FilterIcons/FilterIcons";

//* CAMPERS FILTER =================================================
export const VEHICLE_TYPES = ["van", "alcove", "fullyIntegrated"] as const;

export const VEHICLE_EQUIPMENT_OPTS = [
  { id: "ac", label: "AC", icon: ACIcon },
  { id: "automatic", label: "Automatic", icon: AutomaticIcon },
  { id: "kitchen", label: "Kitchen", icon: KitchenIcon },
  { id: "tv", label: "TV", icon: TVIcon },
  { id: "bathroom", label: "Bathroom", icon: BathroomIcon },
] as const;

export const VEHICLE_TYPE_OPTS = [
  { id: "van", name: "form", label: "Van", icon: VanIcon },
  {
    id: "fullyIntegrated",
    name: "form",
    label: "Fully Integrated",
    icon: FullyIntegratedIcon,
  },
  { id: "alcove", name: "form", label: "Alcove", icon: AlcoveIcon },
] as const;
