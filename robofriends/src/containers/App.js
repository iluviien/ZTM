import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
// import { robots } from "../robots.js";
import SearchBox from "../components/SearchBox.js";
import "./App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary";
function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setRobots(users));
    console.log(count);
  }, [count]);
  const onSearchChange = event => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1> Loading..</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />;
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}
export default App;
