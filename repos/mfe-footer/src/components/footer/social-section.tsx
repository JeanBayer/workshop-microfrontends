import { Link } from "@components/basics/link";
import { Link as LinkType } from "@type/link";
import styles from "./social-section.module.css";

type SocialSectionProps = {
  links: LinkType[];
};

export const SocialSection = ({ links }: SocialSectionProps) => {
  return (
    <div className={styles.socialLinks}>
      {links?.map((link) => (
        <Link key={link?.name} href={link?.url} variant="social">
          {link?.name}
        </Link>
      ))}
    </div>
  );
};
