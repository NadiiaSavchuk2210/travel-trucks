import FiltersForm from "../FiltersForm/FiltersForm";
import Location from "../Location/Location";
import css from "./FiltersLayout.module.css";
import {
  VEHICLE_EQUIPMENT_OPTS,
  VEHICLE_TYPE_OPTS,
} from "@/constants/filter-constants";

const FiltersLayout = () => {
  return (
    <div className={css.filtersLayout}>
      <Location />

      <section className={css.filters}>
        <h2 className={css.filtersTitle}>Filters</h2>
        <FiltersForm
          vehicleEquipmentOpts={VEHICLE_EQUIPMENT_OPTS}
          vehicleTypeOpts={VEHICLE_TYPE_OPTS}
        />
      </section>
    </div>
  );
};

export default FiltersLayout;
