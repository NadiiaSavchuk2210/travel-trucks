import css from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link href="/" className={css.logo} aria-label="TravelTrucks Home">
          <svg className={css.logoIcon} width={136} height={15}>
            <use href="/icons/sprite.svg#logo-icon" />
          </svg>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
