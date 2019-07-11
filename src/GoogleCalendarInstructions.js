import React from 'react';
import MediaQuery from 'react-responsive';
import step1 from './gcstep1.png';
import step2 from './gcstep2.png';
import step3 from './gcstep3.png';
import step4 from './gcstep4.png';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const containerStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  margin: 25,
};

const headerStyle = {
  marginTop: 50,
  fontSize: 30,
  marginBottom: 50,
  textAlign: 'center',
};

const downloadStyle = {
  fontSize: 15,
  marginLeft: 20,
  marginBottom: 5,
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontSize: 15,
  marginLeft: 20,
  marginBottom: 5,
}

const stepHeaderStyle = {
  fontSize: 30,
  fontWeight: 'bold',
  marginLeft: 20,
  marginTop: 20,
  marginBottom: 20,
}

const stepOneImageStyle = {
  margin: 50,
  height: 450,
  width: 200,
};

const stepOneImageStyleMobile = {
  margin: 50,
  height: 300,
  width: 180,
};

const stepTwoImageStyle = {
  margin: 50,
  height: 450,
  width: 300,
};

const stepTwoImageStyleMobile = {
  margin: 50,
  height: 300,
  width: 200,
};

const stepThreeImageStyle = {
  margin: 50,
  height: 150,
  width: 300,
}

const stepThreeImageStyleMobile = {
  margin: 50,
  height: 200,
  width: 300,
};

