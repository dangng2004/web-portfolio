import React from 'react';
import './Software.css'

class Software extends React.Component {
  render() {
    return (
      <div className="software-page">
        <div className="mealmatch">
          <iframe src="https://www.youtube.com/embed/msDx7pRjzSc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="hourglass">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QPPuRJ3ObZw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="chancemap">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9ry6eoSqxtM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default Software;
