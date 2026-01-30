import {
  VEHICLE_EQUIPMENT_OPTS,
  VEHICLE_TYPE_OPTS,
} from "@/constants/filter-constants";

export type VehicleTypeId = (typeof VEHICLE_TYPE_OPTS)[number]["id"];
export type EquipmentId = (typeof VEHICLE_EQUIPMENT_OPTS)[number]["id"];
export interface VehicleEquipmentOpts {
  id: EquipmentId;
  label: string;
  icon: React.ReactNode;
}
export interface VehicleTypeOpts {
  id: VehicleTypeId;
  name: string;
  label: string;
  icon: React.ReactNode;
}

export type CampersFilter = {
  location: string;
  form: VehicleTypeId | null;
} & Record<EquipmentId, boolean>;

export type NormalizedFilter = Record<string, string>;
