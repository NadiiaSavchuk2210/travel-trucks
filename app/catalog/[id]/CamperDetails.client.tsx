"use client";

import { useParams } from "next/navigation";
import css from "./page.module.css";
import { useFetchCamper } from "@/hooks/useFetchCamper";
import { formatPrice } from "@/helpers/formatterHelpers/priceFormatter";
import ReviewBadge from "@/components/ReviewBadge/ReviewBadge";
import LocationBadge from "@/components/LocationBadge/LocationBadge";
import Gallery from "@/components/Gallery/Gallery";

const CamperDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const { camper, isLoading, isError } = useFetchCamper(id);

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !camper) return <p>Something went wrong.</p>;

  return (
    <section className={css.camperDetails}>
      <h1 className={css.camperTitle}>{camper.name}</h1>

      <div className={css.camperInfo}>
        <div className={css.camperReviewAndLocation}>
          <ReviewBadge reviewValue={4.4} reviewCount={2} />
          <LocationBadge locationValue={camper.location} />
        </div>
        <p className={css.camperPrice}>€{formatPrice(camper?.price)}</p>
      </div>
      <Gallery images={camper.gallery} />
      <p className={css.camperDescription}>{camper.description}</p>
    </section>
  );
};

export default CamperDetailsClient;
