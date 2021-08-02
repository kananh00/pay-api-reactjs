import React, {Component} from 'react';
import './component-styles/formStyle.css';

class Form extends Component{
    state = {
        fields: {},
        errors: {},
        inputisValid: true
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
                    {this.state.inputisValid ?  <input onChange={this.handleChange.bind(this, this.props.name)} value={this.state.fields[this.props.name]} className="form_input" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/> : <input onChange={this.handleChange.bind(this, this.props.name)} value={this.state.fields[this.props.name]} className="form_input error_input" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>}
                    <span className="error_msg">{this.state.errors[this.props.name]}</span>
                </form>
            </div>
        )
    }
}

export default Form;