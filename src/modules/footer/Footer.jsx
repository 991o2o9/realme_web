import { Link, useNavigate } from "react-router-dom";
import { navigation, path } from "../../utils/constants/Constants";
import styles from "./Footer.module.scss";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { scrollToTop } from "../../utils/helper/helper";
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contacts}>
          <span>Hubungi Kami</span>
          <span>service.id@realme.com</span>
          <div className={styles.iconPart}>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaTelegram />
            </a>
            <a href="">
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
            src={logo}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};
