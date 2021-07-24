import React from 'react';
import './component-styles/teamInfoStyle.css';

export const TeamInfo = (props) => {
    return(
        <div className="team_info">
                <p className="info_name">{props.infoName}</p>
                <h1 className="info">{props.info}</h1>
        </div>
    )
}

export default TeamInfo;