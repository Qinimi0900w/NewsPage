import React, { Fragment } from "react";
import Aside from "../aside/Aside";
import PersonalSection from "./PersonalSection";
import { sectionData } from "../section/sectionData";
import Jpg1 from "./../img/img1.png"
import Jpg2 from "./../img/img2.png";
import Jpg3 from "./../img/img3.png";
import Jpg4 from "./../img/img4.png";
import Jpg5 from "./../img/img5.png";

const Personal= () => {
    // const items = sectionData.map((item) => {
    //     return (
    //         <Fragment key ={item.id} >
    //             <Section img={item.src}/>
    //         </Fragment>   
    //     )
    // })

    return (
        <>
            <div className="main">
                <section className="news_list">
                    {/* {items} */}
                    <PersonalSection 
                     src={Jpg1}
                     />
                    <PersonalSection
                    src={Jpg2}
                    />
                    <PersonalSection
                    src={Jpg3}
                    />
                    <PersonalSection
                    src={Jpg4}
                    />
                    <PersonalSection
                    src={Jpg5}
                    />
                </section>
            </div>
        </>
    )
}

export default Personal;