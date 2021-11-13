import React, {Component} from 'react';

import './scss/main.scss';
import './scss/sections/aboutUs.scss';
import './scss/sections/contact.scss';
import './scss/sections/fourSteps.scss';
import './scss/sections/homeHeader.scss';
import './scss/sections/homeOptions.scss';
import './scss/sections/homeThreeColumns.scss';
import './scss/sections/whoWeHelp.scss';





import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from './components/Home'


class App extends Component {
  render() {
    return <HashRouter>
             <Switch>
               <Route exact path='/' component={Home} />
               
               

        
             </Switch>
           </HashRouter>;
  }
}

export default App;
