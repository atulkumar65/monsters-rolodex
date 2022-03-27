import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return { monsters: data };
        });
      });
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLowerCase() };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={this.onSearchChange}
          placeholder="search-monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
