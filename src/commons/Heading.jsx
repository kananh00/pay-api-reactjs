import React from 'react';
import './headingStyle.css';

export const Heading = ({heading_name, text, color}) => {
    return(
        <div style = {{color: color}} className="heading_wrapper">
            <h1 className="heading">{heading_name}</h1>
            <p className="text">{text}</p>
        </div>
    )
    
}

export default Heading;