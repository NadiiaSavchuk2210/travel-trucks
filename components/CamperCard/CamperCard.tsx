"use client";

import Image from "next/image";
import css from "./CamperCard.module.css";
import Icon from "../Icon/Icon";
import ReviewBadge from "../ReviewBadge/ReviewBadge";
import LocationBadge from "../LocationBadge/LocationBadge";
import Button from "../Button/Button";
import { Camper } from "@/types/camper";
import { formatPrice } from "@/helpers/formatterHelpers/priceFormatter";
import { useCampersStore } from "@/lib/store/campersStrore";
import { clsx } from "clsx";
import { useEffect } from "react";
import Features from "../Features/Features";

interface Props {
  camper: Camper;
  cardIndex: number;
}

const CamperCard = ({ camper, cardIndex }: Props) => {
  const camperImg = camper.gallery[0].thumb;

  useEffect(() => {}, []);

  const { campersFavorite, toggleCamperFavorite } = useCampersStore();

  const isFavorite = campersFavorite.some((item) => item.id === camper.id);

  const handleFavoriteClick = () => {
    toggleCamperFavorite(camper);
  };

  return (
    <>
      <li className={css.card}>
        <Image
          src={camperImg}
          alt={camper.name}
          width={292}
          height={320}
          className={css.camperImage}
          loading={cardIndex === 0 ? "eager" : "lazy"}
          priority={cardIndex === 0}
          fetchPriority={cardIndex === 0 ? "high" : "auto"}
        />
        <div className={css.camperDetails}>
          <div className={css.camperDetailsHeader}>
            <h3 className={css.camperTitle}>{camper.name}</h3>
            <div className={css.camperInfo}>
              <p className={css.camperPrice}>€{formatPrice(camper.price)}</p>
              <button className={css.favoriteBtn} onClick={handleFavoriteClick}>
                <Icon
                  className={clsx(
                    css.favoriteIcon,
                    isFavorite && css.isFavorite,
                  )}
                  name="icon-heart"
                  label="favorite"
                  width={26}
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className={css.camperReviewAndLocation}>
            <ReviewBadge reviewValue={4.4} reviewCount={2} />
            <LocationBadge locationValue={camper.location} />
          </div>
          <p className={css.camperDescription}>{camper.description}</p>

          <Features camper={camper} className={css.camperFeaturesContainer} />

          <Button
            as="link"
            href={`/catalog/${camper.id}`}
            variant="primary"
            className={css.camperDetailsBtn}
            aria-label="View campers details"
          >
            Show more
          </Button>
        </div>
      </li>
    </>
  );
};

export default CamperCard;
