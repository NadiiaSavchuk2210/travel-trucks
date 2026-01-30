import { CAMPERS_PER_PAGE } from "@/constants/constants";
import { createCampersQueryKey } from "@/helpers/queryHelpers/createCampersQueryKey";

import { fetchCampers } from "@/lib/api/api";
import { useCampersFilterStore } from "@/lib/store/campersFilterStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

//* Fetch campers
export const useFetchCampers = (page: number) => {
  const queryClient = useQueryClient();
  const filter = useCampersFilterStore((state) => state.filter);

  const {
    data: campersResponse,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: createCampersQueryKey(filter, page),
    queryFn: () => fetchCampers({ filter, page }),
    staleTime: 60_000,
    refetchOnMount: false,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const hasNextPage =
    campersResponse && page * CAMPERS_PER_PAGE < campersResponse.total;

  useEffect(() => {
    if (!hasNextPage) return;

    const nextPage = page + 1;

    queryClient.prefetchQuery({
      queryKey: createCampersQueryKey(filter, nextPage),
      queryFn: () => fetchCampers({ filter, page: nextPage }),
      staleTime: 60_000,
    });
  }, [page, filter, queryClient, hasNextPage]);

  return { campersResponse, isLoading, isSuccess, isError };
};
