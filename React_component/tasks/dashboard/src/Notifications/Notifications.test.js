import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component tests', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('does not display the div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('displays the div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);

    describe('With empty listNotifications', () => {
      beforeEach(() => {
        notifications = shallow(<Notifications displayDrawer listNotifications={[]} />);
      });

      it('renders Notifications component without crashing', () => {
        expect(notifications.exists()).toBe(true);
      });

      it('renders correctly when listNotifications is empty or not passed', () => {
        expect(notifications.find('NotificationItem').html()).toContain('No new notification for now');
      });

      it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
        expect(notifications.find('p').text()).not.toContain('Here is the list of notifications');
      });
    });

    describe('With listNotifications containing elements', () => {
      const listNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ];

      beforeEach(() => {
        notifications = shallow(
          <Notifications displayDrawer listNotifications={listNotifications} />
        );
      });

      it('renders correctly when listNotifications contains elements', () => {
        expect(notifications.find('NotificationItem')).toHaveLength(listNotifications.length);
      });
    });
  });

  describe('Notifications component', () => {
    it('should call markAsRead with the right message when calling the function', () => {
      const wrapper = shallow(<Notifications />);
      const instance = wrapper.instance();
      const markAsReadSpy = jest.spyOn(console, 'log');
      instance.markAsRead(1);
      expect(markAsReadSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
      markAsReadSpy.mockRestore();
    });
    describe('Notifications component', () => {
      // ...

      it('should not rerender when updating the props with the same list', () => {
        const listNotifications = [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
        ];
        const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
        const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
        wrapper.setProps({ listNotifications });
        expect(shouldComponentUpdate).toHaveBeenCalled();
        expect(shouldComponentUpdate).toHaveReturnedWith(false);
      });

      it('should rerender when updating the props with a longer list', () => {
        const listNotifications = [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
        ];
        const longerListNotifications = [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
        ];
        const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
        const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
        wrapper.setProps({ listNotifications: longerListNotifications });
        expect(shouldComponentUpdate).toHaveBeenCalled();
        expect(shouldComponentUpdate).toHaveReturnedWith(true);
      });
    });
  });
});
