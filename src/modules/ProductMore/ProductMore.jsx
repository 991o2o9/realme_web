import { useParams } from "react-router-dom";
import { Container } from "../../ui/container/Container";
import styles from "./ProductMore.module.scss";
import { useState } from "react";

export const ProductMore = () => {
  const { id } = useParams();
  const data = [
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
      id: 1,
    },
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
      id: 2,
    },
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
      id: 3,
    },
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
      id: 4,
    },
  ];
  const oneData = data.find((shit) => shit.id === parseInt(id));
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <Container>
      <div className={styles.moreSection}>
        <div className={styles.heading}>
          <h2>О товаре</h2>
        </div>
        <div className={styles.productItself}>
          <div className={styles.imgSection}>
            <img src={oneData.img} alt="" />
          </div>
          <div className={styles.contentSection}>
            <div className={styles.text}>
              <h3>{oneData.title}</h3>
              <h4>{oneData.desc}</h4>
              <h5>{oneData.price} сом</h5>
            </div>
            <div className={styles.counter}>
              <button onClick={decrement} className={styles.button}>
                -
              </button>
              <span className={styles.count}>{count}</span>
              <button onClick={increment} className={styles.button}>
                +
              </button>
            </div>
            <div className={styles.btnArea}>
              <button>Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
