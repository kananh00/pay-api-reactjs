import React from 'react';
import './component-styles/readyToStartStyle.css';
import Button from './ScheduleBtn';
import EmailInput from './EmailInput';
export const ReadyToStart = () => {
    return(
        <div className="ready_to_start">
            <h1 className="heading_read">Ready to start?</h1>
            <EmailInput/>
            <Button btnText='Schedule a Demo'/>
        </div>
    )
}