import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../ui/container/Container";
import { ProductCard } from "../../../ui/productCard/ProductCard";
import styles from "./DetailedProduct.module.scss";
import { useEffect } from "react";
import { fetchProducts } from "../../ProductsModule/Api/ProductApi";
export const DetailedProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <Container>
      <div className={styles.contentArea}>
        <div className={styles.textArea}>
          <div className={styles.textItself}>
            <h2>Широкий ассортимент</h2>
            <h3>Качество, которое вы цените</h3>
          </div>
        </div>
        <div className={styles.productList}>
          {products.slice(0, 4).map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};
