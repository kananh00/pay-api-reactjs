import React from 'react';
import './component-styles/advantageStyle.css'

export const Advantages = (props) => {
    return(
        <div className="advantages">
            <img src={props.advImg} alt="advantage"/>
            <h2 className="heading_adv">{props.heading}</h2>
            <p className="text_adv">{props.text}</p>
        </div>
    )
}

export default Advantages;