import React from 'react';
import MediaQuery from 'react-responsive';
import EditableList from './EditableList';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import MenuItem from '@material-ui/core/MenuItem';
import { attendees } from './attendees';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  color: '#000000',
  backgroundSize: 'cover',
  fontWeight: 'semi-bold',
  alignItems: 'center',
};

const containerStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundSize: 'cover',
  fontWeight: 'semi-bold',
  alignItems: 'center',
}

const listsStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 25,
}

const listsStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40,
}

const suggestionStyle = {
  marginTop: 20,
  fontSize: 20,
  fontWeight: 'semi-bold',
  textAlign: 'center',
  // color: '#FFFFFF',
  color: '#000000',
  marginBottom: 25,
}

const footerStyle = {
  display: 'flex',
  flexDirection: 'row',
  // color: '#FFFFFF',
  color: '#000000',
}

const footerStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  // color: '#FFFFFF',
  color: '#000000',
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20,
  marginBottom: 20,
  alignItems: 'center',
};

const buttonStyle = {
  marginRight: 10,
  backgroundColor: '#2761AA',
  color: '#FFFFFF'
}

const radioStyle = {
  // color: '#FFFFFF',
  color: '#000000',
}

const progressContainerStyle = {
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
};

const progressHeaderStyle = {
  marginTop: 80,
  fontSize: 20,
  color: '#000000',
  textAlign: 'center',
  marginBottom: 50,
}

const progressHeaderStyleMobile = {
  marginTop: 80,
  fontSize: 10,
  color: '#000000',
  textAlign: 'center',
  marginBottom: 50,
}

const searchStyleContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#2761AA',
  height: 70,
  padding: 25,
  width: '100vw'
}

const searchStyleContainerMobile = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#2761AA',
  height: 40,
  padding: 15,
  width: '100vw'
};

