import React from 'react';
import "./TestMarker.css";

const TestMarker = ({ text }) => {
  return (
    <div className="marker">
      {text}
    </div>
  )
}

export default TestMarker;