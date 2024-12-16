import style from "./loading.module.scss";

const Loader = () => {
  return (
    <div className={style.loaderForWebSite}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Loader;
