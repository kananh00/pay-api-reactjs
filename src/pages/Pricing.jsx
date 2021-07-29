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
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <PricingElement heading='Free Plan' text='Build and test using our core set of products with up to 100 API requests ' price='$0.00' name={this.state.name} checked={this.state.checked}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <PricingElement heading='Basic Plan' text='Launch your project with unlimited requests and no contractual minimums ' price='$249.00' name={this.state.name} checked={this.state.checked2}/>
                        </div>
                        <div className="col-12 col-md-4">
                            <PricingElement heading='Premium Plan' text='Get tailored solutions, volume pricing, and dedicated support for your team ' price='$499.00' name={this.state.name} checked={this.state.checked3}/>
                        </div>
                    </div>
                </div>
    
                <ReadyToStart/>
                <Footer/>
                
            </div>
        )
    }
}

export default Pricing;