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
import Corparation from '../components/Corparation';
import Heading from '../commons/Heading';
class Home extends Component{
    render(){
        return(
            <div className="home">
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
            </div>
        )
    }
}
export default Home;