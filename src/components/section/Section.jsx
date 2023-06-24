import React, { useEffect, useState } from "react";
import "./section.css";
import share from "../img/share-2.png";
import { NavLink } from "react-router-dom";
import redLike from "../img/redLike.png"
import heard from "../img/heart.png"

const Section = ({ img, id, title, text, date, onPlus }) => {
    const [like, setLike] = useState(false);

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

                        <img src={like ? redLike : heard} onClick={onPlus} alt="" />

                    </div>
                    <div className="subtitle-text">
                        <p className="grey">
                            <span className="date">{date}</span>
                            <br />
                            <br />
                            <span className="txt_title">{title}</span>
                            <br />
                            <br />
                            {text}
                        </p>
                        <button className="link_btn" >
                            <NavLink to={`/ReadMore/${id}`}>Читать дальше&gt;&gt;</NavLink>
                        </button>
                        <div className="share_btn">
                            <span>
                                <img src={share} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr" />
        </>
    );
};

export default Section;
