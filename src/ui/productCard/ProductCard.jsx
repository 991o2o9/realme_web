import styles from "./ProductCard.module.scss";

export const ProductCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={item.img} alt="" />
      </div>
      <div className={styles.content}>
        <h3>{item.title}</h3>
        <h4>{item.desc}</h4>
        <span>{item.price} сом</span>
      </div>
      <div className={styles.btnArea}>
        <button>Посмотреть</button>
      </div>
    </div>
  );
};
