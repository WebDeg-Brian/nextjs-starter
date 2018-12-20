import React from 'react';
import { Index } from '../../pages';
import { shallow } from 'enzyme';

const wrapper = shallow(<Index />);

describe('Tests for index page', () => {
  test('Render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Contains hello world', () => {
    expect(wrapper.find('div').text()).toBe('Hello World');
  });
});
