import styles from "./index.module.scss";
import { DollarSvg } from "../DollarSvg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <DollarSvg />
        <h1 className={styles.title}>Registration</h1>
      </div>
    </header>
  );
}
