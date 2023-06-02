import React from "react";
import Logo from "./../img/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="" />
            <div className="fft">
                <p>
                    <Link to="/PersonalPage">Мой профиль</Link>
                </p>
                <p>
                    <Link to="/FavoritePage">Избранные новости</Link>
                </p>
            </div>
        </footer>

    )
}

export default Footer;