import React from 'react';
import './component-styles/buttonMainStyle.css';

export const ButtonMain = ({btnName}) => {
    return(
        <div className="main_btn_wrapper">
            <button className="main_btn">{btnName}</button>
        </div>
    )
}

export default ButtonMain;