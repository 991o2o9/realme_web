import styles from "./Popup.module.scss";

export const Popup = ({ message }) => {
  return (
    <div className={styles.popup}>
      <p>{message}</p>
    </div>
  );
};
