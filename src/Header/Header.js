import React from 'react';
import "./Header.css";
import foxIcon from "./axves_png.png";

function Header() {
    return (
        <div className="header_main">
            <div className="header">
            <img src={foxIcon} alt="dfvsd" width="120px" height="120px"/>
            <p className="header_title">Прогноз погоды</p>
            </div>
        </div>
    )
}

export default Header;
