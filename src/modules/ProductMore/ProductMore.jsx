import { useParams } from "react-router-dom";
import { Container } from "../../ui/container/Container";
import styles from "./ProductMore.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../OrderModule/store/cartSlice";
import { Popup } from "../../ui/PopUpMessage/Popup";
import { fetchProducts } from "../ProductsModule/Api/ProductApi";

export const ProductMore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [id, dispatch]);

  const oneProduct = products.find((item) => item.id === parseInt(id));

  if (!oneProduct) {
    return <div>Загрузка...</div>;
  }

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  const handleOrder = () => {
    dispatch(
      addToCart({
        id: oneProduct.id,
        title: oneProduct.title,
        price: oneProduct.price,
        img: oneProduct.img || oneProduct.image,
        quantity: count,
        description: oneProduct.description,
      })
    );
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <Container>
      <div className={styles.moreSection}>
        <div className={styles.heading}>
          <h2>О товаре</h2>
        </div>
        <div className={styles.productItself}>
          <div className={styles.imgSection}>
            <img src={oneProduct.image} alt={oneProduct.title} />
          </div>
          <div className={styles.contentSection}>
            <div className={styles.text}>
              <h3>{oneProduct.title}</h3>
              <h4>{oneProduct.desc}</h4>
              <h5>{oneProduct.price} сом</h5>
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
              <button onClick={handleOrder}>Заказать</button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <Popup message="Товар добавлен в корзину!" />}
    </Container>
  );
};
