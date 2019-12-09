import React, { Component } from 'react';

class AddEvent extends Component {
    currentDate = new Date().toISOString().slice(0,10);
    
    state = { 
        title: '',
        date: this.currentDate,
        location: '',
        typeOfEvent: '',
        phone: '',
        email: '',
        description: '',
        image: null,
        active: false,

        errors: {
            title: false,
            date: false,
            location: false,
            typeOfEvent: false,
            phone: false,
            email: false,
            description: false,
            title_validation_msg:"",
            location_validation_msg:"",
            typeOfEvent_validation_msg:"",
            phone_validation_msg:"",
            email_validation_msg:"",
            description_validation_msg:"",
        },

        wasFormValidated: false,
     }
     
     messages = {
        title_incorrect: 'Must contain at least 4 up to 24 characters',
        date_incorrect: 'Please insert a valid date',
        location_incorrect: 'Must contain at least 4 up to 24 characters',
        typeOfEvent_incorrect: 'Select one of the listed options',
        phone_incorrect: 'Must be extaclly 9 digits',
        email_incorrect: 'Must contain "@" sign and "." sign',
        description_incorrect: 'Must contain at least 4 up to 64 characters',
     }

     formValidation = () => {

        let title = false;
        let date = false;
        let location = false;
        let typeOfEvent = false;
        let phone = false;
        let email = false;
        let description = false;
        let correct = false;
        let title_validation_msg = "";
        let date_validation_msg = "";
        let location_validation_msg = "";
        let typeOfEvent_validation_msg = "";
        let phone_validation_msg = "";
        let email_validation_msg = "";
        let description_validation_msg = "";

        if(this.state.title.length >= 4 && this.state.title.length <= 24) {
            title = true;
            title_validation_msg = "valid";
        } else {
            title = false;
            title_validation_msg = "invalid";
        }
        if(this.state.date) {
            date = true;
            date_validation_msg = "valid";
        } else {
            date = false;
            date_validation_msg = "invalid";
        }

        if(this.state.location.length >= 4 && this.state.location.length <= 24) {
            location = true;
            location_validation_msg = "valid";
        } else {
            location = false;
            location_validation_msg = "invalid";
        }

        if(this.state.typeOfEvent !== "") {
            typeOfEvent = true;
            typeOfEvent_validation_msg = "valid";
        } else {
            typeOfEvent = false;
            typeOfEvent_validation_msg = "invalid";
        }
        if(this.state.phone.length === 9) {
            phone = true;
            phone_validation_msg = "valid";
        } else {
            phone = false;
            phone_validation_msg = "invalid";
        }
        if(this.state.email.indexOf('@') !== -1 && this.state.email.indexOf('.') !== -1) {
            email = true;
            email_validation_msg = "valid";
        } else {
            email = false;
            email_validation_msg = "invalid";
        }
        if(this.state.description.length >= 4 && this.state.description.length <= 64) {
            description = true;
            description_validation_msg = "valid";
        } else {
            description = false;
            description_validation_msg = "invalid";
        }
        if(title && location && typeOfEvent && phone && email && description) {
            correct = true;
        }
        return ({
            correct,
            title,
            date,
            location,
            typeOfEvent,
            phone,
            email,
            description,
            date_validation_msg,
            title_validation_msg,
            location_validation_msg,
            typeOfEvent_validation_msg,
            phone_validation_msg,
            email_validation_msg,
            description_validation_msg,
        })
     }

     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     handleSubmit = (e) => {
        
        e.preventDefault();

        const {title, date, location, typeOfEvent, phone, email, description} = this.state

        const validation = this.formValidation()
        
        if(validation.correct) {
            this.props.addEvent(title, date, location, typeOfEvent, phone, email, description)

            this.setState({
                title: '',
                date: this.currentDate,
                location: '',
                typeOfEvent: "",
                phone: '',
                email: '',
                description: '' ,

                errors: {
                    title: false,
                    date: false,
                    location: false,
                    typeOfEvent: false,
                    phone: false,
                    email: false,
                    description: false,
                },
                wasFormValidated: false,
            })
        } else {
            this.setState({
                errors: {
                    title: !validation.title,
                    date: !validation.date,
                    location: !validation.location,
                    typeOfEvent: !validation.typeOfEvent,
                    phone: !validation.phone,
                    email: !validation.email,
                    description: !validation.description,
                    title_validation_msg: validation.title_validation_msg,
                    date_validation_msg: validation.date_validation_msg,
                    location_validation_msg: validation.location_validation_msg,
                    typeOfEvent_validation_msg: validation.typeOfEvent_validation_msg,
                    phone_validation_msg: validation.phone_validation_msg,
                    email_validation_msg: validation.email_validation_msg,
                    description_validation_msg: validation.description_validation_msg,
                },
                wasFormValidated: true,
            })
        }
     }

