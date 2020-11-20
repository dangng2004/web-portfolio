import React from 'react';
import profile from './profile_pic.png';

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col left">
          <img className="profile" src={profile}></img>
        </div>
        <div className="col right">
          <div>
            <h1>WELCOME TO MY WEBSITE!</h1>
            <span>Check out my software, art, desserts, and more!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
