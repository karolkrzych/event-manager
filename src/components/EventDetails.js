import React from 'react';
import './EventDetails.css';




const EventDetails = (props) => {
   
    const { title, date, location, typeOfEvent, phone, email, description } = props.specificEvent
    
    return (
        <div className="card detailsContainer">
            <div className="card-body">
            <h4 className="card-title detailsTitle"><b><i>{title}</i></b></h4>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Date:</b> <i className="text-muted col-8">{date}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Location:</b> <i className="text-muted col-8">{location}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Type:</b> <i className="text-muted col-8">{typeOfEvent}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Phone number:</b> <i className="text-muted col-8">{phone}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">E-mail:</b> <i className="text-muted col-8">{email}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Description:</b> <i className="text-muted col-8">{description}</i></h6>
            </div>


            </div>
            <div className="row">
            <button type="button" className="btn btn-outline-info eventInfo btn-block " onClick={props.showEventDetails}>Return to events</button>
            </div>
        </div>
      )
    }
 
export default EventDetails;