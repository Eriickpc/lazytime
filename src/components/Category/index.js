import styles from "./Category.module.css";
import videos from "../../json/videos.json";

export const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
];

export function filterCategory(i) {
  return videos.filter((videos) => videos.category === categories[i]);
}

function Category({ category, children }) {
  return (
    <section className={styles.category}>
      <h2>{category}</h2>
      <div>{children}</div>
    </section>
  );
}

export default Category;
