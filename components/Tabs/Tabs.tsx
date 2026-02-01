"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Tabs.module.css";
import clsx from "clsx";
import Booking from "../BookingForm/Booking/Booking";

const tabs = [
  { id: "features", label: "Features", href: "/features" },
  { id: "reviews", label: "Reviews", href: "/reviews" },
];

interface Props {
  camperId: string;
  children: React.ReactNode;
}

const Tabs = ({ camperId, children }: Props) => {
  const pathname = usePathname();

  return (
    <div className={css.tabsGrid}>
      <nav className={css.tabsNav} role="tablist">
        {tabs.map((tab) => {
          const href = `/catalog/${camperId}${tab.href}`;
          const isActive = pathname === href;
          return (
            <Link
              key={tab.id}
              href={href}
              className={clsx(css.tabItem, isActive && css.activeTab)}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
      <div className={css.tabsContent}>
        <div className={css.tabsContentMain}>{children}</div>
      </div>
      <aside className={css.tabsSidebar}>
        <Booking />
      </aside>
    </div>
  );
};

export default Tabs;
