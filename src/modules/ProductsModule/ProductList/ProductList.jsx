import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../ui/container/Container";
import { ProductCard } from "../../../ui/productCard/ProductCard";
import styles from "./ProductList.module.scss";
import { useEffect } from "react";
import { fetchProducts } from "../Api/ProductApi";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div className={styles.productSection}>
      <section className={styles.prodHero}>
        <Container>
          <h2>Товары</h2>
          <span>{`${products.length} :общее количество товаров`}</span>
        </Container>
      </section>
      <Container>
        <div className={styles.productList}>
          {products.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};
