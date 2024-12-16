import { useParams } from "react-router-dom";
import { Container } from "../../ui/container/Container";
import styles from "./ProductMore.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../OrderModule/store/cartSlice";
import { Popup } from "../../ui/PopUpMessage/Popup";
import { getOneProd } from "../ProductsModule/Api/ProductApi";
import Loader from "../../ui/Loading/Loader";

export const ProductMore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const [count, setCount] = useState(1);
  const [oneProduct, setOneProduct] = useState(null);

  const showPopup = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setTimeout(() => setPopupMessage(""), 3000);
  };

  useEffect(() => {
    const fetchNews = async () => {
      const news = await dispatch(getOneProd(id));
      setOneProduct(news.payload);
    };

    fetchNews();
  }, [id, dispatch]);

  if (!oneProduct) return <Loader />;

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  const handleOrder = () => {
    const existingItem = cartItems[0];

    if (existingItem) {
      if (existingItem.id !== oneProduct.id) {
        showPopup("Больше одного товара нельзя", "error");
        return;
      }
    }

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
    showPopup("Товар доавлен в корзину", "success");
  };

  return (
    <Container>
      {popupMessage && <Popup message={popupMessage} type={popupType} />}
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
              <button onClick={handleOrder}>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
