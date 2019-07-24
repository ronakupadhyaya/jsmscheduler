import React from 'react';
import MediaQuery from 'react-responsive';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const localizer = BigCalendar.momentLocalizer(moment);

const progressContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const bigCalendarMobileStyle = {
  margin: 10,
};

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerEvents: [],
      authorEvents: [],
      selfEvents: [],
      chairEvents: [],
      loading: true,
    }
  }

  convertDateFormat = (input) => {
    const year = input.substring(0, 4);
    const month = input.substring(4, 6);
    const day = input.substring(6, 8);
    const hour = input.substring(9, 11);
    const minute = input.substring(11, 13);
    const date = new Date(year, month - 1, day, hour, minute);
    return date;
  }

  componentWillMount() {
    const authors = (this.props.location && this.props.location.state) ?
    this.props.location.state.authors :
    null;
    if(!authors) {
      this.setState({
        loading: false,
      });
      return;
    }
    fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getSchedule", {
    method: 'POST',
    body: JSON.stringify({
      authors: authors,
      name: localStorage.getItem('name'),
    })
  })
  .then((response) => response.text())
  .then((responseText) => {
    const json = JSON.parse(responseText);
    var speakerEvents = json['Speaker'];
    var authorEvents = json['Author'];
    var selfEvents = json['Self'];
    var chairEvents = json['Chair'];
    speakerEvents = speakerEvents.map(event => {
      var newEvent = Object.assign({}, event);
      newEvent.color = '#ff3d00';
      newEvent.title = event.title + " (" + event.location + ")";
      newEvent.start = this.convertDateFormat(event.start);
      newEvent.end = this.convertDateFormat(event.end);
      return newEvent;
    });
    authorEvents = authorEvents.map(event => {
      var newEvent = Object.assign({}, event);
      newEvent.color = '#ff00f2';
      newEvent.title = event.title + " (" + event.location + ")";
      newEvent.start = this.convertDateFormat(event.start);
      newEvent.end = this.convertDateFormat(event.end);
      return newEvent;
    });
    selfEvents = selfEvents.map(event => {
      var newEvent = Object.assign({}, event);
      newEvent.color = '#2979ff';
      newEvent.title = event.title + " (" + event.location + ")";
      newEvent.start = this.convertDateFormat(event.start);
      newEvent.end = this.convertDateFormat(event.end);
      return newEvent;
    });
    chairEvents = chairEvents.map(event => {
      var newEvent = Object.assign({}, event);
      newEvent.color = '#2979ff';
      newEvent.title = event.title + " (" + event.location + ")";
      newEvent.start = this.convertDateFormat(event.start);
      newEvent.end = this.convertDateFormat(event.end);
      return newEvent;
    });
    authorEvents = authorEvents.filter(event => selfEvents.findIndex(selfEvent => selfEvent.title === event.title) === -1);
    authorEvents = authorEvents.filter(event => chairEvents.findIndex(chairEvent => chairEvent.title === event.title) === -1);
    speakerEvents = speakerEvents.filter(event => selfEvents.findIndex(selfEvent => selfEvent.title === event.title) === -1);
    speakerEvents = speakerEvents.filter(event => chairEvents.findIndex(chairEvent => chairEvent.title === event.title) === -1);

    chairEvents = chairEvents.map(event => {
      event.title = "Chair: " + event.title;
      return event;
    });

    this.setState({
      speakerEvents: speakerEvents,
      authorEvents: authorEvents,
      selfEvents: selfEvents,
      chairEvents: chairEvents,
      loading: false,
    })
  })
  .catch((error) => {
    console.log(error);
    this.setState({
      loading: false,
    });
  });
  }

  eventStyleGetter = (event) => {
    var color = event.color;
    var style = {
        backgroundColor: '#FFFFFF',
        color: color,
    };
    return {
        style: style
    };
  };

  render() {
    const { authorEvents, speakerEvents, selfEvents, chairEvents, loading } = this.state;
    const events = authorEvents.concat(speakerEvents).concat(selfEvents).concat(chairEvents);

    if(loading) {
      return (
        <div style={progressContainerStyle}>
          <CircularProgress />
        </div>
      );
    }

    return (
      <div>
        <MediaQuery query="(max-device-width: 480px)">
          <BigCalendar
            style={bigCalendarMobileStyle}
            events={events}
            localizer={localizer}
            step={60}
            showMultiDayTimes
            eventPropGetter={(this.eventStyleGetter)}
            defaultView={'agenda'}
            defaultDate={new Date(2019, 6, 26)}
          />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 480px)">
          <BigCalendar
            events={events}
            localizer={localizer}
            style={{height: '100vh', width: '100vw'}}
            step={60}
            showMultiDayTimes
            eventPropGetter={(this.eventStyleGetter)}
            defaultView={'agenda'}
            defaultDate={new Date(2019, 6, 26)}
          />
        </MediaQuery>
      </div>
    );
  }
}