export default class GoogleCalendarInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 'Introduction'
    }
  }

  componentWillMount() {
    return;
    const { authors } = this.props;
    fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getSpeakerCalendar", {
      method: 'POST',
      body: JSON.stringify({
        authors: authors,
      })
    })
    .then(res => res.blob())
    .then(
      (blob) => {
        const element = document.createElement("a");
        element.href = URL.createObjectURL(blob);
        element.download = "speakercalendar.ics";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      },
      (error) => {
        console.log(error);
      }
    )

    fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthorCalendar", {
      method: 'POST',
      body: JSON.stringify({
        authors: authors,
      })
    })
    .then(res => res.blob())
    .then(
      (blob) => {
        const element = document.createElement("a");
        element.href = URL.createObjectURL(blob);
        element.download = "authorcalendar.ics";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  renderContent = () => {
    const { step } = this.state;
    if(step == 'Introduction') {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F7F7F7',
            width: '100%',
            paddingLeft: 200,
          }}
        >
          <div
            style={{
              marginTop: 150,
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 50,
            }}
          >
            Import calendar to Google Calendar
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>1 </span>
              Summary
            </p>
          </div>
          <div
            style={{
              color: '#696868'
            }}
          >
            <p>Your download will begin shortly.</p>
            <p>speakercalendar.ics contains talks where the person of interest is a speaker</p>
            <p>authorcalendar.ics contains talks where the person of interest is a non-speaking author</p>
            <p>You can transfer your events from a different calendar application or Google Account to Google Calendar.</p>
          </div>
        </div>
      );
    }
    else if(step == 'Open Google Calendar') {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F7F7F7',
            width: '100%',
            paddingLeft: 200,
          }}
        >
          <div
            style={{
              marginTop: 150,
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 50,
            }}
          >
            Import calendar to Google Calendar
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>2 </span>
              Open Google Calendar
            </p>
          </div>
          <div
            style={{
              color: '#696868'
            }}
          >
            Navigate to calendar.google.com
          </div>
        </div>
      );
    }
    else if(step == 'Add Other Calendars') {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F7F7F7',
            paddingLeft: 200,
            paddingRight: 20,
            width: '100%',
            paddingBottom: 30
          }}
        >
          <div
            style={{
              marginTop: 150,
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 50,
            }}
          >
            Import calendar to Google Calendar
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>3 </span>
              Add Other Calendars
            </p>
          </div>
          <img style={stepOneImageStyle} src={step1} />
          <div
            style={{
              color: '#696868'
            }}
          >
            Click on the '+' next other 'Other Calendar' on the left sidebar
          </div>
        </div>
      );
    }
    else if(step == 'Select Import') {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F7F7F7',
            paddingLeft: 200,
            paddingRight: 20,
            width: '100%',
            paddingBottom: 30
          }}
        >
          <div
            style={{
              marginTop: 150,
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 50,
            }}
          >
            Import calendar to Google Calendar
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>4 </span>
              Select Import
            </p>
          </div>
          <img style={stepTwoImageStyle} src={step2} />
          <div
            style={{
              color: '#696868'
            }}
          >
            Click on the 'Import' option from the pop-up
          </div>
        </div>
      );
    }
    else if(step == 'Select Calendar') {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F7F7F7',
            paddingLeft: 200,
            paddingRight: 20,
            width: '100%'
          }}
        >
          <div
            style={{
              marginTop: 150,
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 50,
            }}
          >
            Import calendar to Google Calendar
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>5 </span>
              Select Calendar
            </p>
          </div>
          <img style={stepThreeImageStyle} src={step3} />
          <div
            style={{
              color: '#696868'
            }}
          >
            Click on 'Select file from your computer' and browse to locate the calendar .ics file to import
          </div>
        </div>
      );
    }
    else if(step == 'Import') {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F7F7F7',
            paddingLeft: 200,
            paddingRight: 20,
            width: '100%'
          }}
        >
          <div
            style={{
              marginTop: 150,
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 50,
            }}
          >
            Import calendar to Google Calendar
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>6 </span>
              Import
            </p>
          </div>
          <img style={stepThreeImageStyle} src={step4} />
          <div
            style={{
              color: '#696868'
            }}
          >
            Click on the 'Import' button
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }

  onClick = (step) => {
    this.setState({
      step: step
    })
  }

  renderDiv = (step) => (
    <div
      style={{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        color: '#696868'
      }}
      onClick={() => this.onClick(step)}
    >
      {step}
    </div>
  );

  renderSelectedDiv = (step) => (
    <div
      style={{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
      }}
    >
      {step}
    </div>
  );

  renderSideBar = () => {
    const { step } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          width: '25%',
          marginLeft: 40,
        }}
      >
        {step != 'Introduction' ? this.renderDiv('Introduction') : this.renderSelectedDiv('Introduction')}
        {step != 'Open Google Calendar' ? this.renderDiv('Open Google Calendar') : this.renderSelectedDiv('Open Google Calendar')}
        {step != 'Add Other Calendars' ? this.renderDiv('Add Other Calendars') : this.renderSelectedDiv('Add Other Calendars')}
        {step != 'Select Import' ? this.renderDiv('Select Import') : this.renderSelectedDiv('Select Import')}
        {step != 'Select Calendar' ? this.renderDiv('Select Calendar') : this.renderSelectedDiv('Select Calendar')}
        {step != 'Import' ? this.renderDiv('Import') : this.renderSelectedDiv('Import')}
      </div>
    );
  }

  render() {

    return (
    <div>
      <MediaQuery query="(max-device-width: 480px)">
        <div style={containerStyleMobile}>
          <div style={headerStyle}>
            Import calendar to Google Calendar
          </div>
          <div style={downloadStyle}>
            <p>Your download will begin shortly.</p>
            <p>speakercalendar.ics contains talks where the person of interest is a speaker</p>
            <p>authorcalendar.ics contains talks where the person of interest is a non-speaking author</p>
          </div>
          <div style={paragraphStyle}>
            You can transfer your events from a different calendar application or Google Account to Google Calendar.
          </div>

          <div style={stepHeaderStyle}>
            Step 1: Open Google Calendar
          </div>
          <div style={paragraphStyle}>
            Navigate to calendar.google.com
          </div>

          <div style={stepHeaderStyle}>
            Step 2: Add other calendars
          </div>
          <div style={paragraphStyle}>
            Click on the '+' next other 'Other Calendar' on the left sidebar
          </div>
          <img style={stepOneImageStyleMobile} src={step1} />

          <div style={stepHeaderStyle}>
            Step 3: Select Import
          </div>
          <div style={paragraphStyle}>
            Click on the 'Import' option from the pop-up
          </div>
          <img style={stepTwoImageStyleMobile} src={step2} />

          <div style={stepHeaderStyle}>
            Step 4: Select Calendar
          </div>
          <div style={paragraphStyle}>
            Click on 'Select file from your computer' and browse to locate the calendar .ics file to import.
          </div>
          <img style={stepThreeImageStyleMobile} src={step3} />

          <div style={stepHeaderStyle}>
            Step 5: Import
          </div>
          <div style={paragraphStyle}>
            Click on the 'Import' button
          </div>
          <img style={stepThreeImageStyleMobile} src={step4} />
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px)">
        <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          {this.renderSideBar()}
          {this.renderContent()}
        </div>
      </MediaQuery>
    </div>
    );
  }
}
