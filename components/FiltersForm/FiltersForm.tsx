import { VehicleEquipmentOpts, VehicleTypeOpts } from "@/types/filter";
import { CheckableInput } from "../CheckableInput/CheckableInput";
import FilterGroup from "../FilterGroup/FilterGroup";
import css from "./FiltersForm.module.css";
import Button from "../Button/Button";

interface Props {
  vehicleEquipmentOpts: VehicleEquipmentOpts[];
  vehicleTypeOpts: VehicleTypeOpts[];
}

const FiltersForm = ({ vehicleEquipmentOpts, vehicleTypeOpts }: Props) => {
  return (
    <form className={css.filters}>
      <FilterGroup title="Vehicle equipment">
        {vehicleEquipmentOpts.map((option) => (
          <CheckableInput key={option.id} type="checkbox" {...option} />
        ))}
      </FilterGroup>
      <FilterGroup title="Vehicle type">
        {vehicleTypeOpts.map((option) => (
          <CheckableInput key={option.id} type="radio" {...option} />
        ))}
      </FilterGroup>
      <Button as="button" type="submit" className={css.filterButton}>
        Search
      </Button>
    </form>
  );
};

export default FiltersForm;
