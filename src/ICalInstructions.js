import React from 'react';
import MediaQuery from 'react-responsive';
import step1 from './cstep1.png';
import step2 from './cstep2.png';
import step3 from './cstep3.png';

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
            Import calendar to iCal
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
            <p>You can transfer your events from a different calendar application to iCal.</p>
          </div>
        </div>
      );
    }
    else if(step === 'Open iCal') {
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
            Import calendar to iCal
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>2 </span>
              Open iCal
            </p>
          </div>
          <div
            style={{
              color: '#696868'
            }}
          >
            Open iCal
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
            Import calendar to iCal
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>3 </span>
              Select Import
            </p>
          </div>
          <img style={stepOneImageStyle} src={step1} alt='Select Import' />
          <div
            style={{
              color: '#696868'
            }}
          >
          Go to File>Import. In the Import section File field, browse to locate the calendar .ics file to import.
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
            width: '100%',
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
            Import calendar to iCal
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>4 </span>
              Select Calendar
            </p>
          </div>
          <img style={stepTwoImageStyle} src={step2} alt='Select Calendar' />
          <div
            style={{
              color: '#696868'
            }}
          >
            Select an existing calendar or create a calendar to import the file.
          </div>
        </div>
      );
    }
    else if(step === 'Click OK') {
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
            Import calendar to iCal
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: 25 }}>
              <span style={{ borderBottom: '1px solid black', paddingBottom: 2, marginRight: 5 }}>5 </span>
              Click OK
            </p>
          </div>
          <img style={stepThreeImageStyle} src={step3} alt='Click OK' />
          <div
            style={{
              color: '#696868'
            }}
          >
            Click OK
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
        {step !=='Introduction' ? this.renderDiv('Introduction') : this.renderSelectedDiv('Introduction')}
        {step !== 'Open iCal' ? this.renderDiv('Open iCal') : this.renderSelectedDiv('Open iCal')}
        {step !== 'Select Import' ? this.renderDiv('Select Import') : this.renderSelectedDiv('Select Import')}
        {step !== 'Select Calendar' ? this.renderDiv('Select Calendar') : this.renderSelectedDiv('Select Calendar')}
        {step !== 'Click OK' ? this.renderDiv('Click OK') : this.renderSelectedDiv('Click OK')}
      </div>
    );
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
          <img style={stepOneImageStyleMobile} src={step1} alt='Select Import' />

          <div style={stepHeaderStyle}>
            Step 3: Select Calendar
          </div>
          <div style={paragraphStyle}>
            Select an existing calendar or create a calendar to import the file.
          </div>
          <img style={stepTwoImageStyleMobile} src={step2} alt='Select Calendar' />

          <div style={stepHeaderStyle}>
            Step 3: Click OK
          </div>
          <img style={stepThreeImageStyleMobile} src={step3} alt='Click OK' />
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
