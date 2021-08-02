import React, {Component} from 'react';
import './aboutStyle.css'
import Header from '../components/Header';
import teamMob from '../assets/about/mobile/image-team-members.jpg'
import teamTablet from '../assets/about/tablet/image-team-members.jpg'
import teamDesk from '../assets/about/desktop/image-team-members.jpg'
import { ReadyToStart } from '../components/ReadyToStart';
import { Footer } from '../components/Footer';
import TeamInfo from '../components/TeamInfo';
class About extends Component{
    render(){
        return(
            <div className="about page">
                <div className="circle_pageBG"></div>
                {/* <Header/> */}
                <h1 className="home_heading page_heading">We empower innovators by delivering access to the financial system</h1>

                <div className="about_content">
                    <h2 className="heading_content text_color">Our Vision</h2>
                    <p className="text text_color text_about">Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
                </div>

                <div className="about_content">
                    <h2 className="heading_content text_color">Our Business</h2>
                    <p className="text text_color text_about">At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. </p>
                </div>

                <img className="team_img_mob" src={teamMob} alt="team members"/>
                <img className="team_img_tablet" src={teamTablet} alt="team members"/>
                <img className="team_img_desk" src={teamDesk} alt="team members"/>

                <div className="team">
                    <div className="container">
                        <diw className="row">
                            <div className="col-12 col-md-4">
                                <TeamInfo infoName='Team Members' info='300+'/>
                            </div>
                            <div className="col-12 col-md-4 p-0">
                                <TeamInfo infoName='Offices in the US' info='3'/>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="last_team_info">
                                    <TeamInfo infoName='Transactions analyzed' info='10M+'/>
                                </div>
                            </div>
                        </diw>
                    </div>
                </div>
                
                <div className="about_content">
                    <h2 className="heading_content text_color">The Culture</h2>
                    <p className="text text_color text_about">We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
                </div>  
                <div className="about_content">
                    <h2 className="heading_content text_color">The People</h2>
                    <p className="text text_color text_about"> We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>
                </div>  

                <ReadyToStart/>
                {/* <Footer/> */}
            </div>    
        )
    }
}

export default About;