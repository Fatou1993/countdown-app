import React from "react";
import Event from "./Event";

const Events = props => {
  const { events } = props;
  events.sort((a, b) => a.date - b.date);
  return events.length == 0 ? (
    <div>No events</div>
  ) : (
    <React.Fragment>
      <div id="closest-event">{<Event {...events[0]} />}</div>
      <div id="events-list">
        {events.map((event, idx) => (
          <Event key={idx} {...event} />
        ))}
        <button className="delete-events" onClick={props.deleteEvents}>
          Delete all events
        </button>
      </div>
    </React.Fragment>
  );
};

export default Events;
