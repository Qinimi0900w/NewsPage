import React from "react";
import FavHeader from "../header/FavHeader";
import Footer from "../footer/Footer";
import Personal from "../personalPage/Personal";
import Profile from "../personalPage/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const PersonalMain = () => {
    return (
        <>
        <FavHeader/>
        <Profile/>
        <div className="profile_block">
        <p className="profile_title">Мои публикации</p>
        <button className="publik_btn">Новая публикация</button>
        <button className="publik_btn2 justify-content-center align-items-center"><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <Personal/>
        <Footer/>
        </>
    )
}
export default PersonalMain;