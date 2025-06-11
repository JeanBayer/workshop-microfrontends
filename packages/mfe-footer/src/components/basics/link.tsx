import { clsx } from "clsx";
import React from "react";
import styles from "./link.module.css";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "social" | "footer";
};

export const Link = ({ href, children, variant = "footer" }: LinkProps) => {
  const linkStyles = clsx(styles.link, {
    [styles.socialLink]: variant === "social",
    [styles.footerLink]: variant === "footer",
  });
  return (
    <a href={href} className={linkStyles}>
      {children}
    </a>
  );
};
