import styles from "./Header.module.css";
import ignitelogo from "../../assets/Ignite-logo.svg";

export function Header() {
  return (
    <div>
      
      <header className={styles.header}>
      <img src={ignitelogo} alt="logotipo do ignite" />
        </header>
    </div>
  );
}
