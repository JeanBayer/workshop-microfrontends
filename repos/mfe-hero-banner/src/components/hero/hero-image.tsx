import { useGSAP } from "@hooks/useGSAP";
import { useIsScrolled } from "@hooks/useIsScrolled";
import { useRef } from "react";
import styles from "./hero-image.module.css";
import { HeroContentAnimation } from "./hero.animation";

type HeroImageProps = {
  title: string;
  imageUrl: string;
};

export const HeroImage = ({ title, imageUrl }: HeroImageProps) => {
  const isScrolled = useIsScrolled();
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      HeroContentAnimation.image();
    },
    { scope: container }
  );

  return (
    <div className={styles.heroImage} ref={container}>
      <img src={imageUrl || "/placeholder.svg"} alt={title} id="hero-image" />
      <div
        className={`${styles.vignette}`}
        data-testid="hero-image-vignette"
        data-is-scrolled={isScrolled}
      ></div>
    </div>
  );
};
