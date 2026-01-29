import {
  ACIcon,
  AlcoveIcon,
  AutomaticIcon,
  BathroomIcon,
  FullyIntegratedIcon,
  KitchenIcon,
  TVIcon,
  VanIcon,
} from "../FilterIcons/FilterIcons";
import FiltersForm from "../FiltersForm/FiltersForm";
import Location from "../Location/Location";
import css from "./FiltersLayout.module.css";

const FiltersLayout = () => {
  const vehicleEquipmentOpts = [
    { id: "ac", label: "AC", icon: ACIcon },
    { id: "automatic", label: "Automatic", icon: AutomaticIcon },
    { id: "kitchen", label: "Kitchen", icon: KitchenIcon },
    { id: "tv", label: "TV", icon: TVIcon },
    { id: "bathroom", label: "Bathroom", icon: BathroomIcon },
  ];

  const vehicleTypeOpts = [
    { id: "van", name: "vehicle-type", label: "Van", icon: VanIcon },
    {
      id: "fully-integrated",
      name: "vehicle-type",
      label: "Fully Integrated",
      icon: FullyIntegratedIcon,
    },
    { id: "alcove", name: "vehicle-type", label: "Alcove", icon: AlcoveIcon },
  ];

  return (
    <div className={css.filtersLayout}>
      <Location />

      <section className={css.filters}>
        <h2 className={css.filtersTitle}>Filters</h2>
        <FiltersForm
          vehicleEquipmentOpts={vehicleEquipmentOpts}
          vehicleTypeOpts={vehicleTypeOpts}
        />
      </section>
    </div>
  );
};

export default FiltersLayout;
