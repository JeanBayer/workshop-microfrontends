import { Info, Play } from "lucide-react";
import styles from "./actions.module.css";

export const Actions = () => {
  return (
    <div className={styles.buttons}>
      <button className={styles.playButton}>
        <Play className={styles.buttonIcon} />
        <span>Play</span>
      </button>
      <button className={styles.moreInfoButton}>
        <Info className={styles.buttonIcon} />
        <span>More Info</span>
      </button>
    </div>
  );
};
