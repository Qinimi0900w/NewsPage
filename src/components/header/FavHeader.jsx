import React from "react";
import logo from "./../img/logoPurple.png";
import search from "./../img/menuPurple.png";
import profil from "./../img/profilePurple.png";
import menu from "./../img/menuPurple.png";


const FavHeader = () => {
    return(
        <div className="headFavPage">
            <img src={logo} alt="" />
            <div>
              <a href=""><img src={search} alt="" /></a> 
              <a href=""><img src={profil} alt="" /></a>  
              <a href=""><img src={menu} alt="" /></a>  
            </div>
        </div>
    )
}
export default FavHeader;