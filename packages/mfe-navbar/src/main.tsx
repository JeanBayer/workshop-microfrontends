import { Action } from "@components/action/action";
import { Logo } from "@components/logo/logo";
import { NavList } from "@components/navigation/nav-list";
import { NAV_ITEMS } from "@constants/nav-items";
import { useIsScrolled } from "@hooks/useIsScrolled";
import styles from "./main.module.css";

export function Navbar() {
  const isScrolled = useIsScrolled();

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navLeft}>
        <Logo />
        <NavList navItems={NAV_ITEMS} />
      </div>
      <div className={styles.navRight}>
        <Action />
      </div>
    </nav>
  );
}
