"use client";

import { useCampersFilterStore } from "@/lib/store/campersFilterStore";

import CampersList from "../CampersList/CampersList";
import css from "./Campers.module.css";
import Button from "../Button/Button";
import { useCampersStore } from "@/lib/store/campersStrore";
import { useEffect } from "react";
import { buildFilterParams } from "@/helpers/queryHelpers/buildFilterParams";
import { CAMPERS_PER_PAGE } from "@/constants/constants";
import { buildQueryString } from "@/helpers/queryHelpers/buildQueryString";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useFetchCampers } from "@/hooks/useFetchCampers";

const Campers = () => {
  const router = useRouter();
  const { filter, page, nextPage } = useCampersFilterStore();
  const {
    setCampers,
    appendCampers,
    campers: campersStored,
  } = useCampersStore();
  const { campersResponse, isLoading, isError } = useFetchCampers(page);

  const campers = campersResponse?.items;
  const totalCampers = campersResponse?.total ?? 1;
  const totalPages = Math.ceil(totalCampers / CAMPERS_PER_PAGE);

  const onLoadMore = () => nextPage();

  useEffect(() => {
    const params = buildFilterParams(filter, page, CAMPERS_PER_PAGE);
    const queryString = buildQueryString(params);
    const nextUrl = queryString ? `?${queryString}` : "?";

    router.replace(nextUrl, { scroll: false });
  }, [filter, page, router]);

  useEffect(() => {
    if (!campers) {
      return;
    }

    if (page === 1) {
      setCampers(campers);
    } else {
      appendCampers(campers);
    }
  }, [campers, page, appendCampers, setCampers]);

  useEffect(() => {
    if (isError && !campers?.length) {
      toast.error("No campers found for your selected filters.");
      return;
    }
  }, [campers?.length, isError]);

  useEffect(() => {
    if (page === 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  return (
    <>
      <CampersList campers={campersStored} />
      {page < totalPages && (
        <Button
          as="button"
          type="button"
          variant="outline"
          className={css.loadMoreBtn}
          onClick={onLoadMore}
          disabled={isLoading}
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default Campers;
