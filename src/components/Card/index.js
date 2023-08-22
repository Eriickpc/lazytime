import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ id }) {
  return (
    <section className={styles.card}>
      <Link
        to={`/watch/${id}`}
        href={`https://www.youtube.com/watch?v=${id}`}
        rel="noreferrer"
      >
        <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="" />
        <h3>titulo</h3>
      </Link>
    </section>
  );
}

export default Card;
