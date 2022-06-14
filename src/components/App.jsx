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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm order-2 first align-self-end">
              <Navbar totalCount={this.getTotalCount()} />
              <Counters
                count={this.state.count}
                onDelete={this.handleDelete}
                onClicked={this.handleClick}
                onReset={this.handleReset}
              />
            </div>
            <div className="col-sm order-1 ">
              <h5>React-Counter-app</h5>
              <p>
                This is a simple react app. It demonstrates some of the key
                concepts in react
              </p>
              <ul>
                <li>Components, Props, state</li>
                <li>Passing props to components</li>
                <li>Lifting the state up</li>
                <li>Handling events i.e DOM events</li>
              </ul>
              <p>Visit <a href="https://github.com/zack-oss/react-counter">github.com</a> for the source code</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