     handleClear = (e) => {
        
         e.preventDefault();
            this.setState({
                title: '',
                date: this.currentDate,
                location: '',
                typeOfEvent: '',
                phone: '',
                email: '',
                description: '' ,
                wasFormValidated: false,
            })
            
        }
     
    

    render() { 
      
        let minDate = this.currentDate;
        
        return ( 
           
            
            <form className="border rounded form" noValidate>

                <div className="form-group row">
                    <label htmlFor="title" className="col-lg-2 col-md-3 col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10 col-md-9 col-lg-10">
                        <input type="text" name="title" id="title" className={`form-control ${this.state.wasFormValidated ? "is-"+this.state.errors.title_validation_msg : ""}`} value={this.state.title} onChange={this.handleChange}/>

                        {this.state.errors.title && <div className="invalid-feedback">{this.messages.title_incorrect}</div>}
                    </div>
                </div>


                <div className="form-group row">
                    <label htmlFor="location" className="col-lg-2 col-md-3 col-sm-2 col-form-label">Location</label>
                    <div className="col-sm-10 col-md-9 col-lg-10">
                        <input type="text" name="location" id="location" className={`form-control ${this.state.wasFormValidated ? "is-"+this.state.errors.location_validation_msg : ""}`} value={this.state.location} onChange={this.handleChange}/>
                        {this.state.errors.location && <div className="invalid-feedback">{this.messages.location_incorrect}</div>}
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="date" className="col-lg-2 col-md-3 col-sm-2 col-form-label">Date</label>
                    <div className="col-lg-6 col-md-9 col-sm-10">
                        <input type="date"  name="date"  id="date" className={`form-control ${this.state.wasFormValidated ? "is-"+this.state.errors.date_validation_msg : ""}`}  value={this.state.date || minDate} onChange={this.handleChange}/>
                        {this.state.errors.date && <div className="invalid-feedback">{this.messages.date_incorrect}</div>}
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="typeOfEvent" className="col-lg-2 col-md-3 col-sm-2 col-form-label">Type</label>
                    <div className="col-lg-6 col-md-9 col-sm-10">
                        <select name="typeOfEvent" className={`form-control ${this.state.wasFormValidated ? "is-"+this.state.errors.typeOfEvent_validation_msg : ""}`} value={this.state.typeOfEvenet} onChange={this.handleChange}>
                            <option value="">Choose...</option>
                            <option value="Sport">Sport</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Health">Health</option>
                        </select>
                        {this.state.errors.typeOfEvent && <div className="invalid-feedback">{this.messages.typeOfEvent_incorrect}</div>}
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phone" className="col-lg-2 col-md-3 col-sm-2 col-form-label">Phone number</label>
                    <div className="col-lg-6 col-md-9 col-sm-10">
                        <input style={{marginTop: 10}}type="number" name="phone" id="phone" className={`form-control ${this.state.wasFormValidated ? "is-"+this.state.errors.phone_validation_msg : ""}`} value={this.state.phone} onChange={this.handleChange}/>
                        {this.state.errors.phone && <div className="invalid-feedback">{this.messages.phone_incorrect}</div>}
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="email" className="col-lg-2 col-md-3 col-sm-2 col-form-label">Email</label>
                    <div className="col-lg-6 col-md-9 col-sm-10">
                        <input type="email" name="email" id="email" className={`form-control ${this.state.wasFormValidated ? "is-"+this.state.errors.email_validation_msg : ""}`} value={this.state.email} onChange={this.handleChange}/>
                        {this.state.errors.email && <div className="invalid-feedback">{this.messages.email_incorrect}</div>}
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="description" className="col-lg-2 col-md-3 col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10 col-md-9 col-lg-10">
                        <textarea style={{maxHeight: 200, minHeight: 68}} type="text" name="description" id="description" className={`form-control ${this.state.wasFormValidated ? "is-"+this.state.errors.description_validation_msg : ""}`} value={this.state.description} onChange={this.handleChange}/>
                        {this.state.errors.description && <div className="invalid-feedback">{this.messages.description_incorrect}</div>}
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-6">
                        <button className="btn btn-success btn-block" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-light btn-block" onClick={this.handleClear}>Clear</button>
                    </div>
                </div>

            </form>
         );
    }
}
 
export default AddEvent;