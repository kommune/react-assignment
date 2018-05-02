import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "superkitty"
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      border: '5px solid green'
    };

    return (
      <div className="App">
        <UserInput
          style={style}
          changed={this.changeUsernameHandler} />
        <UserOutput 
          username={this.state.username} />
        <UserOutput username="Hello Kitty" />
      </div>
    );
  }
}

export default App;
