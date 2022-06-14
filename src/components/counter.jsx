import React, { Component } from "react";
class Counter extends Component {

  formatCount() {
    const {value } = this.props.value;
    return value > 0 ? value : "zero";
  }

  render() {
    return (
      <div>
        <span style={{ marginLeft: 20 }}> {this.formatCount()}</span>
        <button
          className="btn btn-secondary m-2 btn-sm"
          onClick={this.props.onClicked}
        >
          inc
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={this.props.onDelete } > Delete</button>
      </div>
    );
  }
}

export default Counter;
