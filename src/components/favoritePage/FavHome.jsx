import FavSection from "./FavSection";
import Jpg1 from "./../img/img1.png"
import Jpg2 from "./../img/img2.png";
import Jpg3 from "./../img/img3.png";
import Jpg4 from "./../img/img4.png";
import Jpg5 from "./../img/img5.png";

const FavHome = () => {
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
                <section className="news_list">
                    {/* {items} */}
                    <FavSection 
                     src={Jpg1}
                     />
                    <FavSection
                    src={Jpg2}
                    />
                    <FavSection
                    src={Jpg3}
                    />
                    <FavSection
                    src={Jpg4}
                    />
                    <FavSection
                    src={Jpg5}
                    />
                </section>
            </div>
        </>
    )
}

export default FavHome;