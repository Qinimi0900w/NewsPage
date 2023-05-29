import React from "react";
import FavHeader from "../header/FavHeader";
import FavHome from "../favoritePage/FavHome";
import Footer from "../footer/Footer";
import "../favoritePage/favSection.css"

const FavMain = () => {
    return (
        <>
            <FavHeader />
            <div className="title">
                <p>Избранные сообщение</p>
            </div>
            <FavHome/>
            <Footer/>
        </>

    )
}
export default FavMain;