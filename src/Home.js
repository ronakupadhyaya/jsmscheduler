import React from 'react';
import MediaQuery from 'react-responsive';
import InputBase from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundImage: "url('https://media-public.canva.com/MADGxtluwWE/4/screen_2x.jpg')",
  backgroundSize: 'cover',
  fontWeight: 'semi-bold',
  alignItems: 'center',
};

const containerStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundImage: "url('https://api.regonline.com/CustImages/290000/299570/104475878-DENVER_1.1910x1000_copy_2.jpg')",
  backgroundSize: 'cover',
  fontWeight: 'semi-bold',
  alignItems: 'center',
}

const headerContainerStyle = {
  marginTop: 250,
  marginBottom: 50,
}

const headerStyle = {
  fontSize: 30,
  color: '#FFFFFF',
};

const headerStyleMobile = {
  marginTop: 100,
  fontSize: 25,
  color: '#FFFFFF',
  marginBottom: 100,
}

const searchStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 50,
  width: 800,
  backgroundColor: '#FFFFFF',
};

const searchInputStyleMobile = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 25,
  width: 350,
  padding: 10,
  backgroundColor: '#FFFFFF',
}

const searchInputStyle = {
  marginLeft: 10,
  width: 750,
}

const buttonStyle = {
  backgroundColor: '#2761AA',
  fontSize: 12,
  marginRight: 10,
  marginLeft: 5,
  color: '#FFFFFF'
}

const buttonStyleMobile = {
  marginTop: 15,
  backgroundColor: '#FFFFFF',
  fontSize: 10,
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  setNameState = (value) => {
    this.setState({
      name: value,
    })
  }

  onKeyDown = (key, value) => {
    if (key === 'Enter') {
      this.props.history.push({
        pathname: '/search',
        name: value,
        previous: 'home',
      });
    }
  }

  search = () => {
    const { name } = this.state;
    this.props.history.push({
      pathname: '/search',
      name: name,
      previous: 'home',
    });
  }

  render() {
    const { name } = this.state;

    return (
    <div>
      <MediaQuery query="(max-device-width: 480px)">
        <div style={containerStyleMobile}>
          <div style={headerStyleMobile}>
            Get your custom JSM schedule
          </div>
          <InputBase
            placeholder="Your Name (First Last)"
            disableUnderline={true}
            style={searchInputStyleMobile}
            value={name}
            onChange={event => this.setNameState(event.target.value)}
            onKeyDown={event => this.onKeyDown(event.key, event.target.value)}
          />
          <Button
          style={buttonStyleMobile}
          variant="contained"
          size='medium'
          onClick={() => this.search()}
          >
            <div>
              Search
            </div>
          </Button>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px)">
        <div style={containerStyle}>
          <div style={headerContainerStyle}>
            <div style={headerStyle}>
              We’ll help you create a schedule that works for you
            </div>
          </div>
          <div style={searchStyle}>
            <InputBase
              placeholder="Your Name (First Last)"
              disableUnderline={true}
              style={searchInputStyle}
              value={name}
              onChange={event => this.setNameState(event.target.value)}
              onKeyDown={event => this.onKeyDown(event.key, event.target.value)}
            />
            <Button
            style={buttonStyle}
            variant="contained"
            size='medium'
            onClick={() => this.search()}
            >
              <div>
                Search
              </div>
            </Button>
          </div>
        </div>
      </MediaQuery>
    </div>
    );
  }
}
