import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(()=>{
  const mockProp = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false 
  }

  wrapper = shallow(<MainPage {...mockProp} />);
})

it("renders Mainpages with crashing", ()=> {
  expect(wrapper.instance()).toMatchSnapshot();
})

it("filter robots correctly", () => {
  expect(wrapper.instance().filteredRobots()).toEqual([]);
})