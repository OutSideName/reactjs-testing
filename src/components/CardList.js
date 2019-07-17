import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  cardComponent = () => {
    let { robots = [] } = this.props;
    return robots.map(robot => <Card key={robot.id} {...robot} />);
  };
  render() {
    return <div>{this.cardComponent()}</div>;
  }
}

export default CardList;
