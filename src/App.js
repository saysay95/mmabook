import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/CardList.js';
import {SearchBox} from './components/searchbox/SearchBox.js'


class App extends Component {

  constructor () {
    super();

    this.state = {
      monsters : [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((result) => {
          this.setState({
            monsters: result
          });
        }
      )
  }

  onSearchChange = event =>  {
    this.setState({searchField : event.target.value });
  };

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
                              monster.name.toLowerCase().includes(searchField.toLowerCase()));


    return(
    <div className='App'>
          <SearchBox placeholder='Search monsters' onSearchChange={this.onSearchChange} />
          {/* <SearchBox placeholder='Search monsters' onInputChange={e => this.setState({searchField : e.target.value })}/> */}
          <CardList monsters={filteredMonsters}/>
    </div>
    );
  }


}

export default App;
