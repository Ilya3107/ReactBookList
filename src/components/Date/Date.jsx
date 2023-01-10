import React from "react";

function Date({ time }) {
  return (
    <div className="date">
      <div className="date__info">
        <div className="date__numder">10</div>
        <div className="date__month">Jan</div>
      </div>
      <div className="date__hour">{`${time.hours} ${time.minuts} ${time.seconds}`}</div>
    </div>
  );
}

export default Date;
