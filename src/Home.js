import React from 'react';
import MediaQuery from 'react-responsive';
import Button from '@material-ui/core/Button';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import MenuItem from '@material-ui/core/MenuItem';
import { attendees } from './attendees';
import Link from '@material-ui/core/Link';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundImage: "url('http://res.cloudinary.com/simpleview/image/upload/v1477951440/clients/denver/20130701_ccc_219_ac3da237-da9f-489b-9a26-2fe47e781887.jpg')",
  backgroundSize: 'cover',
  fontWeight: 'semi-bold',
  alignItems: 'center',
};

const containerStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundImage: "url('http://res.cloudinary.com/simpleview/image/upload/v1477951440/clients/denver/20130701_ccc_219_ac3da237-da9f-489b-9a26-2fe47e781887.jpg')",
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
  marginTop: 150,
  fontSize: 25,
  color: '#FFFFFF',
  marginBottom: 50,
}

const buttonStyle = {
  backgroundColor: '#2761AA',
  fontSize: 12,
  marginRight: 10,
  marginLeft: 5,
  color: '#FFFFFF',
  height: 30,
}

const buttonStyleMobile = {
  marginTop: 15,
  backgroundColor: '#FFFFFF',
  fontSize: 10,
  height: 25
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      suggestions: [],
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

  onChange = (event, { newValue }) => {
    this.setState({
      name: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : attendees.filter(attendee =>
      attendee.toLowerCase().includes(inputValue)
    );
  };

  getSuggestionValue = suggestion => suggestion;

  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion, query);
    const parts = parse(suggestion, matches);

    return (
      <MenuItem selected={isHighlighted}>
        <div>
          {parts.map(part => (
            <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 100 }}>
              {part.text}
            </span>
          ))}
        </div>
      </MenuItem>
    );
  };

  renderInputComponent = inputProps => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: 800,
      }}
    >
      <input
        {...inputProps}
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
  );

  renderInputComponentMobile = inputProps => (
    <div
      style={{
        backgroundColor: '#FFFFFF'
      }}
    >
      <input
        {...inputProps}
      />
    </div>
  );

  render() {
    const { name, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Your Name (First Last)',
      value: name,
      onChange: this.onChange,
      onKeyDown: event => this.onKeyDown(event.key, event.target.value),
      style: {
        height: 50,
        width: 700,
        fontSize: 15,
        paddingLeft: 10,
        border: 'none'
      }
    };

    const inputPropsMobile = {
      placeholder: 'Your Name (First Last)',
      value: name,
      onChange: this.onChange,
      onKeyDown: event => this.onKeyDown(event.key, event.target.value),
      style: {
        height: 30,
        width: 350,
        fontSize: 10,
        paddingLeft: 10,
        border: 'none'
      }
    };

    return (
    <div>
      <MediaQuery query="(max-device-width: 480px)">
        <div style={containerStyleMobile}>
          <div style={headerStyleMobile}>
            Get a custom JSM schedule
          </div>
          <Autosuggest
            suggestions={suggestions.slice(0, 5)}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderInputComponent={this.renderInputComponentMobile}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputPropsMobile}
            theme={{
              inputFocused: {
                border: 'none'
              },
              root: {
                height: 250,
                flexGrow: 1,
              },
              container: {
                position: 'relative',
              },
              suggestionsContainer: {
                zIndex: 1,
                marginTop: 1,
                left: 0,
                right: 0,
                backgroundColor: '#FFFFFF',
                fontFamily: 'sans-serif',
                borderLeft: '1px solid #000000',
                borderRight: '1px solid #000000',
                borderBottom: '1px solid #000000'
              },
              suggestion: {
                display: 'block',
              },
              suggestionsList: {
                margin: 0,
                padding: 0,
                listStyleType: 'none',
              },
              divider: {
                height: 2,
              },
            }}
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
          <div
            style={{
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'row',
              marginTop: 'auto',
              width: '100%',
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15
            }}
          >
            <div>
              Brought to you by <Link style={{ textDecoration: 'underline' }} target="_blank" color="inherit" href="http://faculty.marshall.usc.edu/Jacob-Bien/">Jacob Bien</Link> and <Link style={{ textDecoration: 'underline' }} target="_blank" color="inherit" href="https://www.linkedin.com/in/ronakupadhyaya/">Ronak Upadhyaya</Link>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 480px)">
        <div style={containerStyle}>
          <div style={headerContainerStyle}>
            <div style={headerStyle}>
              Get your custom JSM schedule
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: 700,
            }}
          >
            <Autosuggest
              suggestions={suggestions.slice(0, 5)}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              renderInputComponent={this.renderInputComponent}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps}
              theme={{
                inputFocused: {
                  border: 'none'
                },
                root: {
                  height: 250,
                  flexGrow: 1,
                },
                container: {
                  position: 'relative',
                },
                suggestionsContainer: {
                  position: 'absolute',
                  zIndex: 1,
                  marginTop: 1,
                  left: 0,
                  right: 0,
                  backgroundColor: '#FFFFFF',
                  fontFamily: 'sans-serif',
                  borderLeft: '1px solid #000000',
                  borderRight: '1px solid #000000',
                  borderBottom: '1px solid #000000'
                },
                suggestion: {
                  display: 'block',
                },
                suggestionsList: {
                  margin: 0,
                  padding: 0,
                  listStyleType: 'none',
                },
                divider: {
                  height: 2,
                },
              }}
            />
          </div>
          <div
            style={{
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'row',
              marginTop: 'auto',
              width: '100%',
              height: 30,
              alignItems: 'center',
              justifyContent: 'flex-end',
              fontSize: 15
            }}
          >
            <div
                style={{
                  marginRight: 20
                }}
            >
              Brought to you by <Link style={{ textDecoration: 'underline' }} target="_blank" color="inherit" href="http://faculty.marshall.usc.edu/Jacob-Bien/">Jacob Bien</Link> and <Link style={{ textDecoration: 'underline' }} target="_blank" color="inherit" href="https://www.linkedin.com/in/ronakupadhyaya/">Ronak Upadhyaya</Link>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
    );
  }
}
