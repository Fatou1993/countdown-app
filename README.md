# countdown-app

React App that enables events countdown.

This project was inspired from [app-ideas](https://github.com/florinpop17/app-ideas "App Ideas Collection")

![](countdown.gif)

## Link to the app

[Countdown App](https://wizardly-euler-f49371.netlify.com) : Deployed with [netlify](https://www.netlify.com/)

## Resources used to create this project

1. [complete-intro-to-react-v4](https://btholt.github.io/complete-intro-to-react-v4/ "Complete Intro to React") : Some great React content by [Brian Holt](https://github.com/btholt "Brian Holt")
2. Landing page photo by Jeremy Bishop on [Unsplash](https://unsplash.com/photos/GQD3Av_9A88)
3. [Front End Masters](https://frontendmasters.com) : Great Courses for front-end. :heart: :heart: :heart:

## Functionalities

- [x] User can see an event input box containing an event name field, an
      date field, an optional time, and a 'Start' button.
- [x] User can define the event by entering its name, the date it is
      scheduled to take place, and an optional time of the event. If the time is
      omitted it is assumed to be at 23:59 on the event date in the local time
      zone.
- [x] User can see an alert if the event name is blank.
- [x] User can see an alert if the event date or time are incorrectly
      entered.
- [x] User can click on the 'Start' button to see the countdown timer start
      displaying the days, hours, minutes, and seconds until the event takes place.
- [x] User can see the elements in the countdown timer automatically
      decrement. For example, when the remaining seconds count reaches 0 the remaining
      minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display.
- [x] User can save the event in sessionstorage so that it persists across sessions
- [x] User can see an alert when the event is reached
- [x] User can specify more than one event.
- [x] User can see a countdown timers for each event that has been defined.

## Disclaimers

The countdown may not have second-precision. I choose not to focus on this.
