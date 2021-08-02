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
import Button from './ScheduleBtn';
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
            {/* <Container fluid>
                <Row>
                    <Col className="p-0">
                        <NavLink exact to = "/"><img src={logo} alt="logo"></img></NavLink> 
                    </Col>
                    <Col className="menu_icon p-0">
                        <img onClick={() => this.onMenuIconClick()} src={menu} alt="menu-icon"></img>
                    </Col>
                </Row>
            </Container> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-3 col-lg-2 p-0">
                        <NavLink exact to = "/"><img src={logo} className="app_logo" alt="logo"></img></NavLink> 
                    </div>
                    <div className="col p-0 hamburger">
                        <div className="menu_icon">
                            <img onClick={() => this.onMenuIconClick()} src={menu} alt="menu-icon"></img>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="nav_bar_link">
                                    <NavLink className = "colored_nav_link nav_link" to = "/pricing">Pricing</NavLink>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="nav_bar_link">
                                    <NavLink className = "colored_nav_link nav_link" to = "/about">About</NavLink>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="nav_bar_link">
                                    <NavLink className = "colored_nav_link nav_link" to = "/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-4 position-relative">
                        <div className="nav_btn">
                            <Button marginTop='-3px' marginBottom='0' btnText='Schedule a Demo' right='0'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        ) 
    }
}

export default Header

