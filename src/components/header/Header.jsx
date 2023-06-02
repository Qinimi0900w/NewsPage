import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./../img/logo.png";
import Slider from "./../img/sliders.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const ModalProfile = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_profile_active" : "modal_profile"} onClick={() => setactive(false)} >
            <div className={active ? "modal_content_profile_active" : "modal_content_profile"} onClick={e =>e.stopPropagation()}>
                <FontAwesomeIcon icon={faXmark} className="btnexit" onClick={() => setactive(false)}/>
                <Link to="/PersonalPage">Мой профиль</Link>
                <hr style={{ color: 'ligthgrey', width: '140px' }} />
                <Link to="">Выйти</Link >
            </div>
        </div>
    )
}

const ModalBurger = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_burger_active" : "modal_burger"} onClick={() => setactive(false)}>
            <div className={active ? "modal_content_burger_active" : "modal_content_burger"} onClick={e =>e.stopPropagation()}>
                <FontAwesomeIcon icon={faXmark} className="btnexit" onClick={() => setactive(false)}/>
                <Link to="/FavoritePage">Избранные новости</Link>
            </div>
        </div>
        
    )
}
const ModalSlider = ({ active, setactive }) => {
    return (
        <div className={active ? "modal_slider_active" : "modal_slider"} >
            <div className="modal_content">
                
            </div>
        </div>
    )
}

const Header = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveBur, setModalActiveBur] = useState(false);
    return (
        <>
            <header className="header_news">
                <div className="all_logolink d-flex justify-content-around align-items-center" >
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

