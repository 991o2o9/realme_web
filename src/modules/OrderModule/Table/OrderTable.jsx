import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../ui/container/Container";
import { decrementQuantity, incrementQuantity } from "../store/cartSlice";
import styles from "./OrderTable.module.scss";
import { useState } from "react";
import { Popup } from "../../../ui/PopUpMessage/Popup";
import { submitOrder } from "../store/createOrder";

export const OrderTable = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const dispatch = useDispatch();

  const showPopup = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setTimeout(() => setPopupMessage(""), 3000);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    const order = {
      items: cartItems.map((item) => ({
        product: {
          title: item.title,
          description: item.description,
          image: item.img,
          price: item.price,
        },
        quantity: item.quantity,
      })),
    };

    dispatch(submitOrder(order))
      .unwrap()
      .then(() => {
        showPopup("Ваш заказ успешно отправлен!", "success");
      })
      .catch((error) => {
        showPopup("Ошибка при отправке заказа", "error");
        console.error(error);
      });
  };

  return (
    <div className={styles.orderPage}>
      <section className={styles.prodHero}>
        <Container>
          <h2>Корзина</h2>
          <span>{`${cartItems.length} :общее количество товаров`}</span>
        </Container>
      </section>
      <Container>
        <div className={styles.orderSection}>
          <div className={styles.heading}>
            <h2>Ваши заказы</h2>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Итоговая цена</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <h2 className={styles.title}>{item.title}</h2>
                  </td>
                  <td>
                    <h2 className={styles.price}>{item.price} сом</h2>
                  </td>
                  <td>
                    <div className={styles.counter}>
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className={styles.button}
                      >
                        -
                      </button>
                      <span className={styles.count}>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className={styles.button}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <h2 className={styles.finalPrice}>
                      {item.price * item.quantity} сом
                    </h2>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              padding: "15px 100px",
              backgroundColor: "#fff",
              marginBottom: "30px",
            }}
            className={styles.totNum}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "20px" }}
              className={styles.content}
            >
              <h2>В итоге: {totalAmount} сом </h2>
              <button className={styles.btn} onClick={handleOrder}>
                Заказать
              </button>
            </div>
          </div>
        </div>
        {popupMessage && <Popup message={popupMessage} type={popupType} />}
      </Container>
    </div>
  );
};
