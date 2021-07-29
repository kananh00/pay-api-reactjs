import React from 'react';
import './component-styles/readyToStartStyle.css';
import Button from './ScheduleBtn';
import EmailInput from './EmailInput';
export const ReadyToStart = () => {
    return(
        <div className="ready_to_start">
            
            <div className="container">
                    <div className="schedule_input">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h1 className="heading_read">Ready to start?</h1>
                            </div>
                            <div className="col col-md-8 col-lg-3"><EmailInput/></div>
                            <div className="col col-md-4 col-lg-3"><Button btnText='Schedule a Demo'/></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}