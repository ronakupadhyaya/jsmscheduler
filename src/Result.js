import React from 'react';
import MediaQuery from 'react-responsive';
import EditableList from './EditableList';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputBase from '@material-ui/core/Input';

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

const headerStyle = {
  marginTop: 50,
  fontSize: 50,
  // color: '#FFFFFF',
  color: '#000000',
  marginBottom: 25,
}

const headerStyleMobile = {
  marginTop: 50,
  fontSize: 25,
  // color: '#FFFFFF',
  color: '#000000',
  marginBottom: 30,
  paddingLeft: 5,
  paddingRight: 5,
  textAlign: 'center'
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

const listTitleStyle = {
  marginLeft: 20,
  fontSize: 15,
  fontWeight: 'semi-bold',
  textAlign: 'center',
  // color: '#FFFFFF',
  color: '#000000',
  marginBottom: 10,
}

const listTitleStyleMobile = {
  marginTop: 40,
  fontSize: 15,
  fontWeight: 'semi-bold',
  textAlign: 'center',
  // color: '#FFFFFF',
  color: '#000000',
  marginBottom: 10,
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

const searchStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 50,
  width: 800,
  backgroundColor: '#FFFFFF',
};

const searchStyleMobile = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 40,
  width: 350,
  backgroundColor: '#FFFFFF',
};

const searchInputStyle = {
  marginLeft: 10,
  width: 750,
};

const searchInputStyleMobile = {
  marginLeft: 10,
  width: 750,
};

