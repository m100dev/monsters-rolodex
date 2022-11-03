import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor() {
    super(); 

    this.state = {
      monsters: [],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this);
  }

  //When this component is placed onto the DOM, this is called
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }


  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }


  //Renders the html with current state
  render() {
    //const monsters = this.state.monsters.... Uses destructuring
    const { monsters, searchField } = this.state;

    //returns and stores filtered array to declared const
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={ this.handleChange }
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;


/* FUNCTION THAT RETURNS HTML */
/* function App() {
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
} */
