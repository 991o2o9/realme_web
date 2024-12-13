import { useState } from "react";
import { Container } from "../../../ui/container/Container";
import styles from "./OrderTable.module.scss";

export const OrderTable = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  return (
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
              <th>Итоговя цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Realme 3000</td>
              <td>2000 сом</td>
              <td className={styles.counter}>
                <button onClick={decrement} className={styles.button}>
                  -
                </button>
                <span className={styles.count}>{count}</span>
                <button onClick={increment} className={styles.button}>
                  +
                </button>
              </td>
              <td>2000 сом</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};
