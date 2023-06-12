import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots.js";
import SearchBox from "../components/SearchBox.js";
import "./App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary";
function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: ""
  //   };
}
// componentDidMount() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => this.setState({ robots: users }));
// }
const onSearchChange = event => {
  setSearchField({ searchfield: event.target.value });
};

const filteredRobots = robots.filter(robot => {
  return robot.name.toLowerCase().includes(searchfield.toLowerCase());
});
return !robots.length ? (
  <h1> Loading..</h1>
) : (
  <div className="tc">
    <h1 className="f1">RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange} />
    <Scroll>
      <ErrorBoundary>
        <CardList robots={filteredRobots} />;
      </ErrorBoundary>
    </Scroll>
  </div>
);

export default App;
