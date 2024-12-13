import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { navigation, path } from "../../utils/constants/Constants";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { getTrimmedEmail, scrollToTop } from "../../utils/helper/helper";
export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logoPart}>
        <div className={styles.logo}>
          <img
            onClick={() => {
              navigate(path.home);
              scrollToTop();
            }}
            src={logo}
            alt=""
          />
        </div>
        <nav>
          {navigation.map((item, index) => (
            <Link className={styles.text} key={index} to={item.path}>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.authPart}>
        <div onClick={() => navigate(path.login)} className={styles.authItself}>
          <IoPersonCircle className={styles.authIcon} />
          <span>{getTrimmedEmail("amin@gmail.com")}</span>
        </div>
        <FaShoppingCart className={styles.cartIcon} />
      </div>
    </header>
  );
};
