(this["webpackJsonpevent-manager"]=this["webpackJsonpevent-manager"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),s=a.n(i),o=(a(15),a(9)),c=a(1),r=a(2),m=a(4),d=a(3),v=a(5),h=(a(16),a(17),function(e){var t=e.event,a=t.title,n=t.date,i=t.id;return l.a.createElement("div",{className:"card eventElementColor"},l.a.createElement("div",{className:"card-body",onClick:function(){return e.setCurrentId(i)}},l.a.createElement("h5",{className:"card-title"},a),l.a.createElement("h6",{className:"card-subtitle mt-2 text-muted"},n)),l.a.createElement("button",{type:"button",className:"float-right btn btn-outline-info p-2",onClick:function(){return e.showEventDetails(i)}},"Show details"))}),u=(a(18),function(e){var t=e.specificEvent,a=t.title,n=t.date,i=t.location,s=t.typeOfEvent,o=t.phone,c=t.email,r=t.description;return l.a.createElement("div",{className:"card detailsContainer"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title detailsTitle"},l.a.createElement("b",null,l.a.createElement("i",null,a))),l.a.createElement("div",{className:"row"},l.a.createElement("h6",{className:"card-subtitle mt-3"},l.a.createElement("b",{className:"col-2"},"Date:")," ",l.a.createElement("i",{className:"text-muted col-8"},n))),l.a.createElement("div",{className:"row"},l.a.createElement("h6",{className:"card-subtitle mt-3"},l.a.createElement("b",{className:"col-2"},"Location:")," ",l.a.createElement("i",{className:"text-muted col-8"},i))),l.a.createElement("div",{className:"row"},l.a.createElement("h6",{className:"card-subtitle mt-3"},l.a.createElement("b",{className:"col-2"},"Type:")," ",l.a.createElement("i",{className:"text-muted col-8"},s))),l.a.createElement("div",{className:"row"},l.a.createElement("h6",{className:"card-subtitle mt-3"},l.a.createElement("b",{className:"col-2"},"Phone number:")," ",l.a.createElement("i",{className:"text-muted col-8"},o))),l.a.createElement("div",{className:"row"},l.a.createElement("h6",{className:"card-subtitle mt-3"},l.a.createElement("b",{className:"col-2"},"E-mail:")," ",l.a.createElement("i",{className:"text-muted col-8"},c))),l.a.createElement("div",{className:"row"},l.a.createElement("h6",{className:"card-subtitle mt-3"},l.a.createElement("b",{className:"col-2"},"Description:")," ",l.a.createElement("i",{className:"text-muted col-8"},r)))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{type:"button",className:"btn btn-outline-info eventInfo btn-block ",onClick:e.showEventDetails},"Return to events")))}),E=(a(19),function(e){var t=e.currentId,a=e.events.sort((function(e,t){return t.dateAdded-e.dateAdded})),n=e.events.filter((function(e){return e.id===t})),i=n[0],s=a.map((function(t){return l.a.createElement(h,{key:t.id,event:t,setCurrentId:e.setCurrentId,showEventDetails:e.showEventDetails})}));return l.a.createElement("div",{className:"card",style:{marginTop:20}},l.a.createElement("div",{className:"card-body border bg-secondary text-white"},l.a.createElement("div",{className:"card-title eventListHeader"},l.a.createElement("h2",{style:{textAlign:"center"}},e.isDetailActive?"EVENT DETAILS":"EVENT LIST"))),l.a.createElement("div",{className:"eventList",style:e.isDetailActive?{overflow:"hidden"}:{overflow:"auto"}},e.isDetailActive?l.a.createElement(u,{detailedEvent:n,specificEvent:i,showEventDetails:e.showEventDetails}):s))}),p=a(8),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).currentDate=(new Date).toISOString().slice(0,10),a.state={title:"",date:a.currentDate,location:"",typeOfEvent:"",phone:"",email:"",description:"",image:null,active:!1,errors:{title:!1,date:!1,location:!1,typeOfEvent:!1,phone:!1,email:!1,description:!1,title_validation_msg:"",location_validation_msg:"",typeOfEvent_validation_msg:"",phone_validation_msg:"",email_validation_msg:"",description_validation_msg:""},wasFormValidated:!1},a.messages={title_incorrect:"Must contain at least 4 up to 24 characters",date_incorrect:"Please insert a valid date",location_incorrect:"Must contain at least 4 up to 24 characters",typeOfEvent_incorrect:"Select one of the listed options",phone_incorrect:"Must be extaclly 9 digits",email_incorrect:'Must contain "@" sign and "." sign',description_incorrect:"Must contain at least 4 up to 64 characters"},a.formValidation=function(){var e=!1,t=!1,n=!1,l=!1,i=!1,s=!1,o=!1,c=!1,r="",m="",d="",v="",h="",u="",E="";return a.state.title.length>=4&&a.state.title.length<=24?(e=!0,r="valid"):(e=!1,r="invalid"),a.state.date?(t=!0,m="valid"):(t=!1,m="invalid"),a.state.location.length>=4&&a.state.location.length<=24?(n=!0,d="valid"):(n=!1,d="invalid"),""!==a.state.typeOfEvent?(l=!0,v="valid"):(l=!1,v="invalid"),9===a.state.phone.length?(i=!0,h="valid"):(i=!1,h="invalid"),-1!==a.state.email.indexOf("@")&&-1!==a.state.email.indexOf(".")?(s=!0,u="valid"):(s=!1,u="invalid"),a.state.description.length>=4&&a.state.description.length<=64?(o=!0,E="valid"):(o=!1,E="invalid"),e&&n&&l&&i&&s&&o&&(c=!0),{correct:c,title:e,date:t,location:n,typeOfEvent:l,phone:i,email:s,description:o,date_validation_msg:m,title_validation_msg:r,location_validation_msg:d,typeOfEvent_validation_msg:v,phone_validation_msg:h,email_validation_msg:u,description_validation_msg:E}},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,l=t.date,i=t.location,s=t.typeOfEvent,o=t.phone,c=t.email,r=t.description,m=a.formValidation();m.correct?(a.props.addEvent(n,l,i,s,o,c,r),a.setState({title:"",date:a.currentDate,location:"",typeOfEvent:"",phone:"",email:"",description:"",errors:{title:!1,date:!1,location:!1,typeOfEvent:!1,phone:!1,email:!1,description:!1},wasFormValidated:!1})):a.setState({errors:{title:!m.title,date:!m.date,location:!m.location,typeOfEvent:!m.typeOfEvent,phone:!m.phone,email:!m.email,description:!m.description,title_validation_msg:m.title_validation_msg,date_validation_msg:m.date_validation_msg,location_validation_msg:m.location_validation_msg,typeOfEvent_validation_msg:m.typeOfEvent_validation_msg,phone_validation_msg:m.phone_validation_msg,email_validation_msg:m.email_validation_msg,description_validation_msg:m.description_validation_msg},wasFormValidated:!0})},a.handleClear=function(e){e.preventDefault(),a.setState({title:"",date:a.currentDate,location:"",typeOfEvent:"",phone:"",email:"",description:"",wasFormValidated:!1})},a}return Object(v.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.currentDate;return l.a.createElement("form",{className:"border rounded form",noValidate:!0},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"title",className:"col-lg-2 col-md-3 col-sm-2 col-form-label"},"Title"),l.a.createElement("div",{className:"col-sm-10 col-md-9 col-lg-10"},l.a.createElement("input",{type:"text",name:"title",id:"title",className:"form-control ".concat(this.state.wasFormValidated?"is-"+this.state.errors.title_validation_msg:""),value:this.state.title,onChange:this.handleChange}),this.state.errors.title&&l.a.createElement("div",{className:"invalid-feedback"},this.messages.title_incorrect))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"location",className:"col-lg-2 col-md-3 col-sm-2 col-form-label"},"Location"),l.a.createElement("div",{className:"col-sm-10 col-md-9 col-lg-10"},l.a.createElement("input",{type:"text",name:"location",id:"location",className:"form-control ".concat(this.state.wasFormValidated?"is-"+this.state.errors.location_validation_msg:""),value:this.state.location,onChange:this.handleChange}),this.state.errors.location&&l.a.createElement("div",{className:"invalid-feedback"},this.messages.location_incorrect))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"date",className:"col-lg-2 col-md-3 col-sm-2 col-form-label"},"Date"),l.a.createElement("div",{className:"col-lg-6 col-md-9 col-sm-10"},l.a.createElement("input",{type:"date",name:"date",id:"date",className:"form-control ".concat(this.state.wasFormValidated?"is-"+this.state.errors.date_validation_msg:""),value:this.state.date||e,onChange:this.handleChange}),this.state.errors.date&&l.a.createElement("div",{className:"invalid-feedback"},this.messages.date_incorrect))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"typeOfEvent",className:"col-lg-2 col-md-3 col-sm-2 col-form-label"},"Type"),l.a.createElement("div",{className:"col-lg-6 col-md-9 col-sm-10"},l.a.createElement("select",{name:"typeOfEvent",className:"form-control ".concat(this.state.wasFormValidated?"is-"+this.state.errors.typeOfEvent_validation_msg:""),value:this.state.typeOfEvenet,onChange:this.handleChange},l.a.createElement("option",{value:""},"Choose..."),l.a.createElement("option",{value:"Sport"},"Sport"),l.a.createElement("option",{value:"Cultural"},"Cultural"),l.a.createElement("option",{value:"Health"},"Health")),this.state.errors.typeOfEvent&&l.a.createElement("div",{className:"invalid-feedback"},this.messages.typeOfEvent_incorrect))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"phone",className:"col-lg-2 col-md-3 col-sm-2 col-form-label"},"Phone number"),l.a.createElement("div",{className:"col-lg-6 col-md-9 col-sm-10"},l.a.createElement("input",{style:{marginTop:10},type:"number",name:"phone",id:"phone",className:"form-control ".concat(this.state.wasFormValidated?"is-"+this.state.errors.phone_validation_msg:""),value:this.state.phone,onChange:this.handleChange}),this.state.errors.phone&&l.a.createElement("div",{className:"invalid-feedback"},this.messages.phone_incorrect))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"email",className:"col-lg-2 col-md-3 col-sm-2 col-form-label"},"Email"),l.a.createElement("div",{className:"col-lg-6 col-md-9 col-sm-10"},l.a.createElement("input",{type:"email",name:"email",id:"email",className:"form-control ".concat(this.state.wasFormValidated?"is-"+this.state.errors.email_validation_msg:""),value:this.state.email,onChange:this.handleChange}),this.state.errors.email&&l.a.createElement("div",{className:"invalid-feedback"},this.messages.email_incorrect))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"description",className:"col-lg-2 col-md-3 col-sm-2 col-form-label"},"Description"),l.a.createElement("div",{className:"col-sm-10 col-md-9 col-lg-10"},l.a.createElement("textarea",{style:{maxHeight:200,minHeight:68},type:"text",name:"description",id:"description",className:"form-control ".concat(this.state.wasFormValidated?"is-"+this.state.errors.description_validation_msg:""),value:this.state.description,onChange:this.handleChange}),this.state.errors.description&&l.a.createElement("div",{className:"invalid-feedback"},this.messages.description_incorrect))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("button",{className:"btn btn-success btn-block",onClick:this.handleSubmit},"Submit")),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("button",{className:"btn btn-light btn-block",onClick:this.handleClear},"Clear"))))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={events:[{id:0,title:"Example event",description:"Just to check if everything looks fine.",typeOfEvent:"Sport",phone:"777777777",email:"example@email.com",location:"London",date:"2020-04-20",dateAdded:(new Date).getTime()}],isDetailActive:!1,currentId:0,formIsActive:!1,errors:{title:!1,date:!1,location:!1,typeOfEvent:!1,phone:!1,email:!1,description:!1}},a.counter=a.state.events.length,a.addEvent=function(e,t,n,l,i,s,c){var r={id:a.counter,title:e,date:t,location:n,typeOfEvent:l,phone:i,email:s,description:c,dateAdded:(new Date).getTime()};return a.counter++,a.setState((function(e){return{events:[].concat(Object(o.a)(e.events),[r])}})),!0},a.setCurrentId=function(e){a.setState({currentId:e})},a.handleFormActivation=function(){a.setState({formIsActive:!a.state.formIsActive})},a.showEventDetails=function(e){a.setState({isDetailActive:!a.state.isDetailActive,currentId:e})},a}return Object(v.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md formComponent"},l.a.createElement("button",{className:"btn ".concat(this.state.formIsActive?"btn-danger":"btn-primary"," formActivationButton btn-block"),onClick:this.handleFormActivation},this.state.formIsActive?"Cancel":"Add event"),this.state.formIsActive?l.a.createElement(f,{addEvent:this.addEvent}):null),l.a.createElement("div",{className:"col-md"},l.a.createElement(E,{events:this.state.events,setCurrentId:this.setCurrentId,currentId:this.state.currentId,isDetailActive:this.state.isDetailActive,showEventDetails:this.showEventDetails}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(20);s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7fe152e0.chunk.js.map