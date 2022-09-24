import styles from "./index.module.scss";
import { DollarSvg } from "../DollarSvg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <DollarSvg />
        <div className={styles.title}>Footer</div>
      </div>
    </footer>
  );
}
