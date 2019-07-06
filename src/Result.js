import React from 'react';
import MediaQuery from 'react-responsive';
import EditableList from './EditableList';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CircularProgress from '@material-ui/core/CircularProgress';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundImage: "url('https://api.regonline.com/CustImages/290000/299570/104475878-DENVER_1.1910x1000_copy_2.jpg')",
  backgroundSize: 'cover',
  fontWeight: 'semi-bold',
  alignItems: 'center',
};

const containerStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundImage: "url('https://api.regonline.com/CustImages/290000/299570/104475878-DENVER_1.1910x1000_copy_2.jpg')",
  backgroundSize: 'cover',
  fontWeight: 'semi-bold',
  alignItems: 'center',
}

const headerStyle = {
  marginTop: 50,
  fontSize: 50,
  color: '#FFFFFF',
  marginBottom: 25,
}

const headerStyleMobile = {
  marginTop: 50,
  fontSize: 25,
  color: '#FFFFFF',
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
  color: '#FFFFFF',
  marginBottom: 10,
}

const listTitleStyleMobile = {
  marginTop: 40,
  fontSize: 15,
  fontWeight: 'semi-bold',
  textAlign: 'center',
  color: '#FFFFFF',
  marginBottom: 10,
}

const suggestionStyle = {
  fontSize: 20,
  fontWeight: 'semi-bold',
  textAlign: 'center',
  color: '#FFFFFF',
  marginBottom: 25,
}

const footerStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: '#FFFFFF',
}

const footerStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  color: '#FFFFFF',
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20,
  marginBottom: 20,
  alignItems: 'center',
};

const buttonStyle = {
  marginRight: 10,
}

const radioStyle = {
  color: '#FFFFFF',
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



  componentDidMount() {
    const { name } = this.state;
    if(this.props.location.previous && this.props.location.previous == 'home') {
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
    }
    else if(type == 'Cited') {
      var citedAuthors = this.state.citedAuthors;
      citedAuthors = citedAuthors.filter(author => author !== toDeleteAuthor);
      this.setState({
        citedAuthors: citedAuthors,
      });
    }
    else if(type == 'Co') {
      var coAuthors = this.state.coAuthors;
      coAuthors = coAuthors.filter(author => author !== toDeleteAuthor);
      this.setState({
        coAuthors: coAuthors,
      });
    }
    else {
      var others = this.state.others;
      others = others.filter(author => author !== toDeleteAuthor);
      this.setState({
        others: others,
      });
    }
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
            <div style={headerStyleMobile}>
              {header}
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
            <div style={headerStyle}>
              {header}
            </div>
            <div style={suggestionStyle}>
              Feel free to edit these lists or add new names in 'Others'
              before generating your schedule
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
              variant="contained"
              size='medium'
              onClick={() => this.generateSchedule()}
              >
                <div style={buttonStyle}>
                  Generate my JSM schedule
                </div>
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
