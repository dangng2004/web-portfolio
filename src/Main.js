import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

import Home from './Home/Home';
import Software from './Software/Software';
import Art from './Art/Art';
import Cooking from './Cooking/Cooking';
import Resume from './Resume/Resume';

import './Main.css'

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="screen">
          <div className="content">
            <ul className="navbar">
              <li><NavLink exact to="/web-portfolio">Home</NavLink></li>
              <li><NavLink to="/software">Software</NavLink></li>
              <li><NavLink to="/art">Art</NavLink></li>
              <li><NavLink to="/cooking">Cooking</NavLink></li>
              <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
            <div className="pages">
              <Route exact path="/web-portfolio" component={Home}/>
              <Route path="/software" component={Software}/>
              <Route path="/art" component={Art}/>
              <Route path="/cooking" component={Cooking}/>
              <Route path="/resume" component={Resume}/>
            </div>
          </div>
          <div className="footer">
              <p>Phone: +1 (773) 936-0857</p>
              <p>Email: dangnguyen@uchicago.edu</p>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
