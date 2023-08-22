import styles from "./VideosList.module.css";
import Card from "../Card";

function videosList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const txt = count > 1 ? "vídeos" : "vídeo";
    heading = `${count} ${txt}`;
  }

  return (
    <>
      <h2>{heading}</h2>
      <section className={styles.videoslist}>
        {videos.map((videos) => (
          <Card id={videos.id} key={videos.id} />
        ))}
      </section>
    </>
  );
}

export default videosList;
