import styles from "./PageNotFound.module.css";
import error from "./error.jpeg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function PageNotFound() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <img src={error} alt="" />
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
