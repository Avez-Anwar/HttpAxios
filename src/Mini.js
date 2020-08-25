import React, { Component } from "react";

export default class Mini extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gunShots: 0,
    };
  }

  gunHundler = () => {
    this.setState({ gunShots: this.state.gunShots + 1 });
  };

  render() {
    return (
      <div>
        <h1 onMouseOver={this.gunHundler}>
          Mini 14 shots {this.state.gunShots}
        </h1>
      </div>
    );
  }
}
