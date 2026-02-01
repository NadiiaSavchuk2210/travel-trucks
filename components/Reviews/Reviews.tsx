import { Camper } from "@/types/camper";
import css from "./Reviews.module.css";
import Review from "../Review/Review";

interface Props {
  camper: Camper;
}

const Reviews = ({ camper }: Props) => {
  return (
    <ul className={css.reviewsList}>
      {camper.reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </ul>
  );
};

export default Reviews;
