import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem component', () => {
  it('should call markAsRead with the right id when simulating a click', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem markAsRead={markAsReadSpy} id={1} />);
    wrapper.simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});
