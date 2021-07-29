import React, {Component} from 'react';
import './contactStyle.css';
import Header from '../components/Header';
import Form from '../components/Form';
import ButtonMain from '../components/ButtonMain';
import Corparation from '../components/Corparation';
import { ReadyToStart } from '../components/ReadyToStart';
import { Footer } from '../components/Footer';
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
                <Header/>

                <div className="form_part">
                    <h1 className="home_heading page_heading contact_heading">Submit a help request and we’ll get in touch shortly.</h1>
                    <Form type='text' rows='1' placeholder="Name"/>
                    <Form type='email' rows='1' placeholder="Email Adress"/>
                    <Form type='text' rows='1' placeholder="Company Name"/>
                    <Form type='text' rows='1' placeholder="Title"/>
                    <Form type='text' rows='3' placeholder="Message"/>
                    
                    <div className="checkLine">
                        {!this.state.checkboxIsChecked ? <div onClick={this.onCheckboxClick} className="checkbox"></div> : <div onClick={this.onCheckboxClick} className="checkbox check_clicked"></div>}
                        <p className="checkbox_text">Stay up-to-date with company announcements and updates to our API</p>
                    </div>

                    <ButtonMain btnName='Submit' color='#36536B' padding='16px 50px 14px 50px' marginBottom='75px'/>
                </div>
            
                <div className="join_us">
                    <h2 className="heading_content text_color contact_corp_heading">Join the thousands of innovators already building with us</h2>
                    <Corparation marginTop='32px'/>
                </div>

                <ReadyToStart/>
                <Footer/>
            </div>
        )
    }
}

export default Contact;