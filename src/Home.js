import React from 'react';
import MediaQuery from 'react-responsive';
import InputBase from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundImage: "url('https://api.regonline.com/CustImages/290000/299570/104475878-DENVER_1.1910x1000_copy_2.jpg')",
  backgroundSize: 'cover',
  fontWeight: 'semi-bold',
  alignItems: 'center',
};

const headerStyle = {
  marginTop: 200,
  fontSize: 70,
  color: '#FFFFFF',
  marginBottom: 50,
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
  width: 500,
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
  width: 450,
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

  render() {
    const { name } = this.state;

    return (
      <div style={containerStyle}>
      <MediaQuery query="(max-device-width: 480px)">
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
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px)">
        <div style={headerStyle}>
          Get your custom JSM schedule
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
          <Link to={{
            pathname: '/search',
            name: name,
            previous: 'home',
          }}>
            <SearchIcon />
          </Link>
        </div>
      </MediaQuery>
    </div>
    );
  }
}
