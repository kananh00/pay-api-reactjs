import React, {Component} from 'react';
import './component-styles/formStyle.css';
import checkedIcon from '../assets/shared/desktop/icon-check.svg';

class Form extends Component{
    state = {
        fields: {},
        errors: {},
        inputisValid: true,
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
    handleInputValidation(){
        let fields = this.state.fields;
        let errors = {};
        this.setState({inputisValid: true});

        //name
        if(!fields["name"]){
            errors["name"] = 'This field can’t be empty'
        }
        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
                this.setState({inputisValid: false});
                errors["name"] = "Should use only letters";
            }
        }

        //email
        if(!fields["email"]){
            this.setState({inputisValid: false});
            errors["email"] = "This field can’t be empty";
         }
   
         if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                this.setState({inputisValid: false});
               errors["email"] = "Email is not valid";
             }
        } 

        //others
        //company
        if(!fields["company"]){
            errors["company"] = 'This field can’t be empty'
        }
        //title
        if(!fields["title"]){
            errors["title"] = 'This field can’t be empty'
        }
        //message
        if(!fields["message"]){
            errors["message"] = 'This field can’t be empty'
        }

        this.setState({errors: errors});
    }
    contactSubmit(e){
        e.preventDefault();
        this.handleInputValidation();
  
    }
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    render(){
        return(
            <div className="form_contact">
                <form onSubmit = {this.contactSubmit.bind(this)}>
                    {/* {this.state.inputisValid ?  <input onChange={this.handleChange.bind(this, this.props.name)} value={this.state.fields[this.props.name]} className="form_input" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/> : <input onChange={this.handleChange.bind(this, this.props.name)} value={this.state.fields[this.props.name]} className="form_input error_input" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>}
                    <span className="error_msg">{this.state.errors[this.props.name]}</span> */}
                    <input 
                        onChange={this.handleChange.bind(this, "name")} 
                        value={this.state.fields["name"]} 
                        className={`form_input ${this.state.inputisValid ? "" : "error_input"}`}
                        type="text" 
                        name="name" 
                        placeholder="Name"
                    />
                    <span className="error_msg">{this.state.errors["name"]}</span>
                    <input 
                        onChange={this.handleChange.bind(this, "email")} 
                        value={this.state.fields["email"]} 
                        className={`form_input ${this.state.inputisValid ? "" : "error_input"}`}
                        type="email" 
                        name="email"
                        placeholder="Email Adress"
                    />
                    <span className="error_msg">{this.state.errors["email"]}</span>
                    <input 
                        onChange={this.handleChange.bind(this, "company")} 
                        value={this.state.fields["company"]} 
                        className={`form_input ${this.state.inputisValid ? "" : "error_input"}`}
                        type="text" 
                        name="company"
                        placeholder="Company Name"
                    />
                    <span className="error_msg">{this.state.errors["company"]}</span>
                    <input 
                        onChange={this.handleChange.bind(this, "title")} 
                        value={this.state.fields["title"]} 
                        className={`form_input ${this.state.inputisValid ? "" : "error_input"}`}
                        type="text" 
                        name="title"
                        placeholder="Title"
                    />
                    <span className="error_msg">{this.state.errors["title"]}</span>
                    <textarea
                        rows='3'
                        onChange={this.handleChange.bind(this, "message")} 
                        value={this.state.fields["message"]} 
                        className={`form_input ${this.state.inputisValid ? "" : "error_input"}`}
                        type="text"
                        name="message"
                        placeholder="Message"
                    />
                    <span className="error_msg">{this.state.errors["message"]}</span>
                    <div className="checkLine">
                        {!this.state.checkboxIsChecked ? <div onClick={this.onCheckboxClick} className="checkbox"></div> : <div onClick={this.onCheckboxClick} className="checkbox check_clicked"><img className="checkbox_icon" src={checkedIcon} alt="check icon"/></div>}
                        <p className="checkbox_text">Stay up-to-date with company announcements and updates to our API</p>
                    </div>
                    <input type="submit" className="submit_btn" value="Submit"/>
                    {/* <ButtonMain btnName='Submit' color='#36536B' padding='16px 50px 14px 50px' marginBottom='75px'/> */}
                </form>
            </div>
        )
    }
}

export default Form;