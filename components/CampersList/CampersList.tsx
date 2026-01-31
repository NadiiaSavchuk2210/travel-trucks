"use client";

import { Camper } from "@/types/camper";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CampersList.module.css";
import { useEffect, useRef } from "react";
import { useCampersFilterStore } from "@/lib/store/campersFilterStore";

interface Props {
  campers: Camper[];
}

const CampersList = ({ campers }: Props) => {
  const prevLengthRef = useRef(0);
  const page = useCampersFilterStore((state) => state.page);

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (page > 1 && listRef.current) {
      const firstNewIndex = prevLengthRef.current;
      const element = listRef.current.children[firstNewIndex] as HTMLElement;
      element?.scrollIntoView({ behavior: "smooth" });
    }

    prevLengthRef.current = campers.length;
  }, [campers, page]);

  return (
    <ul className={css.camperList} ref={listRef}>
      {campers.map((camper, index) => (
        <CamperCard
          key={camper.id}
          camper={camper}
          data-camper-index={index}
          cardIndex={index}
        />
      ))}
    </ul>
  );
};

export default CampersList;
