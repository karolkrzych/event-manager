import React from 'react';
import './EventDetails.css';




const EventDetails = (props) => {
   
    const { title, date, location, typeOfEvent, phone, email, description } = props.specificEvent
    
    return (
      
        <div className="card border-0 detailsContainer">
            <div className="card-body">
            <h4 className="card-title detailsTitle"><b><i>{title}</i></b></h4>
            {/* <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Date:</b> <i className="card-text text-muted">{date}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Location:</b> <i className="card-text text-muted">{location}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Type:</b> <i className="card-text text-muted">{typeOfEvent}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Phone number:</b> <i className="card-text text-muted">{phone}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">E-mail:</b> <i className="card-text text-muted">{email}</i></h6>
            </div>
            <div className="row">
            <h6 className="card-subtitle mt-3"><b className="col-2">Description:</b> <i className="card-text text-muted">{description}</i></h6>
            </div> */}

            <div className="p-2 border-bottom">
                <div className="d-inline ml-2 font-weight-bold font-italic float-left">Date: </div>
                <div className="d-block mx-auto font-italic text-muted" style={{width:"50%"}}>{date}</div>
            </div>
            <div className="p-2 border-bottom">
                <div className="d-inline ml-2 font-weight-bold font-italic float-left">Location:</div>
                <div className="d-block mx-auto font-italic text-muted" style={{width:"50%"}}>{location}</div>
            </div>
            <div className="p-2 border-bottom">
                <div className="d-inline ml-2 font-weight-bold font-italic float-left">Type:</div>
                <div className="d-block mx-auto font-italic text-muted" style={{width:"50%"}}>{typeOfEvent}</div>
            </div>
            <div className="p-2 border-bottom">
                <div className="d-inline ml-2 font-weight-bold font-italic float-left">Phone:</div>
                <div className="d-block mx-auto font-italic text-muted" style={{width:"50%"}}>{phone}</div>
            </div>
            <div className="p-2 border-bottom">
                <div className="d-inline ml-2 font-weight-bold font-italic float-left">E-mail:</div>
                <div className="d-block mx-auto font-italic text-muted" style={{width:"50%"}}>{email}</div>
            </div>
            <div className="p-2 border-bottom">
                <div className="d-inline ml-2 font-weight-bold font-italic float-left">Description:</div>
                <div className="d-block mx-auto font-italic text-muted" style={{width:"50%"}}>{description}</div>
            </div>


            </div>
            <div className="row">
            <button type="button" className="btn btn-outline-secondary eventInfo align-self-end btn-block " onClick={props.showEventDetails}>Return to events</button>
            </div>
        </div>
      )
    }
 
export default EventDetails;