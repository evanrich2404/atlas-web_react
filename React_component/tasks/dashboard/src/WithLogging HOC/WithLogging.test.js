// WithLogging.test.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  it('should call console.log on mount and on unmount with Component when the wrapped element is pure html', () => {
    console.log = jest.fn();
    const HOC = WithLogging(() => <p />);
    const wrapper = mount(<HOC />);
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
    jest.restoreAllMocks();
  });

  it('should call console.log on mount and on unmount with the name of the component when the wrapped element is the Login component', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = mount(<HOC />);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
    jest.restoreAllMocks();
  });
});
