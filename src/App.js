import React, { Component } from 'react';

class App extends Component {

  state = {
    // hello: 'hello app js!'
    count: 0
  };

  handleChange = () => {
    this.setState({
      hello: 'bye app js!'
    });
  };

  conutUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        {/* <div>{this.state.hello}</div> */}
        {/* <button onClick={this.handleChange}>Click Me!</button> */}
        <div>{this.state.count}</div>
        <button onClick={this.conutUp}>Count up!</button>
      </div>
    );
  }
}

export default App;
