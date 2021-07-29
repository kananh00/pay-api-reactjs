import React from 'react';
import './component-styles/scheduleBtnStyle.css'
export const Button = (props) => {
    return(
        <div className="btn_container">
            <div style={{marginBottom: props.marginBottom, marginTop: props.marginTop}} className="btn_schedule">
                <p className="btn_text">{props.btnText}</p>
            </div>
        </div>
    )
}

export default Button;