import React from 'react';
import './component-styles/emailInputStyle.css'

export const EmailInput = (props) => {
    return(
        <input style={{marginLeft: props.marginLeft}} className="email_input_text" type="email" placeholder="Enter email address"/>
    )
}

export default EmailInput;