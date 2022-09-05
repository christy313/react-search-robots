import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="tc">
      {robots.map((robot, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
