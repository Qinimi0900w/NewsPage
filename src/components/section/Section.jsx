import React from "react";
import "./section.css"
import Share from "./../img/share-2.png"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Section = (props) => {
    
    return (
        <>
            <div className="content_block">
                <div className="img">
                    <img src={props.img_url} alt="" />
                </div>
                <div className="subtitle">
                    <div className="like_btn">
                        <FontAwesomeIcon icon={faHeart} className="iconLike" id="iconLike" /*onClick={likeBtn}*/ />
                    </div>
                    <div className="subtitle">
                        <p className="grey">
                            <span className="grey">29.11.2022</span>
                            <br />
                            <br /> <span className="txt_title">
                                Заголовок новости
                            </span> <br /> <br /> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nunc vulpuibero etvelit interdac aliquet odio mattis.
                            Class aptent taciti sociosqu ad litora torquent per conubinostra,
                            perinceptos himenaeos.
                        </p>
                        <span>Читать дальше&gt;&gt;</span>
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

export default Section;