import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { scrollToTop } from "../../utils/helper/helper";

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();
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
        <button
          onClick={() => {
            navigate(`/product-list/${item.id}`);
            scrollToTop();
          }}
        >
          Посмотреть
        </button>
      </div>
    </div>
  );
};
