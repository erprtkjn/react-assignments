import React, { Component } from 'react';
import './App.css';
import UserOutput from "./User/UserOutput";
import UserInput from './User/UserInput';

class App extends Component {

  state = {
    userNames: ['Prateek' , 'Aaku', 'React']
  }

  manipulateOutputHandler = (event) => {

    this.setState({
      userNames: [event.target.value, 'Aaku', 'React']
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '16px auto'
    }

    return (
      <div className="App">
        <UserInput changed={this.manipulateOutputHandler} 
          userName={this.state.userNames[0]}
          style={style} />
        <UserOutput userName={this.state.userNames[0]} />
        <UserOutput userName={this.state.userNames[1]} />
        <UserOutput userName={this.state.userNames[2]} />
      </div>
    );
  }
}

export default App;
