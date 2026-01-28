"use client";

import Link from "next/link";
import css from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { isActiveRoute } from "@/helpers/stylesHelper";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
];

const Navbar = () => {
  const pathName = usePathname();

  const linkClasses = (href: string) =>
    clsx(css.navLink, isActiveRoute(pathName, href) && css.current);

  return (
    <nav className={css.navbar} aria-label="Main navigation">
      <ul className={css.navList}>
        {navLinks.map(({ href, label }) => (
          <li key={href} className={css.navItem}>
            <Link
              href={href}
              className={linkClasses(href)}
              aria-current={isActiveRoute(pathName, href) ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
