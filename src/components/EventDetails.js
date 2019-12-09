import React from 'react';
import './EventDetails.css';




const EventDetails = (props) => {
   
    const { title, date, location, typeOfEvent, phone, email, description } = props.specificEvent
    
    return (
        <div className="card detailsContainer">
            <div className="card-body">
            <h4 className="card-title detailsTitle"><b><i>{title}</i></b></h4>
            <h6 className="card-subtitle mt-3"><b>When:</b> <i className="text-muted">{date}</i></h6>
            <h6 className="card-subtitle mt-3"><b>Where:</b> <i className="text-muted">{location}</i></h6>
            <h6 className="card-subtitle mt-3"><b>Type:</b> <i className="text-muted">{typeOfEvent}</i></h6>
            <h6 className="card-subtitle mt-3"><b>Phone number:</b> <i className="text-muted">{phone}</i></h6>
            <h6 className="card-subtitle mt-3"><b>E-mail:</b> <i className="text-muted">{email}</i></h6>
            <h6 className="card-subtitle mt-3"><b>Description:</b> <i className="text-muted">{description}</i></h6>



            </div>
            <div className="row">
            <button type="button" className="btn btn-outline-info eventInfo btn-block " onClick={props.showEventDetails}>Return to events</button>
            </div>
        </div>
      )
    }
 
export default EventDetails;