const searchButtonStyleMobile = {
  backgroundColor: '#2761AA',
  fontSize: 10,
  marginRight: 10,
  marginLeft: 5,
  color: '#FFFFFF'
};

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    let name = null;
    let citedAuthors = null;
    let citingAuthors = null;
    let coAuthors = null;
    let others = null;
    if(this.props.location.previous && this.props.location.previous === 'home') {
      name = this.props.location.name;
      citingAuthors = [];
      citedAuthors = [];
      coAuthors = [];
      others = [];
      localStorage.setItem('name', name);
    }
    else {
      name = localStorage.getItem('name');
      citingAuthors = JSON.parse(localStorage.getItem('citingAuthors')) || [];
      citedAuthors = JSON.parse(localStorage.getItem('citedAuthors')) || [];
      coAuthors = JSON.parse(localStorage.getItem('coAuthors')) || [];
      others = JSON.parse(localStorage.getItem('others')) || [];
    }
    this.state = {
      selected: 'Calendar View',
      citingAuthors: citingAuthors,
      citedAuthors: citedAuthors,
      coAuthors: coAuthors,
      others: others,
      loading: true,
      name: name,
      suggestions: [],
      dialogOpen: false,
    }

  }

  setRadioButtonChange(radioButton) {
    this.setState({
      selected: radioButton,
    })
  }

  formatString = (str) => {
    return str
    .replace(/(\B)[^ ]*/g,match =>(match.toLowerCase()))
    .replace(/^[^ ]/g,match=>(match.toUpperCase()));
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.location.previous && this.props.location.previous === 'searchFirst' && this.props.location.name !== prevProps.location.name) {
      let name = this.props.location.name;
      let citedAuthors = [];
      let citingAuthors = [];
      let coAuthors = [];
      let others = [];
      localStorage.setItem('name', name);
      this.setState({
        selected: 'Calendar View',
        citingAuthors: citingAuthors,
        citedAuthors: citedAuthors,
        coAuthors: coAuthors,
        others: others,
        loading: true,
        name: name,
        suggestions: [],
        dialogOpen: false,
      });
      this.fetchAuthorData()
    }
  }

  componentDidMount() {
    this.fetchAuthorData();
  }

  fetchAuthorData = () => {
    const { name } = this.state;
    console.log(this.props.location.previous)
    if(this.props.location.previous && (this.props.location.previous === 'home' || this.props.location.previous === 'searchFirst')) {
      fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthors?name=" + name)
      .then((response) => response.text())
      .then((responseText) => {
        const json = JSON.parse(responseText);
        var citedAuthors = json['Cited Authors'];
        var citingAuthors = json['Citing Authors'];
        var coAuthors = json['Co Authors'];

        citedAuthors = citedAuthors.map(author => author.name);
        citedAuthors = citedAuthors.filter(author => !author.includes("null"));

        citingAuthors = citingAuthors.map(author => author.name);
        citingAuthors = citingAuthors.filter(author => !author.includes("null"));

        coAuthors = coAuthors.map(author => author.name);
        coAuthors = coAuthors.filter(author => !author.includes("null"));

        this.setState({
          citingAuthors: citingAuthors,
          citedAuthors: citedAuthors,
          coAuthors: coAuthors,
          loading: false,
        });

        localStorage.setItem('citingAuthors', JSON.stringify(citingAuthors));
        localStorage.setItem('citedAuthors', JSON.stringify(citedAuthors));
        localStorage.setItem('coAuthors', JSON.stringify(coAuthors));
        localStorage.setItem('others', JSON.stringify([]));
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
        });
      });
    }
    else {
      this.setState({
        loading: false,
      });
    }
  }

  generateSchedule = () => {
    const { selected } = this.state;
    if(selected === 'Calendar View') {
      this.openCalendarView();
    }
    else if(selected === 'Google Calendar') {
      this.openGoogleCalendarInstructions();
    }
    else if(selected === 'iCal') {
      this.openiCalInstructions();
    }
    else if(selected === 'Text') {
      this.openTextInstructions();
    }
    else if(selected === 'Email') {
      this.openDialog();
    }
  }

  openCalendarView = () => {
    const { citingAuthors, citedAuthors, coAuthors, others } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(coAuthors).concat(others);
    this.props.history.push({
      pathname: 'calendar',
      state: {
        authors: authors,
      }
    });
  }

  openGoogleCalendarInstructions = () => {
    const { citingAuthors, citedAuthors, coAuthors, others } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(coAuthors).concat(others);
    this.props.history.push({
      pathname: 'instructions',
      state: {
        authors: authors,
        view: 'Google Calendar'
      },
    });
  };

  openiCalInstructions = () => {
    const { citingAuthors, citedAuthors, coAuthors, others } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(coAuthors).concat(others);
    this.props.history.push({
      pathname: 'instructions',
      state: {
        authors: authors,
        view: 'iCal'
      },
    });
  };

  openTextInstructions = () => {
    const { citingAuthors, citedAuthors, coAuthors, others } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(coAuthors).concat(others);
    fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getText", {
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
        element.download = "schedule.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      },
      (error) => {
        console.log(error);
      }
    )
  };

  addItem = (item, type) => {
    if(type === 'Citing') {
      var citingAuthors = this.state.citingAuthors;
      citingAuthors.unshift(item);
      this.setState({
        citingAuthors: citingAuthors,
        citingAuthorsItem: '',
      });
      localStorage.setItem('citingAuthors', JSON.stringify(citingAuthors));
    }
    else if(type === 'Cited') {
      var citedAuthors = this.state.citedAuthors;
      citedAuthors.unshift(item);
      this.setState({
        citedAuthors: citedAuthors,
        citedAuthorsItem: '',
      });
      localStorage.setItem('citedAuthors', JSON.stringify(citedAuthors));
    }
    else if(type === 'Co') {
      var coAuthors = this.state.coAuthors;
      coAuthors.unshift(item);
      this.setState({
        coAuthors: coAuthors,
        coAuthorsItem: '',
      });
      localStorage.setItem('coAuthors', JSON.stringify(coAuthors));
    }
    else {
      var others = this.state.others;
      others.unshift(item);
      this.setState({
        others: others,
        othersItem: '',
      });
      localStorage.setItem('others', JSON.stringify(others));
    }
  }

  deleteItem = (toDeleteAuthor, type) => {
    if(type === 'Citing') {
      var citingAuthors = this.state.citingAuthors;
      citingAuthors = citingAuthors.filter(author => author !== toDeleteAuthor);
      this.setState({
        citingAuthors: citingAuthors,
      });
      localStorage.setItem('citingAuthors', JSON.stringify(citingAuthors));
    }
    else if(type === 'Cited') {
      var citedAuthors = this.state.citedAuthors;
      citedAuthors = citedAuthors.filter(author => author !== toDeleteAuthor);
      this.setState({
        citedAuthors: citedAuthors,
      });
      localStorage.setItem('citedAuthors', JSON.stringify(citedAuthors));
    }
    else if(type === 'Co') {
      var coAuthors = this.state.coAuthors;
      coAuthors = coAuthors.filter(author => author !== toDeleteAuthor);
      this.setState({
        coAuthors: coAuthors,
      });
      localStorage.setItem('coAuthors', JSON.stringify(coAuthors));
    }
    else {
      var others = this.state.others;
      others = others.filter(author => author !== toDeleteAuthor);
      this.setState({
        others: others,
      });
      localStorage.setItem('others', JSON.stringify(others));
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
        previous: 'searchFirst',
      });
    }
  }

  search = () => {
    const { name } = this.state;
    this.props.history.push({
      pathname: '/search',
      name: name,
      previous: 'searchFirst',
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      <input
        {...inputProps}
      />
      <Button
      style={searchButtonStyleMobile}
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

  openDialog = () => {
    this.setState({
      dialogOpen: true
    });
  }

  closeDialog = () => {
    this.setState({
      dialogOpen: false
    });
  }

  onEmailChange = (email) => {
    this.setState({
      email
    })
  }

  sendEmail = () => {
    const { citingAuthors, citedAuthors, coAuthors, others, name, email } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(coAuthors).concat(others);
    fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/EmailSender", {
      method: 'POST',
      body: JSON.stringify({
        authors: authors,
        name: name,
        email: email,
      })
    })
    .then(response => {
      this.setState({
        dialogOpen: false
      });
    })
    .catch(error => {
      this.setState({
        dialogOpen: false
      });
    });
  }

  render() {
    const { selected,
      citingAuthors,
      citedAuthors,
      coAuthors,
      others,
      loading,
      name,
      suggestions,
      dialogOpen,
    } = this.state;

    const email = this.state.email || '';

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
        height: 40,
        width: 250,
        fontSize: 15,
        paddingLeft: 10,
        border: 'none'
      }
    };

    if(loading) {
      return (
        <div>
          <MediaQuery query="(max-device-width: 480px)">
            <div style={progressContainerStyle}>
              <div style={progressHeaderStyleMobile}>
                <p>Please wait while your personal talk recommendations are being generated.</p>
                <p>This may take 30 seconds or so... but it's far less time than going through the entire JSM program book yourself!</p>
              </div>
              <CircularProgress />
            </div>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 480px)">
            <div style={progressContainerStyle}>
              <div style={progressHeaderStyle}>
                <p>Please wait while your personal talk recommendations are being generated.</p>
                <p>This may take 30 seconds or so... but it's far less time than going through the entire JSM program book yourself!</p>
              </div>
              <CircularProgress />
            </div>
          </MediaQuery>
        </div>
      );
    }

    return (
      <div>
        <MediaQuery query="(max-device-width: 480px)">
          <div style={containerStyleMobile}>
          <div style={searchStyleContainerMobile}>
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
                position: 'absolute',
                zIndex: 1,
                marginTop: 1,
                left: 0,
                right: 0,
                backgroundColor: '#FFFFFF',
                fontFamily: 'sans-serif',
                borderLeft: '1px solid #000000',
                borderRight: '1px solid #000000',
                borderBottom: '1px solid #000000',
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
            <div style={listsStyleMobile}>
              <div>
                  <EditableList
                  type='Citing'
                  authors={citingAuthors}
                  addItem={this.addItem}
                  deleteItem={this.deleteItem}
                  title='People who cite you/your co authors a lot'
                  />
                </div>
                <div>
                    <EditableList
                    type='Cited'
                    authors={citedAuthors}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                    title='People you/your co authors cite a lot'
                    />
                </div>
                <div>
                    <EditableList
                    type='Co'
                    authors={coAuthors}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                    title='Co Authors'
                    />
                </div>
                <div>
                    <EditableList
                    type='Other'
                    authors={others}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                    showAddItem
                    title='Others'
                    />
                </div>
            </div>
            <div style={footerStyleMobile}>
              <div>
                <Radio
                  style={radioStyle}
                  checked={selected === 'Calendar View'}
                  icon={<RadioButtonUncheckedIcon fontSize="small" />}
                  checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  onChange={() => this.setRadioButtonChange('Calendar View')}
                />
                Calendar View
                <Radio
                  style={radioStyle}
                  checked={selected === 'Email'}
                  icon={<RadioButtonUncheckedIcon fontSize="small" />}
                  checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  onChange={() => this.setRadioButtonChange('Email')}
                />
                Email
              </div>
              <Button
              variant="contained"
              size='medium'
              onClick={() => this.generateSchedule()}
              >
                <div>
                  Generate my JSM schedule
                </div>
              </Button>
              <Dialog open={dialogOpen} onClose={this.closeDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">JSM Schedule</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To get your JSM schedule, please enter your email address here.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={event => this.onEmailChange(event.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.closeDialog} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.sendEmail} color="primary">
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 480px)">
          <div style={containerStyle}>
            <div style={searchStyleContainer}>
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
            </div>
            <div style={suggestionStyle}>
              Feel free to add or remove any names before generating your schedule
            </div>
            <div style={listsStyle}>
              <div>
                <EditableList
                type='Citing'
                authors={citingAuthors}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                title='People who cite you/your co authors a lot'
                />
              </div>
              <div>
                <EditableList
                type='Cited'
                authors={citedAuthors}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                title='People you/your co authors cite a lot'
                />
              </div>
              <div>
                <EditableList
                type='Co'
                authors={coAuthors}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                title='Co Authors'
                />
              </div>
              <div>
                <EditableList
                type='Other'
                authors={others}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                showAddItem
                title='Others'
                />
              </div>
            </div>
            <div style={footerStyle}>
              <Button
              style={buttonStyle}
              variant="contained"
              size='medium'
              onClick={() => this.generateSchedule()}
              >
                Generate my JSM schedule
              </Button>
              <div>
              <Radio
                style={radioStyle}
                checked={selected === 'Calendar View'}
                icon={<RadioButtonUncheckedIcon fontSize="small" />}
                checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                onChange={() => this.setRadioButtonChange('Calendar View')}
              />
              Calendar View
              <Radio
                style={radioStyle}
                checked={selected === 'Google Calendar'}
                icon={<RadioButtonUncheckedIcon fontSize="small" />}
                checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                onChange={() => this.setRadioButtonChange('Google Calendar')}
              />
              Google Calendar
              <Radio
                style={radioStyle}
                checked={selected === 'iCal'}
                icon={<RadioButtonUncheckedIcon fontSize="small" />}
                checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                onChange={() => this.setRadioButtonChange('iCal')}
              />
              iCal
              <Radio
                style={radioStyle}
                checked={selected === 'Text'}
                icon={<RadioButtonUncheckedIcon fontSize="small" />}
                checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                onChange={() => this.setRadioButtonChange('Text')}
              />
              Text (.txt)
              </div>
            </div>
          </div>
        </MediaQuery>
    </div>
    );
  }
}
