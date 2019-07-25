import React from 'react';
import MediaQuery from 'react-responsive';
import step1 from './gcstep1.png';
import step2 from './gcstep2.png';
import step3 from './gcstep3.png';
import step4 from './gcstep4.png';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const steps = ['Introduction', 'Open Google Calendar', 'Add Other Calendars', 'Select Import', 'Select Calendar', 'Import'];

const containerStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  margin: 25,
};

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
    if(step === 'Introduction') {
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
              Introduction
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
    else if(step === 'Open Google Calendar') {
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
    else if(step === 'Add Other Calendars') {
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
          <img style={stepOneImageStyle} src={step1} alt='Add Other Calendars' />
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
    else if(step === 'Select Import') {
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
          <img style={stepTwoImageStyle} src={step2} alt='Select Import' />
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
    else if(step === 'Select Calendar') {
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
          <img style={stepThreeImageStyle} src={step3} alt='Select Calendar' />
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
    else if(step === 'Import') {
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
          <img style={stepThreeImageStyle} src={step4} alt='Import' />
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

  renderContentMobile = () => {
    const { step } = this.state;
    if(step === 'Introduction') {
      return (
        <div
          style={{
            marginBottom: 10
          }}
        >
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>1 </span>
              Introduction
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
    else if(step === 'Open Google Calendar') {
      return (
        <div
          style={{
            marginBottom: 10
          }}
        >
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
    else if(step === 'Add Other Calendars') {
      return (
        <div
          style={{
            marginBottom: 10
          }}
        >
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>3 </span>
              Add Other Calendars
            </p>
          </div>
          <img style={stepOneImageStyleMobile} src={step1} alt='Add Other Calendars' />
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
    else if(step === 'Select Import') {
      return (
        <div
          style={{
            marginBottom: 10
          }}
        >
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>4 </span>
              Select Import
            </p>
          </div>
          <img style={stepTwoImageStyleMobile} src={step2} alt='Select Import' />
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
    else if(step === 'Select Calendar') {
      return (
        <div
          style={{
            marginBottom: 10
          }}
        >
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>5 </span>
              Select Calendar
            </p>
          </div>
          <img style={stepThreeImageStyleMobile} src={step3} alt='Select Calendar' />
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
    else if(step === 'Import') {
      return (
        <div
          style={{
            marginBottom: 10
          }}
        >
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>6 </span>
              Import
            </p>
          </div>
          <img style={stepThreeImageStyleMobile} src={step4} alt='Import' />
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
    });
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
        {step !== 'Introduction' ? this.renderDiv('Introduction') : this.renderSelectedDiv('Introduction')}
        {step !== 'Open Google Calendar' ? this.renderDiv('Open Google Calendar') : this.renderSelectedDiv('Open Google Calendar')}
        {step !== 'Add Other Calendars' ? this.renderDiv('Add Other Calendars') : this.renderSelectedDiv('Add Other Calendars')}
        {step !== 'Select Import' ? this.renderDiv('Select Import') : this.renderSelectedDiv('Select Import')}
        {step !== 'Select Calendar' ? this.renderDiv('Select Calendar') : this.renderSelectedDiv('Select Calendar')}
        {step !== 'Import' ? this.renderDiv('Import') : this.renderSelectedDiv('Import')}
      </div>
    );
  }

  handleNext = () => {
    const { step } = this.state;
    const activeStep = steps.indexOf(step);
    this.setState({
      step: steps[activeStep + 1]
    });
  }

  handleBack = () => {
    const { step } = this.state;
    const activeStep = steps.indexOf(step);
    this.setState({
      step: steps[activeStep - 1]
    });
  }

  render() {
    const { step } = this.state;
    const maxSteps = steps.length;
    const activeStep = steps.indexOf(step);

    return (
    <div>
      <MediaQuery query="(max-device-width: 480px)">
        <div style={containerStyleMobile}>
          {this.renderContentMobile()}
          <MobileStepper
            style={{
              marginTop: 10
            }}
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={steps.indexOf(step)}
            nextButton={
              <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
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
