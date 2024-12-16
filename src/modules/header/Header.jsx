import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { navigation, path } from "../../utils/constants/Constants";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { getTrimmedEmail, scrollToTop } from "../../utils/helper/helper";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { handleLogOut } from "../AuthModule/Store/authSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem("email");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const authRef = useRef(null);

  const handleAuthClick = () => {
    if (!currentUser) {
      navigate(path.login);
    } else {
      setIsMenuVisible((prev) => !prev);
    }
  };

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        authRef.current &&
        !authRef.current.contains(event.target)
      ) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    return () => {
      setIsMenuVisible(false);
    };
  }, [navigate]);

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
      <div ref={authRef} className={styles.authPart}>
        <div className={styles.authWrapper}>
          <div onClick={handleAuthClick} className={styles.authItself}>
            <IoPersonCircle className={styles.authIcon} />
            <span>{currentUser ? getTrimmedEmail(currentUser) : "Войти"}</span>
          </div>
          {isMenuVisible && currentUser && (
            <div ref={menuRef} className={styles.menu}>
              <button
                onClick={() => {
                  dispatch(handleLogOut());
                  setIsMenuVisible(false);
                }}
                className={styles.logoutButton}
              >
                Выйти
              </button>
            </div>
          )}
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
