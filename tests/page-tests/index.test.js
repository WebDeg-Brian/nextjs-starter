import React from 'react';
import { Index } from '../../pages';
import { shallow } from 'enzyme';

describe('Tests for index page', () => {
  test('Render without crashing', () => {
    shallow(<Index />);
  });

  test('Contains hello world', () => {
    const wrapper = shallow(<Index />);

    expect(wrapper.find('div').text()).toBe('Hello World');
  });
});
