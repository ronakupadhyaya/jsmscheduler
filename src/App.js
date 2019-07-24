import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Result from './Result';
import Calendar from './Calendar';
import Instructions from './Instructions';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Result} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/instructions" component={Instructions} />
      </Router>
    );
  }
}
