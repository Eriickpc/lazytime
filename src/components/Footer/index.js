import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>Lazy Time </h3>
      <p>
        &copy; Desenvolvido por <b>Erick Costa</b> 2023
      </p>
    </footer>
  );
}

export default Footer;
