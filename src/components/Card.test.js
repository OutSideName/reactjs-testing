import {shallow, mount} from 'enzyme';
import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';

it("testing render json", ()=>{
  const wrapper = renderer.create(<Card />).toJSON();
  expect(wrapper).toMatchSnapshot();
})

it("testing instance", ()=> {
  const wrapper = shallow(<Card />);
  expect(wrapper.instance()).toMatchSnapshot();
})



