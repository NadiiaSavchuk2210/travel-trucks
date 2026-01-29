import { ReactNode } from "react";
import css from "./layout-catalog.module.css";

interface CatalogLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

const CatalogLayout = ({ children, sidebar }: CatalogLayoutProps) => {
  return (
    <div className={`${css.pageLayout} ${css.withSidebar}`}>
      {sidebar}
      <section className={css.content}>{children}</section>
    </div>
  );
};

export default CatalogLayout;
