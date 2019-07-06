import React from 'react';
import MediaQuery from 'react-responsive';
import step1 from './cstep1.png';
import step2 from './cstep2.png';
import step3 from './cstep3.png';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
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
};

const stepOneImageStyle = {
  margin: 50,
  height: 250,
  width: 350,
};

const stepOneImageStyleMobile = {
  margin: 50,
  height: 150,
  width: 250,
}

const stepTwoImageStyle = {
  margin: 50,
  height: 250,
  width: 450,
};

const stepTwoImageStyleMobile = {
  margin: 50,
  height: 150,
  width: 250,
};

const stepThreeImageStyle = {
  margin: 50,
  height: 250,
  width: 450,
}

const stepThreeImageStyleMobile = {
  margin: 50,
  height: 150,
  width: 250,
}

export default class ICalInstructions extends React.Component {
  constructor(props) {
    super(props);
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

  render() {

    return (
    <div>
      <MediaQuery query="(max-device-width: 480px)">
        <div style={containerStyleMobile}>
          <div style={headerStyle}>
            Import calendar to iCal
          </div>
          <div style={downloadStyle}>
          <p>Your download will begin shortly.</p>
          <p>speakercalendar.ics contains talks where the person of interest is a speaker</p>
          <p>authorcalendar.ics contains talks where the person of interest is a non-speaking author</p>
          </div>
          <div style={paragraphStyle}>
            You can transfer your events from a different calendar application to iCal.
          </div>

          <div style={stepHeaderStyle}>
            Step 1: Open iCal
          </div>

          <div style={stepHeaderStyle}>
            Step 2: Select Import
          </div>
          <div style={paragraphStyle}>
            Go to File>Import. In the Import section File field, browse to locate the calendar .ics file to import.
          </div>
          <img style={stepOneImageStyleMobile} src={step1} />

          <div style={stepHeaderStyle}>
            Step 3: Select Calendar
          </div>
          <div style={paragraphStyle}>
            Select an existing calendar or create a calendar to import the file.
          </div>
          <img style={stepTwoImageStyleMobile} src={step2} />

          <div style={stepHeaderStyle}>
            Step 3: Click OK
          </div>
          <img style={stepThreeImageStyleMobile} src={step3} />
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px)">
        <div style={containerStyle}>
          <div style={headerStyle}>
            Import calendar to iCal
          </div>
          <div style={downloadStyle}>
          <p>Your download will begin shortly.</p>
          <p>speakercalendar.ics contains talks where the person of interest is a speaker</p>
          <p>authorcalendar.ics contains talks where the person of interest is a non-speaking author</p>
          </div>
          <div style={paragraphStyle}>
            You can transfer your events from a different calendar application to iCal.
          </div>

          <div style={stepHeaderStyle}>
            Step 1: Open iCal
          </div>

          <div style={stepHeaderStyle}>
            Step 2: Select Import
          </div>
          <div style={paragraphStyle}>
            Go to File>Import. In the Import section File field, browse to locate the calendar .ics file to import.
          </div>
          <img style={stepOneImageStyle} src={step1} />

          <div style={stepHeaderStyle}>
            Step 3: Select Calendar
          </div>
          <div style={paragraphStyle}>
            Select an existing calendar or create a calendar to import the file.
          </div>
          <img style={stepTwoImageStyle} src={step2} />

          <div style={stepHeaderStyle}>
            Step 3: Click OK
          </div>
          <img style={stepThreeImageStyle} src={step3} />
        </div>
      </MediaQuery>
    </div>
    );
  }
}
