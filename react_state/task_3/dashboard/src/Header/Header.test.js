import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an img and h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('mounts the Header component with a default context value and verifies that the logoutSection is not created', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { email: '', password: '', isLoggedIn: false }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('mounts the Header component with a user defined (isLoggedIn is true and an email is set) and verifies that the logoutSection is created', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { email: 'test@example.com', password: '', isLoggedIn: true }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
  });

  it('mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy', () => {
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { email: 'test@example.com', password: '', isLoggedIn: true }, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
