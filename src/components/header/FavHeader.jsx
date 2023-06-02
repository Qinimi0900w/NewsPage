import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../img/logoPurple.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./favHeader.css";

const ModalProfile = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_profile_active" : "modal_profile"} onClick={() => setactive(false)} >
            <div className={active ? "modal_content_profile_active" : "modal_content_profile"} onClick={e =>e.stopPropagation()}>
                <FontAwesomeIcon icon={faXmark} className="btnexit" onClick={() => setactive(false)} />
                <Link to="/PersonalPage">Мой профиль</Link>
                <hr style={{ color: 'ligthgrey', width: '140px' }} />
                <Link to="">Выйти</Link >
            </div>
        </div>
    )
}

const ModalBurger = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_burger_active" : "modal_burger"} onClick={() => setactive(false)} >
            <div className={active ? "modal_content_burger_active" : "modal_content_burger"} onClick={e =>e.stopPropagation()} >
                <FontAwesomeIcon icon={faXmark} className="btnexit" onClick={() => setactive(false)} />
                <Link to="/FavoritePage">Избранные новости</Link>
            </div>
        </div>

    )
}
const FavHeader = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveBur, setModalActiveBur] = useState(false);
    return (
        <div className="headFavPage d-flex justify-content-around ">
            <img src={logo} alt="" className="" />
            <div className="icons d-flex">
                <span ><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#7E5BC2" }} className="navbtn" /></span>
                <span onClick={() => { setModalActive(true) }}><FontAwesomeIcon icon={faUser} style={{ color: "#7E5BC2" }} className="navbtn" /></span>
                <span onClick={() => { setModalActiveBur(true) }}> <FontAwesomeIcon icon={faBars} style={{ color: "#7E5BC2" }} className="navbtn" /></span>
                <ModalProfile active={modalActive} setactive={setModalActive} />
                <ModalBurger active={modalActiveBur} setactive={setModalActiveBur} />
            </div>
        </div>
    )
}
export default FavHeader;