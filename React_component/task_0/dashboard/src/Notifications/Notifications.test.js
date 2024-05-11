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
});
