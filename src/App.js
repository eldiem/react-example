import React, { Component } from 'react';

class App extends Component {

  state = {
    count: 0
  };

  handleChange = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <h3>index Props</h3>
        <div className="props">
          <span>{this.props.message}</span>
        </div>

        <h3>State</h3>
        <div className="state">
          {this.state.count}
          <button onClick={this.handleChange}>Click up!</button>
        </div>

        <h3>App Props</h3>
        <div className="inside-app-props">
          <InsideApp
            count={this.state.count}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

class InsideApp extends Component {
  // App.js에서 InsideApp 컴포넌트를 받아오고, 
  // 그 때 App 컴포넌트의 state와 메소드인 count 와 handleChange를 상속
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.handleChange}>Click Me!</button>
      </div>
    )
  }
}

export default App;
