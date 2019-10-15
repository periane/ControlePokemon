import React, { Component } from "react";
import "./style.css";
import poke from "../poke.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a href="" className="navbar-brand col-sm-3 col-md-2 mr-0">
          <img src={poke}
          style ={{
            height:"50px"
          }}>
            </img>
          </a>
          <h5> WELCOME TO THE POKEMON DESK</h5>
        </nav>
      </div>
    );
  }
}

export default Navbar;
