import React, { Component } from "react";
import PokeList from "./PokeList";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <PokeList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
