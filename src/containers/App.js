import React, { Component } from "react";
import {connect} from "react-redux";
import {setSearchField, requestRobots} from "../actions";

import MainPage from '../components/MainPage';

class App extends Component {

  render (){
    return <MainPage {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToPropss  = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value))
    },
    onRequestRobots: () => {
      dispatch(requestRobots())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPropss
)(App);
