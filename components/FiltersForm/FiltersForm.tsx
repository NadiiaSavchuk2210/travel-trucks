"use client";

import { VehicleEquipmentOpts, VehicleTypeOpts } from "@/types/filter";
import { CheckableInput } from "../CheckableInput/CheckableInput";
import FilterGroup from "../FilterGroup/FilterGroup";
import css from "./FiltersForm.module.css";
import Button from "../Button/Button";
import { useCampersFilterStore } from "@/lib/store/campersFilterStore";
import { useEffect } from "react";

interface Props {
  vehicleEquipmentOpts: readonly VehicleEquipmentOpts[];
  vehicleTypeOpts: readonly VehicleTypeOpts[];
}

const FiltersForm = ({ vehicleEquipmentOpts, vehicleTypeOpts }: Props) => {
  const {
    draftFilter,
    setDraftFilter,
    applyFilter,
    hydrateDraftFromFilter,
    resetAll,
  } = useCampersFilterStore();

  useEffect(() => {
    hydrateDraftFromFilter();
  }, [hydrateDraftFromFilter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    setDraftFilter((prev) => {
      if (type === "radio") {
        return { ...prev, [name]: value };
      }

      return { ...prev, [name]: checked };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyFilter();
  };

  return (
    <form className={css.filters} onSubmit={handleSubmit}>
      <FilterGroup title="Vehicle equipment">
        {vehicleEquipmentOpts.map((option) => (
          <CheckableInput
            key={option.id}
            type="checkbox"
            name={option.id}
            checked={draftFilter[option.id] ?? false}
            onChange={handleChange}
            {...option}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Vehicle type">
        {vehicleTypeOpts.map((option) => (
          <CheckableInput
            key={option.id}
            type="radio"
            value={option.id}
            checked={draftFilter.form === option.id}
            onChange={handleChange}
            {...option}
          />
        ))}
      </FilterGroup>
      <div className={css.btnGroup}>
        <Button as="button" type="submit" className={css.filterButton}>
          Search
        </Button>
        <Button
          as="button"
          type="reset"
          variant="outline"
          className={css.filterButton}
          onClick={resetAll}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default FiltersForm;
