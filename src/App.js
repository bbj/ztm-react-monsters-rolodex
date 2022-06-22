import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super();

    this.state = {
      name: { firstName: 'Bruno', lastName: 'Jullien' },
      company: 'PII'
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <p>
            Hi this is {this.state.firstName} {this.state.lastName}, I work at {this.state.company}.
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return { firstName: "Bruno (clicked)", lastName: "Jullien" };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
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