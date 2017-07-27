import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/BaseLayout'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/' component={Home}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
