import { InfoSection } from "@components/footer/info-section";
import { SocialSection } from "@components/footer/social-section";
import { PARAMS } from "@constants/params";
import styles from "./main.module.css";

export function Main() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <SocialSection links={PARAMS.INFO.SOCIAL} />
        <InfoSection columns={PARAMS.INFO.INFO} />
        <div className={styles.copyright}>{PARAMS.INFO.COPYRIGHT}</div>
      </div>
    </footer>
  );
}
