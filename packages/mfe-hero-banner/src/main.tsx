import { HeroContent } from "@components/hero/hero-content";
import { HeroImage } from "@components/hero/hero-image";
import { useHero } from "@hooks/useHero";
import styles from "./main.module.css";

export function HeroBanner() {
  const { data, isError } = useHero();

  if (isError && !data) {
    return <div className={styles.error}>Error loading hero data</div>;
  }
  if (!data) {
    return <div className={styles.error}>No hero data available</div>;
  }

  return (
    <div className={styles.heroBanner}>
      <HeroImage title={data?.title} imageUrl={data?.poster} />
      <HeroContent title={data?.title} description={data?.description} />
    </div>
  );
}
