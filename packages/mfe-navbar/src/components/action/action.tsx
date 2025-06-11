import { Bell, Search, User } from "lucide-react";
import styles from "./action.module.css";

export const Action = () => {
  return (
    <>
      <Search className={styles.icon} aria-label="search" />
      <Bell className={styles.icon} aria-label="notifications" />
      <div className={styles.profile}>
        <User className={styles.icon} aria-label="profile" />
      </div>
    </>
  );
};
