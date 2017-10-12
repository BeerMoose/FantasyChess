import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import WikiComponent from '../routes/wiki/WikiComponent';
import WelcomeComponent from '../routes/welcome/WelcomeComponent';
import GameComponent from '../routes/game/GameComponent';

const AppContainer = () => (
  <Router history={hashHistory}>
    <Route path='/' component={WelcomeComponent} />
    <Route path='/wiki' component={WikiComponent} />
    <Route path='/game' component={GameComponent} />
  </Router>
);

export default AppContainer;
