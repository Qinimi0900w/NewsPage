import React, { Fragment } from "react";
import Aside from "../aside/Aside";
import Section from "../section/Section";
import { sectionData } from "../section/sectionData";

const Home = () => {


    const items = sectionData.map((item) => {
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