import React from "react";
import logo from "./../img/logoPurple.png";
import search from "./../img/searchpurple.png";
import profil from "./../img/profilePurple.png";
import menu from "./../img/menuPurple.png";
import "./favHeader.css"


const FavHeader = () => {
    return(
        <div className="headFavPage">
            <img src={logo} alt="" />
            <div className="icons">
              <span><img src={search} alt="" /></span> 
              <span><img src={profil} alt="" /></span>  
              <span><img src={menu} alt="" /></span>  
            </div>
        </div>
    )
}
export default FavHeader;