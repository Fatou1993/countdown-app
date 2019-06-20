import React from "react";
import { getDaysHoursMinutesSecondsFromMilliSeconds } from "./Helpers";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeDifference: props.date - new Date(),
      timer: null
    };
  }

  setTimeLeft = () => {
    let currentDate = new Date();
    let timeDifference = this.props.date - currentDate;
    if (timeDifference <= 0) {
      alert("Yes ! It is event time");
      this.stopTimer();
      return;
    }
    this.setState({
      timeDifference
    });
  };

  stopTimer = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({
        timer: null
      });
    }
  };

  startTimer = () => {
    if (this.state.timeDifference >= 0) {
      const timer = setInterval(() => {
        this.setTimeLeft();
      }, 1000);
      this.setState({
        timer
      });
    }
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const { name } = this.props;
    const { timeDifference } = this.state;
    const positiveTimeDifference = Math.max(timeDifference, 0);
    const time = getDaysHoursMinutesSecondsFromMilliSeconds(
      positiveTimeDifference
    );
    return (
      <div className="event">
        <h3> {name.toUpperCase()}</h3>
        <h5>
          <span className="time-element">{time.days}</span> DAYS&nbsp;&nbsp;
          <span className="time-element">{time.hours}</span> HOURS&nbsp;&nbsp;
          <span className="time-element">{time.minutes}</span>{" "}
          MINUTES&nbsp;&nbsp;
          <span className="time-element">{time.seconds}</span>{" "}
          SECONDS&nbsp;&nbsp;
        </h5>
      </div>
    );
  }
}

<span className="time-element"></span>;

export default Event;
