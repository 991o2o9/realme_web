import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { Container } from "../../../ui/container/Container";
import { path } from "../../../utils/constants/Constants";
import { TbLockPassword } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { GiClick } from "react-icons/gi";
export const Login = () => {
  return (
    <Container>
      <div className={styles.loginSection}>
        <div className={styles.titlePart}>
          <h2>Войти</h2>
          <Link to={path.register}>
            <span>Регистрация</span>
            <GiClick className={styles.icon} />
          </Link>
        </div>
        <form>
          <div className={styles.inpArea}>
            <div className={styles.iconArea}>
              <MdEmail />
            </div>
            <input type="text" name="email" placeholder="Введите вашу почту*" />
          </div>
          <div className={styles.inpArea}>
            <div className={styles.iconArea}>
              <TbLockPassword />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Введите ваш пароль*"
            />
          </div>
          <div className={styles.btnArea}>
            <button>Войти</button>
          </div>
        </form>
      </div>
    </Container>
  );
};
