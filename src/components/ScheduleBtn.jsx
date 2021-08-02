import React from 'react';
import './component-styles/scheduleBtnStyle.css'
export const Button = (props) => {
    return(
        <div className="btn_container">
            <div style={{marginBottom: props.marginBottom, marginTop: props.marginTop, right: props.right}} className="btn_schedule">
                <p className="btn_text">{props.btnText}</p>
            </div>
        </div>
    )
}

export default Button;

// import React from 'react';
// import './component-styles/scheduleBtnStyle.css'
// export const Button = (props) => {
//     const [width, setWidth] = React.useState(window.innerWidth);
//     console.log(width)
//     return(
//         <div className="btn_container">
//             {width>1200 
//             ?
//             <div style={{marginBottom: props.marginBottom, marginTop: props.marginTop, right: '30%'}} className="btn_schedule">
//                 <p className="btn_text">{props.btnText}</p>
//             </div>
//             :
//             <div style={{marginBottom: props.marginBottom, marginTop: props.marginTop, right: props.right}} className="btn_schedule">
//                 <p className="btn_text">{props.btnText}</p>
//             </div>
//             }
           
//         </div>
//     )
// }

// export default Button;