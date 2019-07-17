import React from "react";

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class ComponentName extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    let { searchField = "", robots = [] } = this.props;
    return robots.filter(robot =>
      robot.name.toLocaleLowerCase().includes(searchField)
    );
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    if (isPending) {
      return <h1 className="tc">Loading...</h1>;
    }

    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={this.filteredRobots()} />
        </Scroll>
      </div>
    );
  }
}

export default ComponentName;
