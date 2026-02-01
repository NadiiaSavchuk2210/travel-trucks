"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Tabs.module.css";
import BookingForm from "../BookingForm/BookingForm";
import clsx from "clsx";

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
      <main className={css.tabsContent}>
        <div className={css.tabsContentMain}>{children}</div>
      </main>
      <aside className={css.tabsSidebar}>
        <BookingForm camperId="3" />
      </aside>
    </div>
  );
};

export default Tabs;
