import React, { useState } from "react";
import "./header.css";
import Logo from "./../img/logo.png";
import Slider from "./../img/sliders.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const ModalProfile = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_profile_active" : "modal_profile"} onClick={() => setactive(false)}>
            <div className="modal_content">
                <FontAwesomeIcon icon={faXmark} className="btnexit"  />
                <Link to="">Мой профиль</Link>
                <hr style={{ color: 'ligthgrey', width: '140px' }} />
                <Link to="" >Выйти</Link>
            </div>
        </div>
    )
}

const ModalBurger = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_burger_active" : "modal_burger"} onClick={() => setactive(false)}>
            <div className="modal_content">
                <FontAwesomeIcon icon={faXmark} className="btnexit"/>
                <Link to="">Избранные новости</Link>
            </div>
        </div>
    )
}

const Header = () => {
    const [modalActive, setModalActive] = useState(true);
    const [modalActiveBur, setModalActiveBur] = useState(false);
    return (
        <>
            <header className="header_news">
                <div className="all_logolink">
                    <div className="logo_pr">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="link_pr">
                        <ul>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="navbtn" />
                                </span>
                            </li>
                            <li>
                                <span  onClick={() => { setModalActive(true) }}>
                                <FontAwesomeIcon icon={faUser} className="navbtn"/>
                                </span>
                            </li>
                            <li>
                                <span onClick={() => { setModalActiveBur(true) }}>
                                    <FontAwesomeIcon icon={faBars} className="navbtn"/>
                                </span>
                            </li>
                        </ul>
                        <ModalProfile active={modalActive} setactive={setModalActive} />
                        <ModalBurger active={modalActiveBur} setactive={setModalActiveBur} />

                    </div>
                </div>
                <p className="title">Новости</p>
            </header>
            <div className="slider_block">
                <a href=""><img src={Slider} alt="" className="slider" /></a>
            </div>
        </>

    )
}

export default Header;

