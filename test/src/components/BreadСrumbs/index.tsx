import styles from "./index.module.scss";
import { useAppSelector } from "../../hook/redux";

export function BreadСrumbs() {
  const { step } = useAppSelector((state) => state.step);
  const text = `...SignUpInfo/${step === 2 ? "PersonalInfo" : ""}`;

  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
