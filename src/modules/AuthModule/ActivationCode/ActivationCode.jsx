// import { MdOutlinePassword } from "react-icons/md";
// import styles from "./ActivationCode.module.scss";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { checkCode } from "../Api/AuthApi";
// import { path } from "../../../utils/constants/Constants";
// import { useNavigate } from "react-router-dom";
// import { Popup } from "../../../ui/PopUpMessage/Popup";

// export const ActivationCode = ({ closeModal, email }) => {
//   const dispatch = useDispatch();
//   const [code, setCode] = useState("");
//   const navigate = useNavigate();
//   const [popupMessage, setPopupMessage] = useState("");
//   const [popupType, setPopupType] = useState("");
//   const showPopup = (message, type) => {
//     setPopupMessage(message);
//     setPopupType(type);
//     setTimeout(() => setPopupMessage(""), 3000);
//   };

//   const handleInputChange = (e) => {
//     setCode(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!code.trim()) {
//       showPopup("Заполните поле", "error");
//       return;
//     }
//     try {
//       await dispatch(
//         checkCode({
//           email: email,
//           activationCode: code,
//         })
//       ).unwrap();
//       showPopup("Вы успешно создали аккаунт", "success");
//       closeModal();
//       navigate(path.login);
//     } catch (error) {
//       showPopup("Ошибка попробуйте позже", "error");
//       throw new Error(error);
//     }
//   };

//   return (
//     <div className={styles.overlay}>
//       {popupMessage && <Popup message={popupMessage} type={popupType} />}
//       <div className={styles.modal}>
//         <div className={styles.crossBtn}>
//           <button onClick={closeModal}>x</button>
//         </div>
//         <div className={styles.heading}>
//           <h2>Подтвердите свою почту</h2>
//           <span>
//             Мы отправили код на вашу почу <b>{email}</b>
//           </span>
//         </div>
//         <div className={styles.inpArea}>
//           <div className={styles.iconArea}>
//             <MdOutlinePassword />
//           </div>
//           <input
//             type="text"
//             name="activationCode"
//             onChange={handleInputChange}
//             value={code}
//             placeholder="Введите код*"
//           />
//         </div>
//         <div className={styles.btnArea}>
//           <button onClick={handleSubmit} type="button">
//             Подтвердить
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
