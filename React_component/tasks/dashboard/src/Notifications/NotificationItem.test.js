import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with correct type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toContain('data-notification-type="default"');
    expect(wrapper.text()).toBe('test');
  });

  it('renders with correct html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
  describe('NotificationItem component', () => {
    it('should call markAsRead with the right id when simulating a click', () => {
      const markAsReadSpy = jest.fn();
      const wrapper = shallow(<NotificationItem markAsRead={markAsReadSpy} id={1} />);
      wrapper.simulate('click');
      expect(markAsReadSpy).toHaveBeenCalledWith(1);
    });
  });
});
