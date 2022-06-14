import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <>
        <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
        {this.props.count.map((item, i) => (
          <Counter
            key={i}
            onDelete={() => this.props.onDelete(item)}
            value={item}
            onClicked={() => this.props.onClicked(item)}
          />
        ))}
      </>
    );
  }
}

export default Counters;
