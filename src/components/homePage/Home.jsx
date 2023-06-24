import React, { Fragment, useEffect, useState } from "react";
import Aside from "../aside/Aside";
import Section from "../section/Section";


const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const url = 'http://localhost:3001/sectionData';

            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        getPosts()
    }, []);


    return (
        <>
            <div className="main">
                <Aside />
                <section className="news_list">
                    {
                        posts.map((item) => {
                            return (
                                <Fragment key={item.id} >
                                    <Section 
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    text={item.text}
                                    onPlus={()=>console.log(1)}
                                    />
                                </Fragment>
                            )
                        })
                    }
                </section>
            </div>
        </>
    )
}

export default Home;