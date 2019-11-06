import React, { Component } from 'react';
import './App.css';
import Orders from '../../../components/Orders/Orders';

class App extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <main className="App">
        <h1>Burrito Builder</h1>

        <Orders burritos={this.props.burritos}/>
      </main>
    );
  }
}

export default App;
