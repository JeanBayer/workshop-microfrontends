import { navigateToUrl } from "single-spa";
import styles from "./nav-list.module.css";

type NavListProps = {
  navItems: {
    name: string;
    url: string;
  }[];
};

export const NavList = ({ navItems }: NavListProps) => {
  const handleNavigation = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToUrl(url);
  };
  return (
    <ul className={styles.navLinks}>
      {navItems?.map((item) => (
        <li key={item.name}>
          <a href={item.url} onClick={handleNavigation(item.url)}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
