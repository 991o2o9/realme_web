import { useDispatch } from "react-redux";
import { Container } from "../../../ui/container/Container";
import { ProductCard } from "../../../ui/productCard/ProductCard";
import styles from "./DetailedProduct.module.scss";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../ProductsModule/Api/ProductApi";

export const DetailedProduct = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const resp = await dispatch(getAllProducts(1));
      setProducts(resp.payload.results);
    };
    fetch();
  }, [dispatch]);

  return (
    <Container>
      <div className={styles.contentArea}>
        <div className={styles.textArea}>
          <div className={styles.textItself}>
            <h2>Широкий ассортимент</h2>
            <h3>Качество, которое вы цените</h3>
          </div>
        </div>
        {!products.length == 0 ? (
          <div className={styles.productList}>
            {products.slice(0, 4).map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        ) : (
          <div className={styles.noData}>
            <h2 style={{ fontSize: "30px" }}>Товаров нету</h2>
          </div>
        )}
      </div>
    </Container>
  );
};
