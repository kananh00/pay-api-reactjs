import React, {Component} from 'react';
import './component-styles/formStyle.css';

class Form extends Component{
    render(){
        return(
            <div className="form_contact">
                <form>
                    {this.props.rows===1 ? <input className="form_input" type={this.props.type} placeholder={this.props.placeholder}/> : <textarea className="form_input" rows={this.props.rows} type={this.props.type} placeholder={this.props.placeholder}/>}
                </form>
            </div>
        )
    }
}

export default Form;