import React from 'react';
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

const headerStyle = {
  marginTop: 50,
  fontSize: 50,
  color: '#FFFFFF',
  marginBottom: 25,
}

const listsStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 25,
}

const listTitleStyle = {
  marginLeft: 20,
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

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    let name = null;
    let citedAuthors = null;
    let citingAuthors = null;
    let others = null;
    if(this.props.location.previous && this.props.location.previous == 'home') {
      name = this.props.location.name;
      citingAuthors = [];
      citedAuthors = [];
      others = [];
      localStorage.setItem('name', name);
    }
    else {
      name = localStorage.getItem('name');
      citingAuthors = JSON.parse(localStorage.getItem('citingAuthors')) || [];
      citedAuthors = JSON.parse(localStorage.getItem('citedAuthors')) || [];
      others = JSON.parse(localStorage.getItem('others')) || [];
    }
    this.state = {
      selected: 'Calendar View',
      citingAuthors: citingAuthors,
      citedAuthors: citedAuthors,
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

        citedAuthors = citedAuthors.map(author => author.name);
        citedAuthors = citedAuthors.filter(author => !author.includes("null"));

        citingAuthors = citingAuthors.map(author => author.name);
        citingAuthors = citingAuthors.filter(author => !author.includes("null"));

        this.setState({
          citingAuthors: citingAuthors,
          citedAuthors: citedAuthors,
          loading: false,
        });

        localStorage.setItem('citingAuthors', JSON.stringify(citingAuthors));
        localStorage.setItem('citedAuthors', JSON.stringify(citedAuthors));
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
    const { citingAuthors, citedAuthors, others } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(others);
    this.props.history.push({
      pathname: 'calendar',
      state: {
        authors: authors,
      }
    });
  }

  openGoogleCalendarInstructions = () => {
    const { citingAuthors, citedAuthors, others } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(others);
    this.props.history.push({
      pathname: 'instructions',
      state: {
        authors: authors,
        view: 'Google Calendar'
      },
    });
  };

  openiCalInstructions = () => {
    const { citingAuthors, citedAuthors, others } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(others);
    this.props.history.push({
      pathname: 'instructions',
      state: {
        authors: authors,
        view: 'iCal'
      },
    });
  };

  openTextInstructions = () => {
    const { citingAuthors, citedAuthors, others } = this.state;
    const authors = citingAuthors.concat(citedAuthors).concat(others);
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
      others,
      citingAuthorsItem,
      citedAuthorsItem,
      othersItem,
      loading,
      name,
    } = this.state;

    if(loading) {
      return (
        <div style={progressContainerStyle}>
          <div style={progressHeaderStyle}>
            <p>Please wait while your personal talk recommendations are being generated.</p>
            <p>This may take 30 seconds or so... but it's far less time than going through the entire JSM program book yourself!</p>
          </div>
          <CircularProgress />
        </div>
      );
    }
    const header = (name && name !== 'undefined') ?
    (name.split(" ")[0] + ', here are the people we think you\'d like to hear') :
    ('Here are the people we think you\'d like to hear');

    return (
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
    );
  }
}
