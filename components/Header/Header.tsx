import css from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link href="/" className={css.logo} aria-label="TravelTrucks Home">
          <Icon
            name="icon-logo"
            className={css.logoIcon}
            label="logo"
            width={136}
            height={15}
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
