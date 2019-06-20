import React from "react";
import { Consumer } from "./EventContext";

class EventForm extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <form id="event-form">
            <label htmlFor="event-name">
              <h3>Event Name</h3>
              <input
                id="event-name"
                type="text"
                value={context.eventName}
                onChange={context.handleEventNameChange}
                placeholder="Event Name"
                required
              />
            </label>
            <label htmlFor="event-date">
              <h3>Event Date</h3>
              <input
                id="event-date"
                onChange={context.handleEventDateChange}
                value={context.eventDate}
                type="date"
                required
              />
            </label>
            <label htmlFor="event-time">
              <h3>Event Time</h3>
              <input
                id="event-time"
                onChange={context.handleEventTimeChange}
                value={context.eventTime}
                type="time"
              />
            </label>
            <button type="submit" onClick={context.saveEvent}>
              Start
            </button>
          </form>
        )}
      </Consumer>
    );
  }
}

export default EventForm;
