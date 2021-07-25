import React, {Component} from 'react';
import './contactStyle.css';
import Header from '../components/Header';

class Contact extends Component{
    render(){
        return(
            <div className="contact page">
                <div className="circle_pageBG"></div>
                <Header/>
                <h1 className="home_heading page_heading">Submit a help request and we’ll get in touch shortly.</h1>
            </div>
        )
    }
}

export default Contact;