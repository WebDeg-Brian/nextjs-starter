import React from 'react';
import { Index } from '../../pages';
import { shallow } from 'enzyme';

describe('Tests for index page', () => {
  test('Render without crashing', () => {
    const wrapper = shallow(<Index />);

    expect(wrapper.exists()).toBe(true);
  });

  test('Contains hello world', () => {
    const wrapper = shallow(<Index />);
    
    expect(wrapper.find('div').text()).toBe('Hello World');
  });
});
