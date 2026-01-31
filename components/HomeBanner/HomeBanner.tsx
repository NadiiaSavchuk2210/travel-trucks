import Image from "next/image";
import css from "./HomeBanner.module.css";
import Button from "../Button/Button";

const HomeBanner = () => {
  return (
    <section className={css.hero} aria-label="Home page hero banner">
      <Image
        src="/images/banner/banner.jpg"
        alt="Campers hero banner"
        fill
        priority
        loading="eager"
        sizes="100vw"
        className={css.heroImage}
        fetchPriority="high"
      />

      <div className={css.heroContainer}>
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <p className={css.heroText}>
            You can find everything you want in our catalog
          </p>
          <Button
            as="link"
            href="/catalog"
            variant="primary"
            className={css.heroButton}
            aria-label="View available campers in catalog"
          >
            View now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
