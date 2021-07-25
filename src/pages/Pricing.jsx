import React, {Component} from 'react';
import './pricingStyle.css';
import Header from '../components/Header';
import PricingElement from '../components/PricingElement';
import { ReadyToStart } from '../components/ReadyToStart';
import { Footer } from '../components/Footer';
class Pricing extends Component{
    state = {
        checked: [
            true,
            true,
            true,
            false,
            false,
            false,
            false
        ],
        checked2: [
            true,
            true,
            true,
            true,
            true,
            false,
            false
        ],
        checked3: [
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        name: [
            'Transactions',
            'Auth',
            'Identity',
            'Investments',
            'Assets',
            'Liabilities',
            'Income'
        ]
    }

    secondPricing = () => {
        this.setState({checked: [true,true,true,true,true,false,false]})
    }
    render(){
        return(
            <div className="pricing page">
                <div className="circle_pageBG"></div>
                <Header/>
                <h1 className="home_heading page_heading">Pricing</h1>

                <PricingElement heading='Free Plan' price='$0.00' name={this.state.name} checked={this.state.checked}/>
                <PricingElement heading='Basic Plan' price='$249.00' name={this.state.name} checked={this.state.checked2}/>
                <PricingElement heading='Premium Plan' price='$499.00' name={this.state.name} checked={this.state.checked3}/>
                <ReadyToStart/>
                <Footer/>
                
            </div>
        )
    }
}

export default Pricing;