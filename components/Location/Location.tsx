"use client";

import { useCampersFilterStore } from "@/lib/store/campersFilterStore";
import { LocationIcon } from "../FilterIcons/FilterIcons";
import { TextInput } from "../TextInput/TextInput";
import css from "./Location.module.css";

const Location = () => {
  const { draftFilter, setDraftFilter } = useCampersFilterStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDraftFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className={css.location}>
      <h2 className="visually-hidden">Location</h2>
      <TextInput
        id="location"
        name="location"
        label="Location"
        placeholder="Enter location"
        icon={LocationIcon}
        iconPosition="left"
        value={draftFilter.location}
        onChange={handleChange}
        required
      />
    </section>
  );
};

export default Location;
