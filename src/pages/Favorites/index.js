import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Favorites.module.css";

function Favorites() {
  return (
    <section className={styles.favorites}>
      <Header />
      <Banner image="favoritos" />
      <Container></Container>
      <Footer />
    </section>
  );
}

export default Favorites;
