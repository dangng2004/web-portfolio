import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import Home from './Home';
import Software from './Software';
import Art from './Art';
import Desserts from './Desserts';
import Resume from './Resume';
import ExtendedEssay from './ExtendedEssay';

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="navbar">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/software">Software</NavLink></li>
            <li><NavLink to="/art">Art</NavLink></li>
            <li><NavLink to="/desserts">Desserts</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/ee">IB Extended Essay</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/software" component={Software}/>
            <Route path="/art" component={Art}/>
            <Route path="/desserts" component={Desserts}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/ee" component={ExtendedEssay}/>
          </div>
        </div>
        <div className="footer">
            <p>Phone: +1 (773) 936-0857</p>
            <p>Email: dangnguyen@uchicago.edu</p>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
