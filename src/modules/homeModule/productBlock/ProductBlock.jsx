import { Container } from "../../../ui/container/Container";
import styles from "./ProductBlock.module.scss";
import phone from "../../../assets/phone.png";
import tv from "../../../assets/tv.png";
import laptop from "../../../assets/laptop.png";
import watch from "../../../assets/watch.png";
export const ProductBlock = () => {
  const data = [
    {
      img: phone,
      title: "Телефоны",
    },
    {
      img: tv,
      title: "Телевизоры",
    },
    {
      img: laptop,
      title: "Ноутбуки",
    },
    {
      img: watch,
      title: "Смарт-часы",
    },
  ];
  return (
    <Container>
      <div className={styles.productList}>
        {data.slice(0, 4).map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <div className={styles.img}>
                <img src={item.img} alt="" />
              </div>
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
