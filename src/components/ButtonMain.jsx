import React, {useState} from 'react';
import './component-styles/buttonMainStyle.css';

export const ButtonMain = ({btnName, color, marginBottom, padding}) => {
    const [isHover, setIsHover] = useState(false);
    return(
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={{marginBottom: marginBottom}} className="main_btn_wrapper">
            {!isHover ? <button style={{color: color, borderColor: color, padding: padding}} className="main_btn">{btnName}</button> : <button style={{color: '#fff', backgroundColor: color, padding: padding}} className="main_btn">{btnName}</button>}    
        </div>
    )
}

export default ButtonMain;