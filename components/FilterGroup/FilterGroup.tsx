import { ReactNode } from "react";
import css from "./FilterGroup.module.css";

type FilterGroupProps = {
  title: string;
  children: ReactNode;
};

const FilterGroup = ({ title, children }: FilterGroupProps) => {
  return (
    <fieldset className={css.filterGroup}>
      <legend className={css.filterGroupTitle}>{title}</legend>
      <div className={css.filterGroupContent}>{children}</div>
    </fieldset>
  );
};

export default FilterGroup;
