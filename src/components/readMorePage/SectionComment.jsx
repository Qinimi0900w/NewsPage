import React from "react";
import "./readMorePage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


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
                            <button className="btn_answer">Ответить</button>
                            <button className="btn_answer_litle"><FontAwesomeIcon icon={faArrowUp} style={{ color: "#fafbff", }} /></button>
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
                            className="mainFieldAnswer"
                            placeholder="Напишите комментарий"
                        />
                        <input type="submit" defaultValue="Ответить" className="btn_mainfield" />
                        <button className="btn_mainFieldAnswer_litle"><FontAwesomeIcon icon={faArrowUp} style={{ color: "#fafbff", }} /></button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SectionComment;