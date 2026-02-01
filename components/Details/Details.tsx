import css from "./Details.module.css";
import { Camper } from "@/types/camper";
import { useCamperDetails } from "@/hooks/useCamperDetails";

interface Props {
  camper: Camper;
}

const Details = ({ camper }: Props) => {
  const camperDetails = useCamperDetails(camper);
  return (
    <ul className={css.vehicleDetailsList}>
      {camperDetails.map((detail, index) => (
        <li key={index} className={css.vehicleDetail}>
          <span>{detail.label}</span>
          <span>{detail.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Details;
