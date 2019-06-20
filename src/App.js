import React from "react";
import ReactDOM from "react-dom";
import Events from "./components/Events";
import EventForm from "./components/EventForm";
import { Provider } from "./components/EventContext";
import { readFromSessionStorage } from "./components/Helpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDate: "",
      eventTime: "",
      events: readFromSessionStorage("events") || [],
      handleEventNameChange: this.handleEventNameChange,
      handleEventDateChange: this.handleEventDateChange,
      handleEventTimeChange: this.handleEventTimeChange,
      saveEvent: this.saveEvent
    };
  }
  handleEventNameChange = e => {
    this.setState({
      eventName: e.target.value
    });
  };
  handleEventDateChange = e => {
    this.setState({
      eventDate: e.target.value
    });
  };
  handleEventTimeChange = e => {
    this.setState({
      eventTime: e.target.value
    });
  };
  saveEvent = e => {
    e.preventDefault();
    const eventDate = this.state.eventDate,
      eventName = this.state.eventName;
    let validEvent = eventName && eventDate;
    if (validEvent) {
      const eventTime = this.state.eventTime || "23:59";
      const eventDateAndTime = new Date(`${eventDate} ${eventTime}`);
      validEvent = validEvent && eventDateAndTime - new Date() > 0;
      if (validEvent) {
        this.setState(
          {
            events: [
              ...this.state.events,
              { name: eventName, date: eventDateAndTime }
            ]
          },
          this.saveInSessionStorage
        );
      } else {
        alert("Enter a future date");
      }
    } else {
      alert("Enter a event name and an event date");
    }
  };
  saveInSessionStorage() {
    sessionStorage.setItem("events", JSON.stringify(this.state.events));
  }
  deleteEvents = () => {
    sessionStorage.removeItem("events");
    this.setState({
      events: []
    });
  };
  render() {
    return (
      <div>
        <h1>Countdown App</h1>
        <Provider value={this.state}>
          <div className="container">
            <EventForm />
            <Events
              events={this.state.events}
              deleteEvents={this.deleteEvents}
            />
          </div>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
