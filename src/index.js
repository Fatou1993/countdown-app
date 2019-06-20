import Events from "./components/Events.js";
import EventForm from "./components/EventForm.js";

const events = new Events();
events.initialize();

const eventForm = new EventForm();
eventForm.initialize();
eventForm.subscribe(events.saveEvent);

events.render();
events.renderClosestEvent();
//events.render();
