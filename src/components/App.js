import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import AddEvent from './AddEvent';

class App extends Component {

  state = { 
      events: [
        {
          id: 0,
          title: 'Example event',
          description: 'Just to check if everything looks fine.',
          typeOfEvent: 'Sport',
          phone: '777777777',
          email: 'example@email.com',
          location: 'London',
          date: '2020-04-20',
          dateAdded: new Date().getTime(),
        },
      ],
      isDetailActive: false,
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

  showEventDetails = (id) => {
      this.setState({
        isDetailActive: !this.state.isDetailActive,
        currentId: id,
      })
  }

  render() { 

    return ( 
      <div className="container">
        <div className="row">

          <div className="col-sm formComponent">
            <button className={`btn ${this.state.formIsActive ? "btn-danger" : "btn-primary"} formActivationButton`} onClick={this.handleFormActivation}>{this.state.formIsActive ? "Cancel" : "Add event"}</button>
            {this.state.formIsActive ? <AddEvent addEvent={this.addEvent} /> : null}
          </div>

          <div className="col-sm">
            <EventList events={this.state.events} setCurrentId={this.setCurrentId} currentId={this.state.currentId} isDetailActive={this.state.isDetailActive} showEventDetails={this.showEventDetails}/>
          </div>
        </div>

        {/* <div>
            <EventDetails events={this.state.events} title={this.state.events.title} currentId={this.state.currentId}/>
        </div> */}

      </div>  

      
     );
  }
}
 
export default App;