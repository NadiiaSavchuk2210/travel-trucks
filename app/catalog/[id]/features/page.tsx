"use client";

import css from "./page.module.css";
import { useFetchCamper } from "@/hooks/useFetchCamper";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import Features from "@/components/Features/Features";
import Details from "@/components/Details/Details";

export default function FeaturesPage() {
  const { id } = useParams<{ id: string }>();
  const { camper, isLoading, isError } = useFetchCamper(id);

  if (isLoading) return <Loader />;
  if (isError || !camper) return <p>Something went wrong.</p>;

  return (
    <section className={css.features}>
      <h2 className="visually-hidden">Camper features</h2>
      <div className={css.characteristics}>
        <Features camper={camper} />
      </div>
      <div className={css.vehicleDetails}>
        <h3 className={css.vehicleDetailsTitle}>Vehicle details</h3>
        <Details camper={camper} />
      </div>
    </section>
  );
}
