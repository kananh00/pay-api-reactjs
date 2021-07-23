import React from 'react';
import './component-styles/scheduleBtnStyle.css'
export const Button = ({btnText}) => {
    return(
        <div className="btn_schedule">
            <p className="btn_text">{btnText}</p>
        </div>
    )
}

export default Button;