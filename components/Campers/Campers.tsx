"use client";

import { useCampersFilterStore } from "@/lib/store/campersFilterStore";
import { useFetchCampers } from "@/hooks/useCampers";
import CatalogList from "../CampersList/CampersList";
import Loading from "@/app/loading";
import { CAMPERS_PER_PAGE } from "@/constants/constants";

const Campers = () => {
  const page = useCampersFilterStore((state) => state.page);
  const nextPage = useCampersFilterStore((state) => state.nextPage);
  const prevPage = useCampersFilterStore((state) => state.prevPage);

  const { campersResponse, isLoading } = useFetchCampers(page);
  const totalCampers = campersResponse?.total ?? 0;
  const totalPages = Math.ceil(totalCampers / CAMPERS_PER_PAGE);

  const onLoadMore = () => nextPage();

  return (
    <div>
      <p>Campers</p>

      {isLoading && <Loading />}

      <button type="button" onClick={onLoadMore}>
        {page} Load More
      </button>
      <p>
        -------------page:-{page}, ---- totalPages - {totalPages}
      </p>
      <button type="button" onClick={prevPage}>
        {page} Before
      </button>

      <CatalogList />
    </div>
  );
};

export default Campers;
