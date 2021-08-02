import React from 'react';
import './component-styles/readyToStartStyle.css';
import Button from './ScheduleBtn';
import EmailInput from './EmailInput';
export const ReadyToStart = () => {
    return(
        <div className="ready_to_start">
            
            <div className="container p-0">
                    <div className="schedule_input">
                        <div className="row justify-content-center justify-content-lg-between">
                            <div className="col-12 col-lg-4">
                                <h1 className="heading_read">Ready to start?</h1>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5 p-0 d-block d-sm-block d-md-none"><EmailInput/></div>
                            <div className="col-12 col-md-6 col-lg-5 p-0 d-none d-md-block d-xl-none"><EmailInput marginLeft='120px'/></div>
                            <div className="col-12 col-md-6 col-lg-4 p-0 d-none d-xl-block"><EmailInput marginLeft='320px'/></div>
                            <div className="col-12 col-md-4 col-lg-3 p-0 d-none d-lg-flex"><Button right='0' btnText='Schedule a Demo'/></div>
                            <div className="col-12 col-md-4 p-0 d-lg-none position-relative"><Button btnText='Schedule a Demo'/></div>  
                        </div>
                    </div>
                </div>
        </div>
    )
}