const searchButtonStyle = {
  backgroundColor: '#2761AA',
  fontSize: 10,
  marginRight: 10,
  marginLeft: 5,
  color: '#FFFFFF'
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
    if(this.props.location.previous && this.props.location.previous == 'home') {
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
    let name = null;
    let citedAuthors = null;
    let citingAuthors = null;
    let coAuthors = null;
    let others = null;
    if(this.props.location.previous && this.props.location.previous == 'searchFirst' && this.props.location.name != prevProps.location.name) {
      console.log('in');
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
    if(this.props.location.previous && (this.props.location.previous == 'home' || this.props.location.previous == 'searchFirst')) {
      fetch("http://citation-env.t9nubywtms.us-east-2.elasticbeanstalk.com/getAuthors?name=" + name)
      .then((response) => response.text())
      .then((responseText) => {
        const json = JSON.parse(responseText);
        var citedAuthors = json['Cited Authors'];
        var citingAuthors = json['Citing Authors'];
        var coAuthors = [];

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
    if(selected == 'Calendar View') {
      this.openCalendarView();
    }
    else if(selected == 'Google Calendar') {
      this.openGoogleCalendarInstructions();
    }
    else if(selected == 'iCal') {
      this.openiCalInstructions();
    }
    else {
      this.openTextInstructions();
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
    if(type == 'Citing') {
      var citingAuthors = this.state.citingAuthors;
      citingAuthors.unshift(item);
      this.setState({
        citingAuthors: citingAuthors,
        citingAuthorsItem: '',
      });
      localStorage.setItem('citingAuthors', JSON.stringify(citingAuthors));
    }
    else if(type == 'Cited') {
      var citedAuthors = this.state.citedAuthors;
      citedAuthors.unshift(item);
      this.setState({
        citedAuthors: citedAuthors,
        citedAuthorsItem: '',
      });
      localStorage.setItem('citedAuthors', JSON.stringify(citedAuthors));
    }
    else if(type == 'Co') {
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
    if(type == 'Citing') {
      var citingAuthors = this.state.citingAuthors;
      citingAuthors = citingAuthors.filter(author => author !== toDeleteAuthor);
      this.setState({
        citingAuthors: citingAuthors,
      });
      localStorage.setItem('citingAuthors', JSON.stringify(citingAuthors));
    }
    else if(type == 'Cited') {
      var citedAuthors = this.state.citedAuthors;
      citedAuthors = citedAuthors.filter(author => author !== toDeleteAuthor);
      this.setState({
        citedAuthors: citedAuthors,
      });
      localStorage.setItem('citedAuthors', JSON.stringify(citedAuthors));
    }
    else if(type == 'Co') {
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

  render() {
    const { selected,
      citingAuthors,
      citedAuthors,
      coAuthors,
      others,
      citingAuthorsItem,
      citedAuthorsItem,
      othersItem,
      loading,
      name,
    } = this.state;

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
    const header = (name && name !== 'undefined') ?
    (name.split(" ")[0] + ', here are the people we think you\'d like to hear') :
    ('Here are the people we think you\'d like to hear');

    return (
      <div>
        <MediaQuery query="(max-device-width: 480px)">
          <div style={containerStyleMobile}>
          <div style={searchStyleContainerMobile}>
            <div style={searchStyleMobile}>
              <InputBase
                placeholder="Your Name (First Last)"
                disableUnderline={true}
                style={searchInputStyleMobile}
                value={name}
                onChange={event => this.setNameState(event.target.value)}
                onKeyDown={event => this.onKeyDown(event.key, event.target.value)}
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
          </div>
            <div style={listsStyleMobile}>
              <div>
                <div style={listTitleStyleMobile}>People who cite you a lot</div>
                  <EditableList
                  type='Citing'
                  authors={citingAuthors}
                  addItem={this.addItem}
                  deleteItem={this.deleteItem}
                  />
                </div>
                <div>
                  <div style={listTitleStyleMobile}>People you cite a lot</div>
                    <EditableList
                    type='Cited'
                    authors={citedAuthors}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                    />
                </div>
                <div>
                  <div style={listTitleStyleMobile}>Co Authors</div>
                    <EditableList
                    type='Co'
                    authors={coAuthors}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                    />
                </div>
                <div>
                  <div style={listTitleStyleMobile}>Others</div>
                    <EditableList
                    type='Other'
                    authors={others}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                    />
                </div>
            </div>
            <div style={footerStyleMobile}>
              <div>
                <Radio
                  style={radioStyle}
                  checked={selected == 'Calendar View'}
                  icon={<RadioButtonUncheckedIcon fontSize="small" />}
                  checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  onChange={() => this.setRadioButtonChange('Calendar View')}
                />
                Calendar View
                <Radio
                  style={radioStyle}
                  checked={selected == 'Google Calendar'}
                  icon={<RadioButtonUncheckedIcon fontSize="small" />}
                  checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  onChange={() => this.setRadioButtonChange('Google Calendar')}
                />
                Google Calendar
              </div>
              <div>
                <Radio
                  style={radioStyle}
                  checked={selected == 'iCal'}
                  icon={<RadioButtonUncheckedIcon fontSize="small" />}
                  checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  onChange={() => this.setRadioButtonChange('iCal')}
                />
                iCal
                <Radio
                  style={radioStyle}
                  checked={selected == 'Text'}
                  icon={<RadioButtonUncheckedIcon fontSize="small" />}
                  checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  onChange={() => this.setRadioButtonChange('Text')}
                />
                Text (.txt)
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
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 480px)">
          <div style={containerStyle}>
            <div style={searchStyleContainer}>
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
                style={searchButtonStyle}
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
            <div style={suggestionStyle}>
              Feel free to add or remove any names before generating your schedule
            </div>
            <div style={listsStyle}>
              <div>
                <div style={listTitleStyle}>People who cite you a lot</div>
                <EditableList
                type='Citing'
                authors={citingAuthors}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                />
              </div>
              <div>
                <div style={listTitleStyle}>People you cite a lot</div>
                <EditableList
                type='Cited'
                authors={citedAuthors}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                />
              </div>
              <div>
                <div style={listTitleStyle}>Co Authors</div>
                <EditableList
                type='Co'
                authors={coAuthors}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                />
              </div>
              <div>
                <div style={listTitleStyle}>Others</div>
                <EditableList
                type='Other'
                authors={others}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
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
                checked={selected == 'Calendar View'}
                icon={<RadioButtonUncheckedIcon fontSize="small" />}
                checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                onChange={() => this.setRadioButtonChange('Calendar View')}
              />
              Calendar View
              <Radio
                style={radioStyle}
                checked={selected == 'Google Calendar'}
                icon={<RadioButtonUncheckedIcon fontSize="small" />}
                checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                onChange={() => this.setRadioButtonChange('Google Calendar')}
              />
              Google Calendar
              <Radio
                style={radioStyle}
                checked={selected == 'iCal'}
                icon={<RadioButtonUncheckedIcon fontSize="small" />}
                checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                onChange={() => this.setRadioButtonChange('iCal')}
              />
              iCal
              <Radio
                style={radioStyle}
                checked={selected == 'Text'}
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
