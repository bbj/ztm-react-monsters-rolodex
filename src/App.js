import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super();

    this.state = {
      name: 'Bruno1'
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <p>
            Hi {this.state.name}
          </p>
          <button>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

/* what was generated initially
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/