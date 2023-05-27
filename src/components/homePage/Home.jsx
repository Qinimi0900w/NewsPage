import React, { Fragment } from "react";
import Aside from "../aside/Aside";
import Section from "../section/Section";
import Jpg1 from "./../img/img1.png"
import Jpg2 from "./../img/img2.png";
import Jpg3 from "./../img/img3.png";
import Jpg4 from "./../img/img4.png";
import Jpg5 from "./../img/img5.png";

const Home = () => {

    const imgSection = [
        {
            id: 1,
            img_url:Jpg1,
        },
        {
            id: 2,
            img_url:Jpg2,
        },
        {
            id: 3,
            img_url:Jpg3,
        },
        {
            id: 4,
            img_url:Jpg4,
        },
        {
            id: 5,
            img_url:Jpg5,
        }
    ]

    const items = imgSection.map((item) => {
        return (
            <Fragment key ={item.id} >
                < Section 
                    img={item.img_url}
            />
            </Fragment>
            
        )
    })
    return (
        <>
            <div className="main">
                <Aside />
                <section className="news_list">
                    {items}
                    {/* <Section 
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
                    /> */}
                    
                </section>
            </div>
        </>
    )
}

export default Home;