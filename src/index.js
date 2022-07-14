import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );
    return <h1>Latitude: </h1>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
