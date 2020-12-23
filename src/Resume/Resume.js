import React from 'react';
import resume from './DangNguyen_Resume_CS.pdf';
import './Resume.css'

class Resume extends React.Component {
  render() {
    return (
      <div className="resume-page">
        <embed className="resume" src={resume}></embed>
      </div>
    );
  }
}

export default Resume;
