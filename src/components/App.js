import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import AddEvent from './AddEvent';
import EventDetails from './EventDetails';

class App extends Component {

  state = { 
      events: [
        {
          id: 0,
          title: 'pozmywać naczynia',
          description: 'wziąć i te naczynia po prostu pozmywać',
          typeOfEvent: 'sport',
          phone: '111111111',
          email: 'ciap@ciap.pl',
          location: 'gliwice',
          date: '2019-12-12',
          dateAdded: new Date().getTime(),
        },
        {
          id: 1,
          title: 'wynieść śmieci',
          description: 'wziąć i te śmieci po prostu wynieść',
          typeOfEvent: 'cultural',
          phone: '222222222',
          email: 'tak@tak.pl',
          location: 'zabrze',
          date: '2020-01-30',
          dateAdded: new Date().getTime(),
        },        {
          id: 2,
          title: 'odkurzyć miejsca',
          description: 'wziąć i te miejsca po prostu odkurzyć',
          typeOfEvent: 'health',
          phone: '3333333',
          email: 'aaa@aaaaa.pl',
          location: 'katowice',
          date: '2019-03-30',
          dateAdded: new Date().getTime(),
        },
        {
          id: 3,
          title: 'aaaaaaa',
          description: 'wziąć i te miejsca po prostu odkurzyć',
          typeOfEvent: 'health',
          phone: '3333333',
          email: 'aaa@aaaaa.pl',
          location: 'katowice',
          date: '2019-03-30',
          dateAdded: new Date().getTime(),
        },
        {
          id: 4,
          title: 'aaaaaaa',
          description: 'wziąć i te miejsca po prostu odkurzyć',
          typeOfEvent: 'health',
          phone: '3333333',
          email: 'aaa@aaaaa.pl',
          location: 'katowice',
          date: '2019-03-30',
          dateAdded: new Date().getTime(),
        },
        {
          id: 5,
          title: 'aaaaaaa',
          description: 'wziąć i te miejsca po prostu odkurzyć',
          typeOfEvent: 'health',
          phone: '3333333',
          email: 'aaa@aaaaa.pl',
          location: 'katowice',
          date: '2019-03-30',
          dateAdded: new Date().getTime(),
        },

      ],
      currentId: 0,
      formIsActive: false,
      errors: {
        title: false,
        date: false,
        location: false,
        typeOfEvent: false,
        phone: false,
        email: false,
        description: false,
    }
   }
   messages = {
    title_incorrect: 'Must contain at least 4 up to 16 characters',
    date: 'Please insert possible date',
    location: 'Must contain at least 4 up to 16 characters',
    typeOfEvent: 'Select one of the listed options',
    phone: 'Must be extaclly 9 digits',
    email: 'Must contain "@" sign and "." sign',
    description: 'Must contain at least 4 up to 64 characters',
 }

 formValidation = () => {

    let title = false;
    // let date = false;
    let location = false;
    let typeOfEvent = false;
    let phone = false;
    let email = false;
    let description = false;
    let correct = false;

    if(this.state.title.length >= 4 && this.state.title.length <= 16) {
        title = true;
    }
    // if(this.state.date)

    if(this.state.location.length >= 4 && this.state.location.length <= 16) {
        title = true;
    }

    if(this.state.typeOfEvent !== "") {
        typeOfEvent = true;
    }
    if(this.state.location.length === 9) {
        phone = true;
    }
    if(this.state.email.indexOf('@') !== -1 && this.state.email.indexOf('.') !== -1) {
        email = true;
    }
    if(this.state.description.length >= 4 && this.state.description.length <= 64) {
        description = true;
    }
    if(title && location && typeOfEvent && phone && email && description) {
        correct = true;
    }
    return ({
        correct,
        title,
        location,
        typeOfEvent,
        phone,
        email,
        description
    })
 }


counter = this.state.events.length
  
  addEvent = (title, date, location, typeOfEvent, phone, email, description) => {

    const validation = this.formValidation()

    if(validation.correct) {
        const addEvent = this.props.addEvent(title, date, location, typeOfEvent, phone, email, description)
        if(addEvent) {
        this.setState({
            title: '',
            date: '',
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
            }
        })} 
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
            }
        })
    }


    const event = {
      id: this.counter,
      title,
      date,
      location,
      typeOfEvent,
      phone,
      email,
      description,
      dateAdded: new Date().getTime(),
    }
    this.counter++;
    this.setState(prevState => ({
      events: [...prevState.events, event]
    }))
    return true
  }

  // aa = null;

  setCurrentId = (id) => {
    this.setState({
      currentId: id
    })
  }

  handleFormActivation = () => {
    this.setState({
      formIsActive: !this.state.formIsActive
    })
  }

  render() { 

    console.log(this.aa)

    return ( 
      <div className="container">
        <div className="row">

          <div className="col-sm formComponent">
            <button className="btn btn-primary formActivationButton" onClick={this.handleFormActivation}>Add event</button>
            {this.state.formIsActive ? <AddEvent addEvent={this.addEvent} /> : null}
          </div>

          <div className="col-sm">
            {<EventList events={this.state.events} setCurrentId={this.setCurrentId}/>} 
          </div>
        </div>

        <div>
            <EventDetails events={this.state.events} currentId={this.state.currentId}/>
        </div>

      </div>  

      
     );
  }
}
 
export default App;