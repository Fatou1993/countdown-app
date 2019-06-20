export function getDaysHoursMinutesSecondsFromMilliSeconds(timeInMilliSeconds) {
  let seconds = Math.floor(timeInMilliSeconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;
  return {
    days,
    hours,
    minutes,
    seconds
  };
}

export function readFromSessionStorage(key) {
  const events = JSON.parse(sessionStorage.getItem(key));
  if (events) {
    events.forEach(event => (event.date = new Date(event.date)));
    return events;
  }
  return null;
}
