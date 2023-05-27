import React from "react";
import "./readMorePage.css"


const SectionComment = () => {
    return (
        <>
            <div className="comment_content">
                <h3>Комментарии</h3>
                <div className="comment-txt">
                    <p>
                        <b>Олег Петров</b>
                    </p>
                    <p className="grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <div className="comment_link">
                        <p className="grey">30.11.2022</p>
                        <a href="">Ответить</a>
                    </div>
                    <div className="comment_subtxt">
                        <p>
                            <b>Олег Петров</b>
                        </p>
                        <p className="grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <div className="comment_link">
                            <p className="grey">30.11.2022</p>
                            <a href="">Ответить</a>
                        </div>
                        <div className="block_answer">
                            <label htmlFor="">
                                <b>Вы</b>
                            </label>
                            <input type="text" className="fields_answer" />
                            <input type="submit" defaultValue="Ответить" className="btn_answer" />
                        </div>
                    </div>
                    <p>
                        <b>Олег Петров</b>
                    </p>
                    <p className="grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <div className="comment_link">
                        <p className="grey">30.11.2022</p>
                        <a href="">Ответить</a>
                    </div>
                    <div className="mainblock_answer">
                        <label htmlFor="">
                            <b>Вы</b>
                        </label>
                        <input
                            type="text"
                            className="mainFieldSnswer"
                            placeholder="Напишите комментарий"
                        />
                        <input type="submit" defaultValue="Ответить" className="btn_mainfield" />
                    </div>
                </div>
            </div>

        </>
    )
}
export default SectionComment;