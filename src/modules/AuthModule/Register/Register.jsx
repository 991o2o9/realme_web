import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import { Container } from "../../../ui/container/Container";
import { path } from "../../../utils/constants/Constants";
import { TbLockPassword } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { ActivationCode } from "../ActivationCode/ActivationCode";

import { handleRegister } from "../Api/AuthApi";
import { Popup } from "../../../ui/PopUpMessage/Popup";

export const Register = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const showPopup = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setTimeout(() => setPopupMessage(""), 3000);
  };

  useEffect(() => {
    document.body.style.overflowY = isModalOpen ? "hidden" : "scroll";
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isModalOpen]);

  const handleInputChange = ({ target: { name, value } }) =>
    setFormData((prevData) => ({ ...prevData, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim()
    ) {
      showPopup("Заполните все поля!", "error");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showPopup("Пароли не совпадают", "error");
      return;
    }

    try {
      const result = await dispatch(
        handleRegister({
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        })
      );

      if (result.error) {
        throw new Error(
          result.error.message || "Не удалось зарегистрироваться"
        );
      }
      showPopup("Регистрация успешна", "success");
      setIsModalOpen(true);
    } catch (error) {
      showPopup("Ошибка попробуйте позже!", "error");
      throw new Error(error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      {popupMessage && <Popup message={popupMessage} type={popupType} />}
      <div className={styles.loginSection}>
        <div className={styles.titlePart}>
          <h2>Регистрация</h2>
          <Link to={path.login}>
            <span>Войти</span>
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
              autoComplete="email"
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
              autoComplete="new-password"
            />
          </div>
          <div className={styles.inpArea}>
            <div className={styles.iconArea}>
              <TbLockPassword />
            </div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите ваш пароль*"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </div>

          <div className={styles.btnArea}>
            <button type="submit">Зарегистрироваться</button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <ActivationCode email={formData.email} closeModal={closeModal} />
      )}
    </Container>
  );
};
