import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import AddEvent from './AddEvent';


class App extends Component {
  counter = 1;
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

  UNSAFE_componentWillMount() {
    const EventsInLocalStorage = JSON.parse(localStorage.getItem('state'))
    console.log(EventsInLocalStorage)
    if(EventsInLocalStorage === null) {
      localStorage.setItem('state', JSON.stringify(this.state.events)) 
    } 
    else {
      this.setState({
        events: EventsInLocalStorage
      })
      this.counter = EventsInLocalStorage.length
    } 
    
  }


  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state.events))
  }

  render() { 
    return ( 
      <div className="container">
        <div className="row">

          <div className="col-md formComponent">
            <button className={`btn ${this.state.formIsActive ? "btn-danger" : "btn-primary"} formActivationButton btn-block`} onClick={this.handleFormActivation}>{this.state.formIsActive ? "Cancel" : "Add event"}</button>
            {this.state.formIsActive ? <AddEvent addEvent={this.addEvent} /> : null}
          </div>

          <div className="col-md">
            <EventList events={this.state.events} setCurrentId={this.setCurrentId} currentId={this.state.currentId} isDetailActive={this.state.isDetailActive} showEventDetails={this.showEventDetails}/>
          </div>
        </div>


      </div>  

      
     );
  }
}
 
export default App;