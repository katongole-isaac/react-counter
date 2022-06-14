import React, { Component } from "react";
import Counters from "./counters";
import Navbar from "./navbar";

class App extends Component {
  state = {
    count: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleClick = (item) => {
    let count = [...this.state.count];
    let index = count.indexOf(item);
    count[index] = item;
    count[index].value += 1;
    this.setState({ count });
  };

  handleDelete = (elem) => {
    let count = [...this.state.count];
    count = count.filter((item) => item.id !== elem.id);
    this.setState({ count });
  };

  handleReset = () => {
    let count = [...this.state.count];
    count.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({ count });
  };

  getTotalCount = () => {
    return this.state.count.filter((item) => item.value > 0).length;
  };

  render() {
    return (
      <>
        <Navbar totalCount={this.getTotalCount()} />
        <Counters
          count={this.state.count}
          onDelete={this.handleDelete}
          onClicked={this.handleClick}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
