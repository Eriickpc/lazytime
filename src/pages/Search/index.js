import styles from "./Search.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import videos from "../../json/videos.json";
import SearchVideosList from "../../components/SearchVideosList";
import Banner from "../../components/Banner";

function Search() {
  return (
    <>
      <Header />
      <Banner image="Home"></Banner>
      <Container>
        <h2>Pesquisar: </h2>
        <SearchVideosList videos={videos} />
        <section className={styles.search}></section>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
