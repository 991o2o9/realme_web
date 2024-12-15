import styles from "./Popup.module.scss";

export const Popup = ({ message, type }) => {
  return (
    <div
      className={`${styles.popup} ${
        type === "error" ? styles.error : styles.success
      }`}
    >
      <p>{message}</p>
    </div>
  );
};
