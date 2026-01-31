import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "modern-normalize";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { HOME_PAGE_URL, OG_IMAGE_URL, SITE_NAME } from "@/constants/constants";
import Toast from "@/components/Toast/Toast";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TravelTrucks - Camper Rental Service",
    template: "%s | TravelTrucks",
  },
  description:
    "TravelTrucks is a camper rental platform where you can explore, filter, and book modern campers. Browse our catalog, read reviews, and reserve your perfect travel vehicle in minutes.",
  keywords: [
    "camper rental",
    "motorhome rental",
    "van rental",
    "RV booking",
    "TravelTrucks",
    "rent camper online",
    "camping van rental",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(HOME_PAGE_URL),
  openGraph: {
    title: "TravelTrucks - Camper Rental Service",
    description:
      "Find and book the perfect camper for your next adventure. Filter by location, features, and price. View camper details, reviews, and book online.",
    url: HOME_PAGE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "TravelTrucks Camper Rental Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelTrucks - Camper Rental Service",
    description:
      "Explore and book modern campers for your trips. View camper details, reviews, and book online with TravelTrucks.",
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icons/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <Toast />
        </TanStackProvider>
      </body>
    </html>
  );
}
