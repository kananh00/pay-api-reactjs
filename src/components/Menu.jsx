import React from 'react';
import { NavLink } from "react-router-dom";
import './component-styles/menuStyle.css';
import close from '../assets/shared/mobile/close.svg'
import Button from './ScheduleBtn';
export const Menu = (props) => {
    return(
        <div style={{position: props.position}} className="menu">
            <img className='close_icon' onClick={props.onMenuIconClick} src={close} alt="close icon"/>
            <hr className="menu_line"/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="menu_link">
                            <NavLink onClick={props.onMenuIconClick} className = "nav_link" to = "/pricing">Pricing</NavLink>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="menu_link">
                            <NavLink onClick={props.onMenuIconClick} className = "nav_link" to = "/about">About</NavLink>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="menu_link">
                            <NavLink onClick={props.onMenuIconClick} className = "nav_link" to = "/contact">Contact</NavLink>
                        </div>
                    </div>
                    <div className="col-12">
                        <Button btnText='Schedule a Demo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}