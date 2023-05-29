import React from "react";
import arrow from "./../img/arrow-left.png";
import like from "./../img/heart.png";
import share from "./../img/share-2.png"
import SectionComment from "./../SectionComment";

const PageSection3 = ({ head, data, img, txt1, txt2, }) => {
    return (
        <>
            <div className="page_main">
                <div className="div-arrow">
                    <button className="btn_arrow">
                        <img src={arrow} alt="" />
                    </button>
                </div>
                <div>
                    <button className="btn_like">
                        <img src={like} alt="" />
                    </button>
                </div>
                <div className="main_content">
                    <p className="grey">{data}</p>
                    <h2>{head}</h2>
                    <p className="grey">
                        {txt1}
                    </p>
                    <img src={img} alt="" className="main_img" />
                    <p className="grey">
                        {txt2}
                    </p>
                </div>
                <button className=" btn_share">
                    <img src={share} alt="" />
                </button>
                <br />
                <br />
            </div>
            <SectionComment />
        </>
    )
}
export default PageSection3;