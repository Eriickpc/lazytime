import styles from "./Banner.module.css";

function Banner({ image, children }) {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url('images/banner-${image}.png')`,
      }}
    >
      {children}
    </div>
  );
}

export default Banner;
