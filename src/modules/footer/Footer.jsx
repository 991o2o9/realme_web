import { Link, useNavigate } from "react-router-dom";
import { navigation, path } from "../../utils/constants/Constants";
import styles from "./Footer.module.scss";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { scrollToTop } from "../../utils/helper/helper";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFooter } from "./api/footerApi";
export const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(fetchFooter());
        setFooterData(data.payload.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  function extractEmail(link) {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
    const match = link.match(emailRegex);
    return match ? match[0] : null;
  }

  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contacts}>
          <span>{footerData[0]?.title}</span>
          <span>{extractEmail(footerData[0]?.link)}</span>
          <div className={styles.iconPart}>
            <a href={footerData[0]?.instagram}>
              <FaInstagram />
            </a>
            <a href={footerData[0]?.telegram}>
              <FaTelegram />
            </a>
            <a href={footerData[0]?.whatsapp}>
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <nav>
          <h3>Навигация</h3>
          {navigation.map((item, index) => (
            <Link key={index} to={item.path} onClick={scrollToTop()}>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className={styles.logoPart}>
          <img
            onClick={() => {
              navigate(path.home);
              scrollToTop();
            }}
            src={footerData[0]?.logo}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};
