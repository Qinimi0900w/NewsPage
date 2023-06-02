import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Jpg from "../img/profile_img.png"
import "./personalPage.css"

const Profile = () => {
    return (
        <>
            <div className="personal_block d-flex">
                <div className="d-flex flex-column">
                    <div className="personal_img ">
                        <img src={Jpg} alt="" className="Profile_img" />
                    </div>
                    <div className="profile_subtext d-flex ">
                        <p className="p-2">Добавить фото<span ><FontAwesomeIcon icon={faDownload} /></span></p>
                        <p className="p-2">Удалить<span><FontAwesomeIcon icon={faTrashCan} style={{ color: "#8d2a2a", }} /></span></p>
                    </div>
                </div>
                <div className="profile_form">
                    <div className="pt-4 d-flex ">
                        <label htmlFor="surename" className="pe-3">Фамилия:</label>
                        <div className="profile_input">
                            <input type="text" name="surename" />
                            <span><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#8a8e93", }} /></span>
                        </div>
                    </div>
                    <div className="pt-4 d-flex">
                        <label htmlFor="name" name="name" className="pe-5">Имя:</label>
                        <div className="profile_input">
                            <input type="text" className="" />
                            <span><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#8a8e93", }} /></span>
                        </div>
                    </div>
                    <div className="pt-4 pb-4 d-flex">
                        <label htmlFor="nickname" className="pe-3">Никнейм:</label>
                        <div className="profile_input">
                            <input type="text" name="nickname" />
                            <span><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#8a8e93", }} /></span>
                        </div>
                    </div>
                    <button className="save_btn">Сохранить</button>
                </div>
            </div>
        </>
    )
}

export default Profile;