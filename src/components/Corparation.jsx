import React from 'react';
import './component-styles/corparationStyle.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"

import tesla from '../assets/shared/desktop/tesla.svg'
import microsoft from '../assets/shared/desktop/microsoft.svg'
import hewlettPackard from '../assets/shared/desktop/hewlett-packard.svg'
import oracle from '../assets/shared/desktop/oracle.svg'
import nvidia from '../assets/shared/desktop/nvidia.svg'
import google from '../assets/shared/desktop/google.svg'

export const Corparation = () => {
    return(
        <Container fluid>
            <Row className="corp_row">
                <Col><img className="corp_logo" src={tesla} alt="tesla"/></Col>
                <Col><img className="corp_logo" src={microsoft} alt="microsoft"/></Col>
            </Row>
            <Row className="corp_row">
                <Col><img className="corp_logo" src={hewlettPackard} alt="hewlettPackard"/></Col>
                <Col><img className="corp_logo" src={oracle} alt="oracle"/></Col>
            </Row>
            <Row className="corp_row">
                <Col><img className="corp_logo" src={google} alt="google"/></Col>
                <Col><img className="corp_logo" src={nvidia} alt="nvidia"/></Col>
            </Row>
        </Container>
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