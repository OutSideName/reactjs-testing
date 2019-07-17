import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants";

import * as actions from "./index";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import nock from "nock";

const mockStore = configureMockStore([thunkMiddleware]);

it("should create an action to search robots", () => {
  const text = "";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

describe("request robots", () => {
  beforeEach(() => {
    nock("http://localhost:1234")
      .get("/users")
      .reply(200, {
        data: [{ id: "123", name: "thomas", email: "thomas@gmail.com" }]
      },{'Access-Control-Allow-Origin': "http://localhost"});
  });

  it("should call api success", () => {
    const store = mockStore();
    return store.dispatch(actions.requestRobots())
      .then(data=>{
        const expectedAction = store.getActions();
        console.log(expectedAction, data)
        expect(expectedAction.length).toBe(2);
      })
  });
});
