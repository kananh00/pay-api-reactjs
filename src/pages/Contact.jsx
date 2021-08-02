import React, {Component} from 'react';
import './contactStyle.css';
import Form from '../components/Form';
import ButtonMain from '../components/ButtonMain';
import Corparation from '../components/Corparation';
import { ReadyToStart } from '../components/ReadyToStart';
import checkedIcon from '../assets/shared/desktop/icon-check.svg';

class Contact extends Component{
    state = {
            checkboxIsChecked: false
    }
    onCheckboxClick = () =>{
        if(!this.state.checkboxIsChecked){
            this.setState({checkboxIsChecked: true})
        }
        else{
            this.setState({checkboxIsChecked: false})
        }
        console.log(this.state.checkboxIsChecked)
    }
    render(){
        return(
            <div className="contact page">
                <div className="circle_pageBG"></div>
                {/* <Header/> */}
                <div className="container-fluid p-0">
                    <div className="row p-0">
                        <div className="col-12 col-lg-8">
                            <h1 className="home_heading page_heading contact_heading">Submit a help request and we’ll get in touch shortly.</h1>
                        </div>
                        <div className="col-12 col-lg-6 mt-lg-4">
                            <div className="form_part">
                                <Form type='text' rows='1' name='name' placeholder="Name"/>
                                <Form type='email' rows='1' name='email' placeholder="Email Adress"/>
                                <Form type='text' rows='1' name='company' placeholder="Company Name"/>
                                <Form type='text' rows='1' name='title' placeholder="Title"/>
                                <Form type='text' rows='3' name='message' placeholder="Message"/>
                                
                                <div className="checkLine">
                                    {!this.state.checkboxIsChecked ? <div onClick={this.onCheckboxClick} className="checkbox"></div> : <div onClick={this.onCheckboxClick} className="checkbox check_clicked"><img className="checkbox_icon" src={checkedIcon} alt="check icon"/></div>}
                                    <p className="checkbox_text">Stay up-to-date with company announcements and updates to our API</p>
                                </div>

                                <ButtonMain btnName='Submit' color='#36536B' padding='16px 50px 14px 50px' marginBottom='75px'/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-lg-flex align-items-lg-center px-lg-4">
                            <div className="join_us">
                                <h2 className="heading_content text_color contact_corp_heading">Join the thousands of innovators already building with us</h2>
                                <Corparation marginTop='32px'/>
                            </div>
                        </div>
                    </div>
                </div>
                <ReadyToStart/>
                {/* <Footer/> */}
            </div>
        )
    }
}

export default Contact;