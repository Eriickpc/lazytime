import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import PageNotFound from "../PageNotFound";

function Watch() {
  const params = useParams();

  const video = videos.find((video) => {
    return video.id === params.id;
  });
  if (!videos) {
    return <PageNotFound />;
  }
  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <iframe
            width="650"
            height="300"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube videos player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            allowFullScreen
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;
