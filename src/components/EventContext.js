import React from "react";

const EventContext = React.createContext({
  eventName: "",
  eventDate: "",
  eventTime: "",
  handleEventNameChange() {},
  handleEventDateChange() {},
  handleEventTimeChange() {},
  saveEvent() {}
});

export const Provider = EventContext.Provider;
export const Consumer = EventContext.Consumer;
