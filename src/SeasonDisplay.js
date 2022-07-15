import React from "react";

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const text =
    season === "winter" ? "Burr! It's chilly!" : "Let's hit the beach!";
  return <div>{text}</div>;
};

export default SeasonDisplay;
