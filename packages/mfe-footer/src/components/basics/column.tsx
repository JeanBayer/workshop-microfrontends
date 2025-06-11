import { Link } from "@components/basics/link";
import { Link as LinkType } from "@type/link";
import styles from "./column.module.css";

type ColumnProps = {
  links: LinkType[];
};

export const Column = ({ links }: ColumnProps) => {
  return (
    <div className={styles.column} data-testid="column">
      {links?.map((link) => (
        <Link key={link.name} href={link.url}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};
