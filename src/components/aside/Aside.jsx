import React from "react";
import "./aside.css";

const Aside = () => {
    return (
        <aside>
            <form className="form">
                <div className="form_title">
                    <p>
                        <b>Фильтрация</b>
                    </p>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="custom-checkbox"  id="sport"/>
                    <label htmlFor="sport">Спорт</label>
                </div>
                <br />
                <div className="form-group">
                    <input type="checkbox" className="custom-checkbox"  id="politic"/>
                    <label  htmlFor="politic">Политика</label>
                </div>
                <br />
                <div className="form-group">
                    <input type="checkbox" className="custom-checkbox"  id="stars" />
                    <label  htmlFor="stars">Звезды</label>
                </div>
                <br />
                <div className="form-group">
                    <input type="checkbox" className="custom-checkbox"  id="art"/>
                    <label  htmlFor="art">Искусство</label>
                </div>
                <br />
                <div className="form-group">
                    <input type="checkbox" className="custom-checkbox" id="fashion"/>
                    <label  htmlFor="fashion">Мода</label>
                </div>
                <br />
                <button className="btnAside">Применить</button>
            </form>
        </aside>

    )
}

export default Aside;