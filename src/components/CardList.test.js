import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';
import renderer from 'react-test-renderer';

it("testing render json", ()=>{
  const wrapper = renderer.create(<CardList />).toJSON();
  expect(wrapper).toMatchSnapshot();
})

it("testing instance", ()=> {
  const wrapper = shallow(<CardList />);
  expect(wrapper.instance()).toMatchSnapshot();
})



