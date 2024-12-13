import styles from "./HeroBlock.module.scss";
export const HeroBlock = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.mainInfo}>
        <div className={styles.content}>
          <h1>Realme 10 Pro+ 5G </h1>
          <h3>Curved Display, New Vision</h3>
          <span>120Hz Curved Vision display | 108MP Pro light Camera</span>
        </div>
        <div className={styles.btnArea}>
          <button>Посмотреть товары</button>
        </div>
      </div>
    </section>
  );
};
