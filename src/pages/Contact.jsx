import React, {Component} from 'react';
import './contactStyle.css';
import Form from '../components/Form';
import Corparation from '../components/Corparation';
import { ReadyToStart } from '../components/ReadyToStart';

class Contact extends Component{
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
                                <Form/>
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