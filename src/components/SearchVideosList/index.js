import { useState } from "react";
import styles from "./SearchVideosList.module.css";
import VideosList from "../VideosList";

function filterVideos(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
}

function SearchVideosList({ videos }) {
  const [searchText, setSearchText] = useState();
  const foundVideos = filterVideos(videos, searchText);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar"
        value={searchText}
        onChange={(evt) => {
          setSearchText(evt.target.value);
        }}
      />

      <VideosList
        videos={foundVideos}
        emptyHeading={`Sem videos sobre "${searchText}"`}
      />
    </section>
  );
}

export default SearchVideosList;
