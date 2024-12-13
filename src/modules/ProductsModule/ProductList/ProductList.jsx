import { Container } from "../../../ui/container/Container";
import { ProductCard } from "../../../ui/productCard/ProductCard";
import styles from "./ProductList.module.scss";

export const ProductList = () => {
  const data = [
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
    },
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
    },
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
    },
    {
      img: "https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg",
      title: "Realme C33",
      desc: "50MP Sejutaan Terjangkau",
      price: " 22400",
    },
  ];
  return (
    <div className={styles.productSection}>
      <section className={styles.prodHero}>
        <Container>
          <h2>Товары</h2>
          <span>{`11 :общее количество товаров`}</span>
        </Container>
      </section>
      <Container>
        <div className={styles.productList}>
          {data.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};
