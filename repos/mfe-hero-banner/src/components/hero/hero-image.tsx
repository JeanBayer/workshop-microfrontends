import { useIsScrolled } from "@hooks/useIsScrolled";
import styles from "./hero-image.module.css";

type HeroImageProps = {
  title: string;
  imageUrl: string;
};

export const HeroImage = ({ title, imageUrl }: HeroImageProps) => {
  const isScrolled = useIsScrolled();
  return (
    <div className={styles.heroImage}>
      <img src={imageUrl || "/placeholder.svg"} alt={title} />
      <div
        className={`${styles.vignette}`}
        data-testid="hero-image-vignette"
        data-is-scrolled={isScrolled}
      ></div>
    </div>
  );
};
