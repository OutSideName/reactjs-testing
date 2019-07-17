import React, { Component } from 'react';

class Scroll extends Component {
  render() {
    let {children} = this.props;
    return (
      <div
        style={{
          overflow: "scroll",
          border: "5px solid black",
          height: "800px"
        }}
      >
          {children}
      </div>
    );
  }
}

export default Scroll;