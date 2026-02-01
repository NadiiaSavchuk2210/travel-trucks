"use client";

import Reviews from "@/components/Reviews/Reviews";
import { useFetchCamper } from "@/hooks/useFetchCamper";
import { useParams } from "next/navigation";

const ReviewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { camper, isLoading, isError } = useFetchCamper(id);

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !camper) return <p>Something went wrong.</p>;

  return <Reviews camper={camper} />;
};

export default ReviewsPage;
