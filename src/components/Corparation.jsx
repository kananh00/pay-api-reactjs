import React from 'react';
import './component-styles/corparationStyle.css';
import "bootstrap/dist/css/bootstrap.min.css"

import tesla from '../assets/shared/desktop/tesla.svg'
import microsoft from '../assets/shared/desktop/microsoft.svg'
import hewlettPackard from '../assets/shared/desktop/hewlett-packard.svg'
import oracle from '../assets/shared/desktop/oracle.svg'
import nvidia from '../assets/shared/desktop/nvidia.svg'
import google from '../assets/shared/desktop/google.svg'

export const Corparation = (props) => {
    return(
        <div style={{marginTop: props.marginTop}}>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-4">
                            <div className="corp_logo"><img style={{filter: props.filter}} src={tesla} alt="tesla"/></div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="corp_logo"><img style={{filter: props.filter}} src={microsoft} alt="microsoft"/></div>
                    </div>
                    
                    <div className="col-6 col-md-4">
                        <div className="corp_logo"><img style={{filter: props.filter}} src={hewlettPackard} alt="hewlettPackard"/></div>
                    </div>

                    <div className="col-6 col-md-4">                    
                        <div className="corp_logo"><img style={{filter: props.filter}} src={oracle} alt="oracle"/></div>
                    </div>
                    
                    <div className="col-6 col-md-4">
                            <div className="corp_logo"><img style={{filter: props.filter}} src={google} alt="google"/></div>
                    </div>
                    
                    <div className="col-6 col-md-4">
                        <div className="corp_logo"><img style={{filter: props.filter}} src={nvidia} alt="nvidia"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



// import {ReactComponent as Tesla} from '../assets/shared/desktop/tesla.svg'
// import {ReactComponent as Microsoft} from '../assets/shared/desktop/microsoft.svg'
// import {ReactComponent as HewlettPackard} from '../assets/shared/desktop/hewlett-packard.svg'
// import {ReactComponent as Oracle} from '../assets/shared/desktop/oracle.svg'
// import {ReactComponent as Nvidia} from '../assets/shared/desktop/nvidia.svg'
// import {ReactComponent as Google} from '../assets/shared/desktop/google.svg'

// export const Corparation = () => {
//     return(
//         <Container fluid>
//             <Row className="corp_row">
//                 <Col className="corp_img"><Tesla className="corp_logo"/></Col>
//                 <Col className="corp_img"><Microsoft className="corp_logo"/></Col>
//             </Row>
//             <Row className="corp_row">
//                 <Col className="corp_img"><HewlettPackard className="corp_logo"/></Col>
//                 <Col className="corp_img"><Oracle className="corp_logo"/></Col>
//             </Row>
//             <Row className="corp_row">
//                 <Col className="corp_img"><Google className="corp_logo"/></Col>
//                 <Col className="corp_img"><Nvidia className="corp_logo"/></Col>
//             </Row>
//         </Container>
//     )
// }
export default Corparation;