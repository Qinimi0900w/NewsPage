import FavSection from "./FavSection";
import { useState,useEffect,Fragment } from "react";

const FavHome = () => {
    const [posts, setPosts] = useState([]);
    const [item,setItem] = useState([]);

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
                <section className="news_list">
                {
                        posts.map((item) => {
                            return (
                                <Fragment key={item.id} >
                                    <FavSection 
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    text={item.text}
                                    onClickLike={()=>console.log(1)}
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

export default FavHome;