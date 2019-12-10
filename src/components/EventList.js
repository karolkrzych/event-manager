import React from 'react';
import Event from './Event';
import EventDetails from './EventDetails';
import './EventList.css';


const EventList = (props) => {

    const id = props.currentId

    const sortedEvents = props.events.sort((a,b) => b.dateAdded - a.dateAdded)
    const detailedEvent = props.events.filter(detail => detail.id === id)
    const specificEvent = detailedEvent[0];

    const eventList = sortedEvents.map(event => <Event key={event.id} event={event} setCurrentId={props.setCurrentId} showEventDetails={props.showEventDetails}/>)
    
    return ( 

        <div className="card" style={{marginTop: 20}}>
            <div className="card-body border-0 rounded bg-secondary text-white">
                <div className="card-title eventListHeader"><h2 style={{textAlign: "center"}}>{props.isDetailActive ? "EVENT DETAILS" : "EVENT LIST"}</h2></div>
            </div >
            <div className="eventList" style={props.isDetailActive ? {overflow: "hidden"} : {overflow: "auto"}}>
                {props.isDetailActive ? <EventDetails detailedEvent={detailedEvent} specificEvent={specificEvent} showEventDetails={props.showEventDetails}/> : eventList}
                
                
            </div>
        </div>
        
     );
}
 
export default EventList;