"use client";

import { useFetchCamper } from "@/hooks/useFetchCamper";
import { useParams } from "next/navigation";

const CamperDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const { camper, isLoading } = useFetchCamper(id);

  return <h1>{id}</h1>;
};

export default CamperDetailsClient;
