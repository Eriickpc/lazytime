import styles from "./DivCards.module.css";


function DivCards({ children }) {
  return <section className={styles.divcards}>{children}</section>;
}

export default DivCards;
