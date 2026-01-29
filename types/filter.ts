export interface VehicleEquipmentOpts {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface VehicleTypeOpts extends VehicleEquipmentOpts {
  name: string;
}
