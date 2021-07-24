import React, {Component} from 'react';
import {Button} from '../components/ScheduleBtn'
import {EmailInput} from '../components/EmailInput'
import Header from '../components/Header.jsx'
import {ButtonMain} from '../components/ButtonMain'
import './homeStyle.css'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'
import mobile from '../assets/home/desktop/illustration-phone-mockup.svg'
import implement from '../assets/home/desktop/illustration-easy-to-implement.svg'
import ui from '../assets/home/desktop/illustration-simple-ui.svg'
import finance from '../assets/home/desktop/icon-personal-finances.svg'
import payments from '../assets/home/desktop/icon-consumer-payments.svg'
import banking from '../assets/home/desktop/icon-banking-and-coverage.svg'
import Corparation from '../components/Corparation';
import Heading from '../commons/Heading';
import Advantages from '../components/Advantages';
import { ReadyToStart } from '../components/ReadyToStart';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="circle"></div>
                <Header/>
                {/* <div className="bg-circle">
                    <img src={bgCircle} alt="bg-circle"></img>
                </div> */}
                <div className="mob_img">
                    <img src={mobile} alt="mobile image"/>
                </div>
                <h1 className="home_heading">Start building with our<br></br> APIs for absolutely<br></br> free.</h1>
                <EmailInput/>
                <Button btnText='Schedule a Demo'/>
                <p className="questions_txt">Have any questions?<span className="bold_txt"> Contact Us</span></p>

                <div className="corporation">
                    <Corparation/>
                    <Heading heading_name='Who we work with' text='Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.' color='#FBFCFE'/>
                    <ButtonMain btnName='About us'/>
                </div>

                <div className="implement">
                    <div className="implement_image">
                        <img src={implement} alt="implement"/>
                    </div>
                    <Heading heading_name='Easy to implement' text='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.' color='#6C8294'/>
                </div>

            <div className="ui_ux">
                <div className="ui_img">
                    <img src={ui} alt="simple_ui"/>
                </div>
                <Heading heading_name='Simple UI & UX' text='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.' color='#6C8294'/>
            </div>
            

            <Advantages advImg={finance} heading='Personal Finances' text='Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. '/>
            <Advantages advImg={payments} heading='Banking & Coverage' text='With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.'/>
            <Advantages advImg={banking} heading='Consumer Payments' text='It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.'/>

            <ReadyToStart/>
            <Footer/>
            
            </div>
        )
    }
}
export default Home;