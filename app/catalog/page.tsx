import { Metadata } from "next";
import { HOME_PAGE_URL, OG_IMAGE_URL, SITE_NAME } from "@/constants/constants";
import css from "./page.module.css";

import Campers from "@/components/Campers/Campers";

export const metadata: Metadata = {
  title: "Catalog | TravelTrucks - Camper Rental Service",
  description:
    "Browse the TravelTrucks catalog to find the perfect camper. Filter by location, type, amenities, and more.",
  openGraph: {
    title: "Catalog | TravelTrucks",
    description:
      "Browse our fleet of campers. Filter by location, type, and features to find your ideal travel vehicle.",
    url: `${HOME_PAGE_URL}/catalog`,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "TravelTrucks Camper Catalog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalog | TravelTrucks",
    description:
      "Find and filter campers to suit your travel needs. Book online quickly and easily.",
    images: [OG_IMAGE_URL],
  },
  robots: { index: true, follow: true },
};

const CatalogPage = () => {
  return (
    <section className={css.catalogSection}>
      Campers
      <Campers />
    </section>
  );
};

export default CatalogPage;
