"use client";

import clsx from "clsx";
import css from "./StarRating.module.css";

interface StarRatingProps {
  rating: number;
  reviewsCount?: number;
  size?: "small" | "medium" | "large";
}

const StarRating = ({
  rating,
  reviewsCount,
  size = "medium",
}: StarRatingProps) => {
  const stars = [1, 2, 3, 4, 5];
  const sizeClasses = {
    small: "16px",
    medium: "20px",
    large: "24px",
  };

  return (
    <div className={css.starRating} style={{ fontSize: sizeClasses[size] }}>
      <div className={css.starsContainer}>
        {stars.map((star) => {
          const isFilled = star <= Math.floor(rating);
          const isHalf = star === Math.ceil(rating) && rating % 1 >= 0.5;

          return (
            <span
              key={star}
              className={clsx(css.star, {
                [css.filled]: isFilled,
                [css.half]: isHalf,
              })}
            />
          );
        })}
      </div>
      {reviewsCount !== undefined && (
        <span className={css.reviewsCount}>({reviewsCount})</span>
      )}
    </div>
  );
};

export default StarRating;
