import FiltersLayout from "../FiltersLayout/FiltersLayout";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <FiltersLayout />
    </aside>
  );
};

export default Sidebar;
