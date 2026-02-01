"use client";

import Loader from "@/components/Loader/Loader";
import Reviews from "@/components/Reviews/Reviews";
import { useFetchCamper } from "@/hooks/useFetchCamper";
import { useParams } from "next/navigation";

const ReviewsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { camper, isLoading, isError } = useFetchCamper(id);

  if (isLoading) return <Loader />;
  if (isError || !camper) return <p>Something went wrong.</p>;

  return <Reviews camper={camper} />;
};

export default ReviewsPage;
