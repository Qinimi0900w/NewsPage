import React from "react";
import "./../section/section.css";
import Share from "./../img/share-2.png"
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import redLike from "../img/redLike.png"
import heard from "../img/heart.png"


const FavSection = ({ img, title, text, date }) => {
    const { id } = useParams;
    const [like, setLike] = useState(true);


    const onClickLike = () => {
        setLike(!like);
    };

    const handleAddToCart = () => {
        const data = { img, id, title, text };
        const postList = JSON.parse(localStorage.getItem("postData")) || [];

        const isDuplicate = postList.some((item) => item.id === id);
        if (!isDuplicate) {
            const list = [...postList, data];
            localStorage.setItem("postData", JSON.stringify(list));
        }
    };

    return (
        <>
            <div className="content_block">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="subtitle">
                    <div className="like_btn" onClick={handleAddToCart}>

                        <img src={like ? redLike : heard} onClick={onClickLike} alt="" />

                    </div>
                    <div className="subtitle">
                        <p className="grey">
                            <span className="grey">{date}</span>
                            <br />
                            <br /> <span className="txt_title">
                                {title}
                            </span> <br /> <br />
                            {text}
                        </p>
                        <button className="link_btn" >
                            <NavLink to={`/ReadMore/${id}`}>Читать дальше&gt;&gt;</NavLink>
                        </button>
                        <div className="share_btn">
                            <span>
                                <img src={Share} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr" />
        </>

    )
}

export default FavSection;