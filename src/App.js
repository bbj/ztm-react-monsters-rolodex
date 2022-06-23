import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
    }
  }

  //called the first time the component is placed into the DOM
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App" >
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;