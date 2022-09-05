import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "tachyons";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (!robots.length) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1>Search Robots</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
