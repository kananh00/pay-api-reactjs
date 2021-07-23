import React from 'react';
import './component-styles/emailInputStyle.css'

export const EmailInput = () => {
    return(
        <div className="email_input">
            <form>
                <input className="email_input_text" type="email" placeholder="Enter email address"/>
            </form>
        </div>
    )
}

export default EmailInput;