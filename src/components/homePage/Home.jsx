// import React, { Fragment } from "react";
import Aside from "../aside/Aside";
import Section from "../section/Section";
// import { sectionData } from "../section/sectionData";
import Jpg1 from "./../img/img1.png"
import Jpg2 from "./../img/img2.png";
import Jpg3 from "./../img/img3.png";
import Jpg4 from "./../img/img4.png";
import Jpg5 from "./../img/img5.png";

const Home = () => {
    // const items = sectionData.map((item) => {
    //     return (
    //         <Fragment key ={item.id} >
    //             < Section 
    //                 img={item.img_url}
    //         />
    //         </Fragment>
            
    //     )
    // })

    return (
        <>
            <div className="main">
                <Aside />
                <section className="news_list">
                    {/* {items} */}
                    <Section 
                     src={Jpg1}
                     />
                    <Section
                    src={Jpg2}
                    />
                    <Section
                    src={Jpg3}
                    />
                    <Section
                    src={Jpg4}
                    />
                    <Section
                    src={Jpg5}
                    />
                </section>
            </div>
        </>
    )
}

export default Home;