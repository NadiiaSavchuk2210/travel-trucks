import { ReviewItem } from "@/types/camper";
import css from "./Review.module.css";
import StarRating from "../StarRating/StarRating";
import { getInitial } from "@/helpers/formatterHelpers/nameFormatter";

interface Props {
  review: ReviewItem;
}

const Review = ({ review }: Props) => {
  return (
    <li className={css.reviewCard}>
      <div className={css.reviewHeader}>
        <div className={css.avatar}>{getInitial(review.reviewer_name)}</div>
        <div className={css.reviewRatingContainer}>
          <h3 className={css.reviewerName}>{review.reviewer_name}</h3>
          <StarRating rating={review.reviewer_rating} size="small" />
        </div>
      </div>
      <p className={css.reviewText}>{review.comment}</p>
    </li>
  );
};

export default Review;
