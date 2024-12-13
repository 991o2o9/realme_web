import style from "./Container.module.scss";
export const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
