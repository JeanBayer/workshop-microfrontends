import { Actions } from "@components/action/actions";
import { useGSAP } from "@hooks/useGSAP";
import { useRef } from "react";
import styles from "./hero-content.module.css";
import { HeroContentAnimation } from "./hero.animation";

type HeroContentProps = {
  title: string;
  description: string;
};

export const HeroContent = ({ title, description }: HeroContentProps) => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      HeroContentAnimation.title();
    },
    { scope: container, dependencies: [title, description] }
  );

  return (
    <div className={styles.heroContent} ref={container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <Actions />
    </div>
  );
};
