import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { navigation, path } from "../../utils/constants/Constants";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { getTrimmedEmail, scrollToTop } from "../../utils/helper/helper";
import { useSelector } from "react-redux";
export const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

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
        <Link to={path.order}>
          <div
            style={{ display: "flex", gap: "10px", position: "relative" }}
            className={styles.cartSection}
          >
            <FaShoppingCart
              style={{
                color: cartItems.length > 0 ? "#ffca00" : "",
              }}
              className={styles.cartIcon}
            />
            {cartItems.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  left: "35px",
                  bottom: "20px",
                  fontSize: "15px",
                  color: "#fff",
                  backgroundColor: "red",
                  width: "20px",
                  height: "20px",
                  textAlign: "center",
                  borderRadius: "50%",
                }}
              >
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};
