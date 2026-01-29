import { LocationIcon } from "../FilterIcons/FilterIcons";
import { TextInput } from "../TextInput/TextInput";
import css from "./Location.module.css";

const Location = () => {
  return (
    <section className={css.location}>
      <h2 className="visually-hidden">Location</h2>
      <TextInput
        id="location"
        label="Location"
        placeholder="Enter location"
        icon={LocationIcon}
        iconPosition="left"
      />
    </section>
  );
};

export default Location;
