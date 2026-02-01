import type { Metadata } from "next";
import css from "./not-found.module.css";
import Link from "next/link";
import { HOME_PAGE_URL, SITE_NAME } from "@/constants/constants";

export const metadata: Metadata = {
  title: "Page Not Found | Campers Site",
  description:
    "Oops! The page you're looking for doesn't exist. Return to the home page to explore campers and adventures.",
  openGraph: {
    title: "404 — Page Not Found | Campers Site",
    description:
      "The page you tried to visit doesn't exist. Go back to the home page and continue exploring campers and adventures!",
    url: `${HOME_PAGE_URL}/404`,
    siteName: SITE_NAME,
  },
};

const NotFound = () => {
  return (
    <section className={`${css.container} ${css.notFound}`}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.description}>
        Oops! The page you are looking for doesn`t exist. But don`t worry, your
        next camper adventure awaits.
      </p>
      <Link href="/" className={css.homeLink}>
        ← Go back to Home
      </Link>
    </section>
  );
};

export default NotFound;
