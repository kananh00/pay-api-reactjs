import React,{Component} from 'react';
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import './component-styles/headerStyle.css';
import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/mobile/menu.svg'
import { Menu } from './Menu';
class Header extends Component{
    state = {
        menuIsVisible: false
    }
    onMenuIconClick= () => {
        if(this.state.menuIsVisible===false){
            this.setState({menuIsVisible: true})
        }
        else{
            this.setState({menuIsVisible: false})
        }
    }
    render(){
       return(
        <div className="header">
            {this.state.menuIsVisible ? <Menu position='fixed' onMenuIconClick={this.onMenuIconClick}/> : null}
            <Container fluid>
                <Row>
                    <Col className="p-0">
                        <NavLink exact to = "/"><img src={logo} alt="logo"></img></NavLink> 
                    </Col>
                    <Col className="menu_icon p-0">
                        <img onClick={() => this.onMenuIconClick()} src={menu} alt="menu-icon"></img>
                    </Col>
                </Row>
            </Container>
            
        </div>
        ) 
    }
}

export default Header

