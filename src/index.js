import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import References from './components/References';
import BaseLayout from './components/BaseLayout'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/references' component={References}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
