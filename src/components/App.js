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
   
counter = this.state.events.length
  
  addEvent = (title, date, location, typeOfEvent, phone, email, description) => {

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