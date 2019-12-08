import React from 'react';
import './Event.css';


const Event = (props) => {

    

    const {title, date, id} = props.event

    return ( 

        <div className="card" >
            <div className="card-body" onClick={() => props.setCurrentId(id)}>
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
            </div>
            <button type="button" className="btn btn-outline-info info">Show details</button>
        </div>

     );
}
 
export default Event;