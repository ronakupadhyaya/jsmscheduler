import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import MediaQuery from 'react-responsive';
import { attendees } from './attendees';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import MenuItem from '@material-ui/core/MenuItem';

const containerStyle = {
  maxHeight: 400,
  overflow: 'auto',
  backgroundColor: 'white',
  marginLeft: 20,
  marginRight: 20,
  border: '1px solid'
}

const listItemStyle = {
  width: 250,
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '#e0e0e0',
  height: 50,
}

const firstListItemStyle = {
  marginTop: -8,
  width: 250,
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '#e0e0e0',
}

const addItemStyle = {
  width: 250,
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '#e0e0e0',
}

const deleteIconStyle = {
  marginLeft: 10,
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

export default class EditableList extends React.Component {
  constructor(props) {
    super(props);
    const { authors } = this.props;
    this.state = {
      item: '',
      authors: authors,
      suggestions: [],
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      item: newValue
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
    <ListItem style={addItemStyle}>
      <input
        {...inputProps}
      />
    <AddIcon
    style={deleteIconStyle}
    onClick={() => this.addItem()}
    />
    </ListItem>
  );

  componentDidUpdate(prevProps) {
    if(this.props.authors !== prevProps.authors || this.props.item !== prevProps.item) {
      const { authors } = this.props;
      this.setState({
        item: '',
        authors: authors,
      })
    }
  }

  setAddItemState = (value) => {
    this.setState({
      item: value,
    });
  }

  addItem = (value) => {
    const { type, addItem } = this.props;
    addItem(this.state.item, type);
    this.setState({
      item: '',
    });
  }

  renderList() {
    const { authors } = this.state;
    const { deleteItem, type, title } = this.props;
    return (authors && authors.length > 0) || type === 'Other' ? (
      <React.Fragment>
        <div style={listTitleStyle}>{title}</div>
        <div style={containerStyle}>
          {this.renderAddItem()}
          {authors && authors.length > 0 ?
            (
              <List>
                {authors.map((author, index) => {
                  return index === 0 ?
                  (<ListItem key={index} style={firstListItemStyle}>
                    {author}
                  <DeleteIcon
                  style={deleteIconStyle}
                  onClick={() => deleteItem(author, type)}
                   />
                  </ListItem>)
                  :
                  (<ListItem key={index} style={listItemStyle}>
                    {author}
                  <DeleteIcon
                  style={deleteIconStyle}
                  onClick={() => deleteItem(author, type)}
                   />
                  </ListItem>)
                })}
              </List>
            ) :
            null
          }
        </div>
      </React.Fragment>
    ) :
    null;
  }

  renderListMobile() {
    const { authors } = this.state;
    const { deleteItem, type, title } = this.props;
    return (authors && authors.length > 0) || type === 'Other' ? (
      <React.Fragment>
        <div style={listTitleStyleMobile}>{title}</div>
        <div style={containerStyle}>
          {this.renderAddItem()}
          {authors && authors.length > 0 ?
            (
              <List>
                {authors.map((author, index) => {
                  return index === 0 ?
                  (<ListItem key={index} style={firstListItemStyle}>
                    {author}
                  <DeleteIcon
                  style={deleteIconStyle}
                  onClick={() => deleteItem(author, type)}
                   />
                  </ListItem>)
                  :
                  (<ListItem key={index} style={listItemStyle}>
                    {author}
                  <DeleteIcon
                  style={deleteIconStyle}
                  onClick={() => deleteItem(author, type)}
                   />
                  </ListItem>)
                })}
              </List>
            ) :
            null
          }
        </div>
      </React.Fragment>
    ) :
    null;
  }

  renderAddItem() {
      const { showAddItem } = this.props;
      const { item, suggestions } = this.state;

      const inputProps = {
        placeholder: 'Add Name',
        value: item,
        onChange: this.onChange,
        onKeyDown: event => this.setAddItemState(event.target.value),
        style: {
          fontSize: 15,
        }
      };

      if(showAddItem) {
        return (
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
                zIndex: 1,
                marginTop: 1,
                left: 0,
                right: 0,
                backgroundColor: '#FFFFFF',
                fontFamily: 'sans-serif',
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
        );
      }
      else {
        return null;
      }
  }

  render() {

    return (
      <React.Fragment>
        <MediaQuery query="(max-device-width: 480px)">
          {this.renderListMobile()}
        </MediaQuery>
        <MediaQuery query="(min-device-width: 480px)">
         {this.renderList()}
        </MediaQuery>
      </React.Fragment>
    );
  }
}
