import React from "react";
import "../styles/Time.css";
const Time = ({ label, value }) => {
  return (
    <div className="Time">
      <div className="card">
        <div className="card-inner">
          <div className="top">
            <span className="top-number">{value}</span>
          </div>
          <div className="bottom">
            <span className="bottom-number">{value}</span>
          </div>
        </div>
        <div className="time">{value}</div>
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export default Time;
