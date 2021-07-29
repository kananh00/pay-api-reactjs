import React from 'react';
import './component-styles/readyToStartStyle.css';
import Button from './ScheduleBtn';
import EmailInput from './EmailInput';
export const ReadyToStart = () => {
    return(
        <div className="ready_to_start">
            <h1 className="heading_read">Ready to start?</h1>
            <div className="container">
                    <div className="schedule_input">
                        <div className="row">
                            <div className="col col-md-8"><EmailInput/></div>
                            <div className="col col-md-4"><Button btnText='Schedule a Demo'/></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}