import { Actions } from "@components/action/actions";
import styles from "./hero-content.module.css";

type HeroContentProps = {
  title: string;
  description: string;
};

export const HeroContent = ({ title, description }: HeroContentProps) => {
  return (
    <div className={styles.heroContent}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <Actions />
    </div>
  );
};
