import { ONE_MINUTE } from "@/constants/constants";
import { fetchCamperById } from "@/lib/api/api";
import { useQuery } from "@tanstack/react-query";

//* Fetch camper
export const useFetchCamper = (id: string) => {
  const {
    data: camper,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => fetchCamperById(id),
    staleTime: ONE_MINUTE,
    refetchOnMount: false,
    retry: 1,
    refetchOnWindowFocus: false,
  });
  return { camper, isLoading, isSuccess, isError };
};
