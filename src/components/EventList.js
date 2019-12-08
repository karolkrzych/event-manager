import React from 'react';
import Event from './Event';
import './EventList.css';


const EventList = (props) => {



    const sortedEvents = props.events.sort((a,b) => b.dateAdded - a.dateAdded)

    const eventList = sortedEvents.map(event => <Event key={event.id} event={event} setCurrentId={props.setCurrentId}/>)

    return ( 

        <div className="card" style={{marginTop: 20}}>
            <div className="card-body border bg-secondary text-white">
                <div className="card-title eventListHeader"><h2 style={{textAlign: "center"}}>EVENT LIST</h2></div>
            </div >
            <div className="eventList" >
                {eventList}
            </div>
        </div>
        
     );
}
 
export default EventList;