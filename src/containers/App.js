import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "tachyons";
import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

function App({ searchField, onSearchChange }) {
  const [robots, setRobots] = useState([]);

  // const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  // const onSearchChange = (e) => {
  //   setSearchField(e.target.value);
  // };

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
