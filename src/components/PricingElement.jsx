import React from 'react';
import './component-styles/pricingElementStyle.css';
import checkedIcon from '../assets/shared/desktop/icon-check.svg';
import ButtonMain from './ButtonMain';
export const PricingElement = (props) => {

    const pricingItem = props.name.map((item, pos) => {
        return(
            <div className="price_element">
                {props.checked[pos] ? <img src={checkedIcon} alt="check icon" className="check"/> : null}
                {props.checked[pos] ? <p className="element_name">{item}</p> : <p style = {{opacity: '50%', paddingLeft: '50px'}} className="element_name">{item}</p>}
            </div>
        )
    })
    return(
        <div className="pricing_element">
            <h2 className="heading_content colored_heading">{props.heading}</h2>
            <p className="text text_color text_pricing">{props.text}</p>
            <h1 className="price">{props.price}</h1>
            <div className="include_to_price">
                <hr className="pricing_line"/>
                {pricingItem}
                <hr className="pricing_line"/>
            </div>
            <ButtonMain btnName='Request Access' color='#36536B' marginBottom='48px'/>
        </div>
    )
}

export default PricingElement;