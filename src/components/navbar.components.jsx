import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar <span class="badge bg-secondary">{this.props.Nonzero}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
