"use client";

import {
  CampersFilter,
  VehicleEquipmentOpts,
  VehicleTypeOpts,
} from "@/types/filter";
import { CheckableInput } from "../CheckableInput/CheckableInput";
import FilterGroup from "../FilterGroup/FilterGroup";
import Button from "../Button/Button";
import css from "./FiltersForm.module.css";

import { useCampersFilterStore } from "@/lib/store/campersFilterStore";
import { useCampersStore } from "@/lib/store/campersStrore";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

interface Props {
  vehicleEquipmentOpts: readonly VehicleEquipmentOpts[];
  vehicleTypeOpts: readonly VehicleTypeOpts[];
}

const FiltersForm = ({ vehicleEquipmentOpts, vehicleTypeOpts }: Props) => {
  const router = useRouter();

  const {
    filter,
    draftFilter,
    setDraftFilter,
    applyFilter,
    hydrateDraftFromFilter,
    resetAll,
  } = useCampersFilterStore();

  const clearCampers = useCampersStore((state) => state.clearCampers);

  useEffect(() => {
    hydrateDraftFromFilter();
  }, [hydrateDraftFromFilter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    setDraftFilter((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : checked,
    }));
  };

  const isFilterUnchanged = useMemo(() => {
    return Object.keys(draftFilter).every(
      (key) =>
        draftFilter[key as keyof CampersFilter] ===
        filter[key as keyof CampersFilter],
    );
  }, [draftFilter, filter]);

  const isFilterEmpty = useMemo(() => {
    return Object.values(draftFilter).every(
      (value) => value === "" || value === false || value === null,
    );
  }, [draftFilter]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFilterUnchanged) return;

    clearCampers();
    applyFilter();
  };

  const handleReset = () => {
    resetAll();
    clearCampers();
    router.replace("?", { scroll: false });
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
        <Button
          as="button"
          type="submit"
          className={css.filterButton}
          disabled={isFilterEmpty}
        >
          Search
        </Button>
        <Button
          as="button"
          type="reset"
          variant="outline"
          className={css.filterButton}
          onClick={handleReset}
          disabled={isFilterEmpty}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default FiltersForm;
