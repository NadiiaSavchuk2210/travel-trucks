import { CAMPERS_PER_PAGE, ONE_MINUTE } from "@/constants/constants";
import { createCampersQueryKey } from "@/helpers/queryHelpers/createCampersQueryKey";

import { fetchCampers } from "@/lib/api/api";
import { useCampersFilterStore } from "@/lib/store/campersFilterStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

//* Fetch campers
export const useFetchCampers = (page: number) => {
  const queryClient = useQueryClient();
  const filter = useCampersFilterStore((state) => state.filter);

  const queryKey = createCampersQueryKey(filter, page);

  const {
    data: campersResponse,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey,
    queryFn: () => fetchCampers({ filter, page }),
    staleTime: ONE_MINUTE,
    refetchOnMount: false,
    retry: 1,
    refetchOnWindowFocus: false,
    gcTime: 5 * ONE_MINUTE,
  });

  const hasNextPage =
    campersResponse && page * CAMPERS_PER_PAGE < campersResponse.total;

  useEffect(() => {
    if (!hasNextPage || isError) return;

    const nextPage = page + 1;
    const nextKey = createCampersQueryKey(filter, nextPage);

    queryClient.prefetchQuery({
      queryKey: nextKey,
      queryFn: () => fetchCampers({ filter, page: nextPage }),
      staleTime: ONE_MINUTE,
    });
  }, [page, filter, hasNextPage, isError, queryClient]);

  return { campersResponse, isLoading, isSuccess, isError };
};
