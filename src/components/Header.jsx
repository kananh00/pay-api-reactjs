import React,{Component} from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import './component-styles/headerStyle.css';
import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/mobile/menu.svg'
class Header extends Component{
    render(){
       return(
        <div className="header">
            <Container fluid>
                <Row>
                    <Col>
                        <img src={logo} alt="logo"></img>
                    </Col>
                    <Col className="menu_icon">
                        <img src={menu} alt="menu-icon1"></img>
                    </Col>
                </Row>
            </Container>
        </div>
        ) 
    }
}

export default Header

