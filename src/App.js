import React from 'react';
import { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        response.json()
          .then(users => this.setState({ monsters: users }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  render() {
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>My Monsters Repo</h1>
        <SearchBox placeholder={ 'monster name here' } onSearchChange={ this.onSearchChange } />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }

  onSearchChange = (e) => {
    this.setState({ searchField:e.target.value });
  }
}

export default App;
