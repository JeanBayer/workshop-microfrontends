import { logoSVG } from "@assets/images";
import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoSVG} alt="Techschool Logo" width={100} height={80} />
    </div>
  );
};
