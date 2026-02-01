import { Camper } from "@/types/camper";
import css from "./Features.module.css";
import { useCamperFeatures } from "@/hooks/useCamperFeatures";
import Badge from "../Badge/Badge";

interface Props {
  camper: Camper;
}

const Features = ({ camper }: Props) => {
  const badgeValues = useCamperFeatures(camper);

  return (
    <div className={css.badgesContainer}>
      {badgeValues.map((feature) => (
        <Badge
          key={feature.name}
          variant="primary"
          iconName={`icon-${feature.icon}`}
          iconLabel={feature.name}
          iconWidth={20}
          iconHeight={20}
        >
          {feature.name}
        </Badge>
      ))}
    </div>
  );
};

export default Features;
