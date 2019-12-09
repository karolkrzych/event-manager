import React from 'react';
import Event from './Event';
import EventDetails from './EventDetails';
import './EventList.css';


const EventList = (props) => {

    const id = props.currentId

    const sortedEvents = props.events.sort((a,b) => b.dateAdded - a.dateAdded)
    const detailedEvent = props.events.filter(detail => detail.id === id)

    const eventList = sortedEvents.map(event => <Event key={event.id} event={event} setCurrentId={props.setCurrentId}/>)
    
    console.log(detailedEvent)
    return ( 

        <div className="card" style={{marginTop: 20}}>
            <div className="card-body border bg-secondary text-white">
                <div className="card-title eventListHeader"><h2 style={{textAlign: "center"}}>EVENT LIST</h2></div>
            </div >
            <div className="eventList" >
                {props.isDetailActive ? <EventDetails detailedEvent={detailedEvent}/> : eventList}
                
                
            </div>
        </div>
        
     );
}
 
export default EventList;