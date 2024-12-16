import { useNavigate } from "react-router-dom";
import { path } from "../../../utils/constants/Constants";
import styles from "./HeroBlock.module.scss";
import { scrollToTop } from "../../../utils/helper/helper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBanner } from "./api";
import Loader from "../../../ui/Loading/Loader";
export const HeroBlock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(getBanner());
        setBanner(data.payload.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  if (!banner) return <Loader />;

  return (
    <section
      className={styles.hero}
      style={{
        "--hero-background": `url(${banner[0]?.image})`,
      }}
    >
      <div className={styles.mainInfo}>
        <div className={styles.content}>
          <h1>{banner[0]?.title}</h1>
          <h3>{banner[0]?.description}</h3>
          <span>{banner[0]?.description_litle}</span>
        </div>
        <div className={styles.btnArea}>
          <button
            onClick={() => {
              navigate(path.productPage);
              scrollToTop();
            }}
          >
            Посмотреть товары
          </button>
        </div>
      </div>
    </section>
  );
};
