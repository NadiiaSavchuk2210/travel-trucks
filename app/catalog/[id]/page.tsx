import { HOME_PAGE_URL, OG_IMAGE_URL, SITE_NAME } from "@/constants/constants";
import { fetchCamperById } from "@/lib/api/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import CamperDetailsClient from "./CamperDetails.client";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const camper = await fetchCamperById(id);

  if (!camper) notFound();

  const title = `${camper.name} | Camper Rental in ${camper.location} | TravelTrucks`;

  const description = `Rent ${camper.name} in ${camper.location} for €${camper.price}/day. ${
    camper.form
  } camper with ${camper.transmission} transmission, ${camper.engine} engine${
    camper.AC ? ", air conditioning" : ""
  }. View features, reviews, and book online with TravelTrucks.`;

  const mainImage = camper.gallery?.[0]?.thumb || OG_IMAGE_URL;

  return {
    title,
    description,
    keywords: [
      camper.name,
      `${camper.form} camper`,
      "camper rental",
      "motorhome rental",
      "rent camper",
      camper.location,
      camper.transmission,
      camper.engine,
      "TravelTrucks",
    ],
    openGraph: {
      title,
      description,
      url: `${HOME_PAGE_URL}/catalog/${camper.id}`,
      siteName: SITE_NAME,
      images: [
        {
          url: mainImage,
          width: 1200,
          height: 630,
          alt: `${camper.name} camper`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [mainImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const CamperDetails = async ({ params }: Props) => {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => fetchCamperById(id),
  });

  redirect(`/catalog/${id}/features`);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />
    </HydrationBoundary>
  );
};

export default CamperDetails;
