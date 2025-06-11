import { Column } from "@components/basics/column";
import { Link } from "@type/link";
import styles from "./info-section.module.css";

type InfoSectionProps = {
  columns: Link[][];
};

export const InfoSection = ({ columns }: InfoSectionProps) => {
  return (
    <div className={styles.footerLinks}>
      {columns?.map((column, index) => <Column key={index} links={column} />)}
    </div>
  );
};
