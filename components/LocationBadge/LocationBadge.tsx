import Badge from "../Badge/Badge";
import css from "./LocationBadge.module.css";

interface Props {
  locationValue: string;
}

const LocationBadge = ({ locationValue }: Props) => {
  return (
    <Badge
      variant="secondary"
      iconName="icon-location"
      iconLabel="location"
      iconWidth={16}
      iconHeight={16}
      iconClassName={css.locationIcon}
      badgeClassName={css.location}
      textClassName={css.locationText}
    >
      {locationValue}
    </Badge>
  );
};

export default LocationBadge;
