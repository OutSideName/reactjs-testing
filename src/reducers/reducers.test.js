import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants";

import * as reducer from './index';

describe("Search robots", ()=> {
  const initialStateSearch = {
    searchField: ""
  };

  it("should return the initial state", ()=> {
    expect(reducer.searchRobots(undefined, {}))
      .toEqual(initialStateSearch)
  })
})

describe("Test request robots", ()=> {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  }

  it("should return the initial state", ()=> {
    expect(reducer.requestRobots(undefined, {}))
      .toEqual(initialStateRobots);
  })

  it("should request Request robots pending", ()=>{
    expect(reducer.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({
      isPending: true,
      robots: [],
      error: ''
    })
  })

  it("should request Request robots success", ()=>{
    expect(reducer.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: "1",
        name: "Robots1",
        email: "robots1@mail.com"
      }]
    })).toEqual({
      isPending: false,
      robots: [{
        id: "1",
        name: "Robots1",
        email: "robots1@mail.com"
      }],
      error: ''
    })
  })

  it("should request Request robots failed", ()=>{
    expect(reducer.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'NO!!!!!!'
    })).toEqual({
      isPending: false,
      robots: [],
      error: 'NO!!!!!!'
    })
  })
})

