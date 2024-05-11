import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should call markAsRead with the right message when calling the function', () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    const markAsReadSpy = jest.spyOn(console, 'log');
    instance.markAsRead(1);
    expect(markAsReadSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    markAsReadSpy.mockRestore();
  });
});
