import Badge from "../Badge/Badge";
import css from "./ReviewBadge.module.css";

interface Props {
  reviewValue: number;
  reviewCount: number;
}

const ReviewBadge = ({ reviewValue, reviewCount }: Props) => {
  return (
    <Badge
      variant="secondary"
      iconName="icon-star"
      iconLabel="Review"
      iconWidth={16}
      iconHeight={16}
      badgeClassName={css.review}
      textClassName={css.reviewInfo}
      iconClassName={css.reviewIcon}
    >
      {reviewValue}({reviewCount} Reviews)
    </Badge>
  );
};

export default ReviewBadge;
