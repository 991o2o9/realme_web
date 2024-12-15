import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../../ui/container/Container";
import { path } from "../../../utils/constants/Constants";
import { TbLockPassword } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Popup } from "../../../ui/PopUpMessage/Popup";
import { handleLogin } from "../Api/AuthApi";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = ({ target: { name, value } }) =>
    setFormData((prevData) => ({ ...prevData, [name]: value }));

  const showPopup = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setTimeout(() => setPopupMessage(""), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      showPopup("Заполните все поля!", "error");
      return;
    }

    try {
      const result = await dispatch(
        handleLogin({
          formData: {
            email: formData.email,
            password: formData.password,
          },
          email: formData.email,
        })
      );

      if (result.error) {
        throw new Error(result.error.message || "Не удалось войти");
      }

      showPopup("Вход выполнен успешно!", "success");
      navigate(path.home);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Ошибка, попробуйте позже!";
      showPopup(errorMessage, "error");
    }
  };

  return (
    <Container>
      {popupMessage && <Popup message={popupMessage} type={popupType} />}
      <div className={styles.loginSection}>
        <div className={styles.titlePart}>
          <h2>Войти</h2>
          <Link to={path.register}>
            <span>Регистрация</span>
            <GiClick className={styles.icon} />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inpArea}>
            <div className={styles.iconArea}>
              <MdEmail />
            </div>
            <input
              type="text"
              name="email"
              placeholder="Введите вашу почту*"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inpArea}>
            <div className={styles.iconArea}>
              <TbLockPassword />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Введите ваш пароль*"
              value={formData.password}
              onChange={handleInputChange}
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
