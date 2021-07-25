import React from 'react';
import './component-styles/buttonMainStyle.css';

export const ButtonMain = ({btnName, color, marginBottom}) => {
    return(
        <div style={{marginBottom: marginBottom}} className="main_btn_wrapper">
            <button style={{color: color, borderColor: color}} className="main_btn">{btnName}</button>
        </div>
    )
}

export default ButtonMain;