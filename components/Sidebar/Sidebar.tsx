import FiltersLayout from "../FiltersLayout/FiltersLayout";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <div className={css.sidebarContainer}>
        <FiltersLayout />
      </div>
    </aside>
  );
};

export default Sidebar;
