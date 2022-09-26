import styles from "./index.module.scss";
import { DollarSvg } from "../DollarSvg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <DollarSvg />
        <div className={styles.title}>
          <a href="https://github.com/manol1/ID-Finance/" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
