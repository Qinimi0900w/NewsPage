// import React from "react";
// import Logo from "../img/logoPurple.png"
// import styles from "./registr.module.css"
// import { useForm } from "react-hook-form";

// const Registr = () => {
//     const {
//         register,
//         formState: { errors },
//         handleSubmit,
//         reset,
//     } = useForm({
//         mode: "onBlur"
//     });

//     const onSubmit = (data) => {
//         alert(JSON.stringify(data));
//         console.log(JSON.stringify(data))
//         reset();
//     };
//     const [passwordError, setPasswordError] = useState();

//     const onSubmitError = (data) => {
//         if (data.password !== data.passwordRepeat) {
//             setPasswordError("Пароли не совпадают");
//         } else {
//             setPasswordError("");
//             alert(JSON.stringify(data));
//             console.log(JSON.stringify(data));
//             reset();
//         }
//     };

//     return (
//         <div className={styles.content}>
//             <div className={styles.logo}>
//                 <img src={Logo} alt="" />
//             </div>
//             <div >
//                 <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//                     <div className={styles.field}>
//                         <label htmlFor="">Фамилия</label>
//                         <input type="text" name="surename"
//                             {...register("surename", {
//                                 required: "Поле должно быть заполнено!"
//                             })}
//                         />
//                     </div>
//                     <div style={{ height: 15 }}>
//                         {errors?.surename && <p className={styles.text}>{errors?.surename?.message || "Error!"}</p>}
//                     </div>
//                     <div className={styles.field}>
//                         <label htmlFor="">Имя</label>
//                         <input type="text" name="name"
//                             {...register("name", {
//                                 required: "Заполните!"
//                             })} />
//                     </div>
//                     <div style={{ height: 15 }}>
//                         {errors?.name && <p className={styles.text}>{errors?.name?.message || "Error!"}</p>}
//                     </div>
//                     <div className={styles.field}>
//                         <label htmlFor="">Никнейм</label>
//                         <input type="text" name="nickname"
//                             {...register("nickname", {
//                                 required: "Заполните!"
//                             })} />
//                     </div>
//                     <div style={{ height: 15 }}>
//                         {errors?.name && <p className={styles.text}>{errors?.nickname?.message || "Error!"}</p>}
//                     </div>
//                     <div className={styles.field}>
//                         <label htmlFor="">Пароль</label>
//                         <div>
//                             <input type="password" name="password" />
//                             <p className={styles.passwordText} style={{ height: 15 }}>{passwordError}</p>
//                         </div>
//                     </div>
//                     <div className={styles.field}>
//                         <label htmlFor="">Подтверждение пароля</label>
//                         <input type="password" name="passwordRepeat"
//                             {...register("passwordRepeat", {
//                                 required: "Не совпадает!"
//                             })} />
//                     </div>
//                     <div style={{ height: 15 }}>
//                         {errors?.passwordRepeat && (
//                             <p className={styles.text}>
//                                 {errors?.passwordRepeat?.message || "Error!"}
//                             </p>
//                         )}
//                     </div>
//                     <br />
//                     <br />
//                     <div className="d-flex justify-content-center">
//                         <button type="submit" className={styles.btn}  >Регистрация</button>
//                     </div>
//                     <p className={styles.textAfterBtn}>Уже eсть логин?<a href=""> Войти</a></p>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Registr;